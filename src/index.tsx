import type { Node, RootContentMap } from 'mdast'
import { fromMarkdown, type Extension as MdastExtension } from 'mdast-util-from-markdown'
import * as gfm from 'mdast-util-gfm'
import type { Extension } from 'micromark-util-types'
import {
  createContext,
  createEffect,
  createMemo,
  For,
  Show,
  useContext,
  type Component,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { createDebug } from './utils'

gfm.gfmToMarkdown

const debug = createDebug('MdastRenderer', false)

// Use parser with table and strikethrough support
const MarkdownPropsContext = createContext<MarkdownProps>()
const NodeStackContext = createContext<Array<Node>>([])
const TableCellContext = createContext<'head' | 'body'>()

function useNodeStack() {
  return useContext(NodeStackContext) as [Node, ...Array<Node>]
}

function useMarkdownRendererProps() {
  const context = useContext(MarkdownPropsContext)
  if (!context) {
    throw new Error('Use useMarkdownProps in a descendant of MdastRenderer')
  }
  return context
}

interface MarkdownProps {
  markdown: string
  renderers?: Partial<typeof DefaultNodeRenderers>
  extensions?: Array<Extension>
  mdastExtensions?: Array<MdastExtension | Array<MdastExtension>>
}

export interface MDNode {
  type: string
  from: number
  to: number
  children: MDNode[]
  content: string
}

/**********************************************************************************/
/*                                                                                */
/*                                   Components                                   */
/*                                                                                */
/**********************************************************************************/

const NOT_IMPLEMENTED_YET = (props: { node: Node }) => {
  throw new Error(`Did not implement node type yet: ${props.node.type}`)
  return null!
}

export const DefaultNodeRenderers: {
  [TKey in keyof RootContentMap]: Component<{
    node: TKey extends keyof RootContentMap ? RootContentMap[TKey] : unknown
  }>
} = {
  // [link]: url "title" (link reference definition)
  linkReference: NOT_IMPLEMENTED_YET,
  definition: NOT_IMPLEMENTED_YET,

  footnoteDefinition: NOT_IMPLEMENTED_YET,
  footnoteReference: NOT_IMPLEMENTED_YET,
  imageReference: NOT_IMPLEMENTED_YET,
  yaml: NOT_IMPLEMENTED_YET,

  // > blockquote
  blockquote(props) {
    return (
      <blockquote>
        <DefaultChildren node={props.node} />
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
        <DefaultChildren node={props.node} />
      </del>
    )
  },

  // *italic* or _italic_
  emphasis(props) {
    return (
      <em>
        <DefaultChildren node={props.node} />
      </em>
    )
  },

  // # Heading 1
  heading(props) {
    return (
      <Dynamic component={`h${props.node.depth}`}>
        <DefaultChildren node={props.node} />
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
        <For each={props.node.children}>{node => <DefaultNode node={node} />}</For>
      </a>
    )
  },

  // - bullet list or * bullet list
  // 1. ordered list
  list(props) {
    return (
      <Dynamic component={props.node.ordered ? 'ol' : 'ul'}>
        <DefaultChildren node={props.node} />
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
          fallback={<DefaultChildren node={props.node.children[0]!} />}
        >
          <DefaultNode node={props.node.children[0]!} />
        </Show>
        <For each={props.node.children.slice(1)}>{node => <DefaultNode node={node} />}</For>
      </li>
    )
  },

  // Regular paragraph text
  paragraph(props) {
    return (
      <p>
        <DefaultChildren node={props.node} />
      </p>
    )
  },

  // **bold** or __bold__
  strong(props) {
    return (
      <strong>
        <DefaultChildren node={props.node} />
      </strong>
    )
  },

  // Plain text content
  text(props) {
    return <>{props.node.value}</>
  },

  tableRow(props) {
    return (
      <tr>
        <DefaultChildren node={props.node} />
      </tr>
    )
  },

  tableCell(props) {
    const context = useContext(TableCellContext)
    return (
      <Dynamic component={context === 'head' ? 'th' : 'td'}>
        <DefaultChildren node={props.node} />
      </Dynamic>
    )
  },

  // | col1 | col2 | table syntax
  table(props) {
    return (
      <table>
        <TableCellContext.Provider value="head">
          <thead>
            <DefaultNode node={props.node.children[0]!} />
          </thead>
        </TableCellContext.Provider>
        <TableCellContext.Provider value="body">
          <tbody>
            <For each={props.node.children.slice(1)}>{row => <DefaultNode node={row} />}</For>
          </tbody>
        </TableCellContext.Provider>
      </table>
    )
  },

  thematicBreak() {
    return <hr />
  },
}

function DefaultChildren(props: { node: Node }) {
  return (
    <For
      each={
        'children' in props.node && Array.isArray(props.node.children) ? props.node.children : []
      }
    >
      {node => <DefaultNode node={node} />}
    </For>
  )
}

function DefaultNode(props: { node: Node }): any {
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
}

export function Markdown(props: MarkdownProps) {
  const root = createMemo(() =>
    fromMarkdown(props.markdown, {
      extensions: props.extensions,
      mdastExtensions: props.mdastExtensions,
    }),
  )

  return (
    <MarkdownPropsContext.Provider value={props}>
      <DefaultChildren node={root()} />
    </MarkdownPropsContext.Provider>
  )
}
