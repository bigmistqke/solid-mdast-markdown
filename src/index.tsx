import type { Node, RootContentMap } from 'mdast'
import { fromMarkdown, Options, type Extension as MdastExtension } from 'mdast-util-from-markdown'
import * as gfm from 'mdast-util-gfm'
import type { Extension } from 'micromark-util-types'
import {
  createContext,
  createEffect,
  createMemo,
  For,
  Show,
  splitProps,
  useContext,
  type Component,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { createDebug } from './utils'

const debug = createDebug('MdastRenderer', false)

interface MarkdownProps<TMap = RootContentMap> extends Options {
  markdown: string
  renderers?: Partial<{
    [TKey in keyof TMap]: Component<{
      node: TMap[TKey]
    }>
  }>
}

/**********************************************************************************/
/*                                                                                */
/*                                    Contexts                                    */
/*                                                                                */
/**********************************************************************************/

// Use parser with table and strikethrough support
const MarkdownPropsContext = createContext<MarkdownProps>()
const NodeStackContext = createContext<Array<Node>>([])
const TableCellContext = createContext<'head' | 'body'>()

/**
 * Hook to access the current node stack in a custom renderer.
 * Returns an array with the current node as first element and parent nodes following.
 * @returns {[Node, ...Array<Node>]} The node stack with current node first
 */
export function useNodeStack() {
  return useContext(NodeStackContext) as [Node, ...Array<Node>]
}

/**
 * Hook to access the markdown renderer props including custom renderers and extensions.
 * Must be used within a Markdown component or custom renderer.
 * @template T - The type map for custom renderers
 * @returns {MarkdownProps<T>} The markdown props
 * @throws {Error} If used outside of a Markdown component
 */
export function useMarkdownRendererProps<T = RootContentMap>() {
  const context = useContext(MarkdownPropsContext)
  if (!context) {
    throw new Error('Use useMarkdownProps in a descendant of MdastRenderer')
  }
  return context as MarkdownProps<T>
}

/**********************************************************************************/
/*                                                                                */
/*                                   Components                                   */
/*                                                                                */
/**********************************************************************************/

const NOT_IMPLEMENTED_YET = (props: { node: Node }): null => {
  throw new Error(`Did not implement node type yet: ${props.node.type}`)
}

/**
 * Default renderers for all mdast node types.
 * These can be overridden by providing custom renderers via the Markdown component's renderers prop.
 */
export const DefaultNodeRenderers: {
  [TKey in keyof RootContentMap]: Component<{
    node: RootContentMap[TKey]
  }>
} = {
  definition: NOT_IMPLEMENTED_YET,
  footnoteDefinition: NOT_IMPLEMENTED_YET,
  footnoteReference: NOT_IMPLEMENTED_YET,
  imageReference: NOT_IMPLEMENTED_YET,
  linkReference: NOT_IMPLEMENTED_YET,
  yaml: NOT_IMPLEMENTED_YET,

  // > blockquote
  blockquote(props) {
    return (
      <blockquote>
        <Slot.Children node={props.node} />
      </blockquote>
    )
  },

  // Soft line break
  break: () => {
    return <br />
  },

  // Indented code block (4+ spaces)
  code(props) {
    return (
      <pre>
        <code>{props.node.value}</code>
      </pre>
    )
  },

  delete(props) {
    return (
      <del>
        <Slot.Children node={props.node} />
      </del>
    )
  },

  // *italic* or _italic_
  emphasis(props) {
    return (
      <em>
        <Slot.Children node={props.node} />
      </em>
    )
  },

  // # Heading 1
  heading(props) {
    return (
      <Dynamic component={`h${props.node.depth}`}>
        <Slot.Children node={props.node} />
      </Dynamic>
    )
  },

  html(props) {
    return <div innerHTML={props.node.value} />
  },

  // ![alt text](image.jpg) or ![alt text](image.jpg "title")
  image(props) {
    return <img src={props.node.url} alt={props.node.alt ?? ''} />
  },

  // `inline code`
  inlineCode(props) {
    return <code>{props.node.value}</code>
  },

  // [link text](url) or [link text](url "title")
  link(props) {
    return (
      <a href={props.node.url} target="_blank" rel="noopener noreferrer">
        <For each={props.node.children}>{node => <Slot.Node node={node} />}</For>
      </a>
    )
  },

  // - bullet list or * bullet list
  // 1. ordered list
  list(props) {
    return (
      <Dynamic component={props.node.ordered ? 'ol' : 'ul'}>
        <Slot.Children node={props.node} />
      </Dynamic>
    )
  },

  // List item content
  listItem(props) {
    return (
      <li>
        <Show
          when={props.node.spread}
          /* We skip the paragraph node when the list-item is not spread */
          fallback={<Slot.Children node={props.node.children[0]!} />}
        >
          <Slot.Node node={props.node.children[0]!} />
        </Show>
        <For each={props.node.children.slice(1)}>{node => <Slot.Node node={node} />}</For>
      </li>
    )
  },

  // Regular paragraph text
  paragraph(props) {
    return (
      <p>
        <Slot.Children node={props.node} />
      </p>
    )
  },

  // **bold** or __bold__
  strong(props) {
    return (
      <strong>
        <Slot.Children node={props.node} />
      </strong>
    )
  },

  // Plain text content
  text(props) {
    return <>{props.node.value}</>
  },

  // | col1 | col2 | table syntax
  table(props) {
    return (
      <table>
        <TableCellContext.Provider value="head">
          <thead>
            <Slot.Node node={props.node.children[0]!} />
          </thead>
        </TableCellContext.Provider>
        <TableCellContext.Provider value="body">
          <tbody>
            <For each={props.node.children.slice(1)}>{row => <Slot.Node node={row} />}</For>
          </tbody>
        </TableCellContext.Provider>
      </table>
    )
  },

  tableCell(props) {
    const context = useContext(TableCellContext)
    return (
      <Dynamic component={context === 'head' ? 'th' : 'td'}>
        <Slot.Children node={props.node} />
      </Dynamic>
    )
  },

  tableRow(props) {
    return (
      <tr>
        <Slot.Children node={props.node} />
      </tr>
    )
  },

  thematicBreak() {
    return <hr />
  },
}

/**
 * Utility components for rendering markdown nodes and their children.
 * Used internally by default renderers and can be used in custom renderers.
 */
export const Slot = {
  /**
   * Renders all children of a node.
   * Handles nodes that may not have children gracefully.
   * @param {Object} props - Component props
   * @param {Node} props.node - The parent node whose children should be rendered
   */
  Children(props: { node: Node }) {
    return (
      <For
        each={
          'children' in props.node && Array.isArray(props.node.children) ? props.node.children : []
        }
      >
        {node => <Slot.Node node={node} />}
      </For>
    )
  },

  /**
   * Renders a single mdast node using the appropriate renderer.
   * Looks up custom renderers first, falls back to default renderers.
   * @param {Object} props - Component props
   * @param {Node} props.node - The mdast node to render
   * @throws {Error} If no renderer is found for the node type
   */
  Node(props: { node: Node }): any {
    const mdastRendererProps = useMarkdownRendererProps()
    debug('DefaultNode processing:', props.node)

    const Comp = () =>
      // @ts-expect-error
      mdastRendererProps.renderers?.[props.node.type] ?? DefaultNodeRenderers[props.node.type]

    createEffect(() => {
      if (!Comp()) {
        throw new Error(`No Renderer For ${props.node.type}`)
      }
    })

    return (
      <NodeStackContext.Provider value={[props.node, ...useNodeStack()]}>
        <Show when={Comp()} keyed>
          {Comp => <Comp node={props.node} />}
        </Show>
      </NodeStackContext.Provider>
    )
  },
}

/**
 * Main component for rendering markdown content.
 * Converts markdown string to mdast and renders it using custom or default renderers.
 * @template T - The type map for custom renderers
 * @param {MarkdownProps<T>} props - Component props
 * @param {string} props.markdown - The markdown string to render
 * @param {Partial<{[TKey in keyof T]: Component<{node: T[TKey]}>}>} [props.renderers] - Custom renderers for node types
 * @param {Array<Extension>} [props.extensions] - Micromark extensions (e.g., for GFM support)
 * @param {Array<MdastExtension | Array<MdastExtension>>} [props.mdastExtensions] - mdast extensions
 * @example
 * ```tsx
 * <Markdown
 *   markdown="# Hello World"
 *   renderers={{ heading: CustomHeading }}
 *   extensions={[gfm()]}
 *   mdastExtensions={[gfmFromMarkdown()]}
 * />
 * ```
 */
export function Markdown<T = RootContentMap>(props: MarkdownProps<T>) {
  const [, options] = splitProps(props, ['markdown', 'renderers'])
  const root = createMemo(() => fromMarkdown(props.markdown, options))
  return (
    <MarkdownPropsContext.Provider value={props}>
      <Slot.Children node={root()} />
    </MarkdownPropsContext.Provider>
  )
}
