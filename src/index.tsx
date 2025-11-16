import type { SyntaxNode } from '@lezer/common'
import { parser as markdownParser, Strikethrough, Table } from '@lezer/markdown'
import {
  type Component,
  createContext,
  createEffect,
  createMemo,
  For,
  Show,
  useContext,
} from 'solid-js'
import { createDebug } from './utils'

const debug = createDebug('MDRenderer', false)

// Use parser with table and strikethrough support
const parser = markdownParser.configure([Table, Strikethrough])
const MDRendererPropsContext = createContext<MDRendererProps>()
const NodeStackContext = createContext<Array<MDNode>>([])

function useNodeStack() {
  return useContext(NodeStackContext) as [MDNode, ...Array<MDNode>]
}

function useMDRendererProps() {
  const context = useContext(MDRendererPropsContext)
  if (!context) {
    throw new Error('Use useMDRendererProps in a descendant of MDRenderer')
  }
  return context
}

interface MDRendererProps {
  content: string
  renderers?: Partial<typeof DefaultNodeRenderers>
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
/*                                      Utils                                     */
/*                                                                                */
/**********************************************************************************/

function parseMarkdownTree(node: SyntaxNode, input: string): MDNode {
  const children: MDNode[] = []
  let child = node.firstChild

  debug(
    `Parsing node: ${node.name} (${node.from}-${node.to}): "${input.slice(node.from, node.to)}"`,
  )

  // Log all children for emphasis nodes
  if (node.name === 'StrongEmphasis' || node.name === 'Emphasis') {
    let temp = child
    const childrenInfo = []
    while (temp) {
      childrenInfo.push(
        `${temp.name} (${temp.from}-${temp.to}): "${input.slice(temp.from, temp.to)}"`,
      )
      temp = temp.nextSibling
    }
    debug(`  Children of ${node.name}:`, childrenInfo)
  }

  // If this is a paragraph or similar container, we need to handle text between children
  const textContainerTypes = [
    'Paragraph',
    'Emphasis',
    'StrongEmphasis',
    'Link',
    'LinkLabel',
    'Strikethrough',
    'ListItem',
    'TaskListItem',
    'Blockquote',
    'TableCell',
    'TableHeader',
    'Table',
    'TableRow',
  ]

  if (child && textContainerTypes.includes(node.name)) {
    let lastEnd = node.from

    // For list items, skip the list marker
    if ((node.name === 'ListItem' || node.name === 'TaskListItem') && child?.name === 'ListMark') {
      lastEnd = child.to
      child = child.nextSibling

      // For task lists, also skip the task marker that follows
      if (node.name === 'TaskListItem' && child?.name === 'TaskMarker') {
        lastEnd = child.to
        child = child.nextSibling
      }
    }

    while (child) {
      // Add any text between the last child and this child
      if (child.from > lastEnd) {
        const textContent = input.slice(lastEnd, child.from)
        if (textContent) {
          children.push({
            type: 'Text',
            from: lastEnd,
            to: child.from,
            content: textContent,
            children: [],
          })
        }
      }

      // Skip various mark types during parsing
      const skipInParsing = [
        'TaskMarker',
        'QuoteMark',
        'BlockQuoteMark',
        'StrikethroughMark',
        'TableDelimiter',
        'HeaderMark',
        'TableDelimiterRow',
        'LinkMark',
        'EmphasisMark',
      ]
      if (skipInParsing.includes(child.name)) {
        lastEnd = child.to
        child = child.nextSibling
        continue
      }

      children.push(parseMarkdownTree(child, input))
      lastEnd = child.to
      child = child.nextSibling
    }

    // Add any remaining text after the last child
    if (lastEnd < node.to) {
      const textContent = input.slice(lastEnd, node.to)
      if (textContent) {
        children.push({
          type: 'Text',
          from: lastEnd,
          to: node.to,
          content: textContent,
          children: [],
        })
      }
    }
  } else {
    // For other node types, just parse children normally
    while (child) {
      children.push(parseMarkdownTree(child, input))
      child = child.nextSibling
    }
  }

  return {
    type: node.name,
    from: node.from,
    to: node.to,
    content: input.slice(node.from, node.to),
    children,
  }
}

function extractLinkUrl(node: MDNode): string {
  const urlNode = node.children.find(child => child.type === 'URL')
  return urlNode ? urlNode.content : '#'
}

function extractImageAlt(node: MDNode): string {
  if (node.type === 'Image') {
    debug(
      'extractImageAlt - Image node children:',
      node.children.map(c => ({ type: c.type, content: c.content })),
    )
  }

  // For images like ![Alt text](url), the alt text is between the first and second LinkMark
  // We need to extract it manually from the content
  const content = node.content
  const match = content.match(/^!\[(.*?)\]/)
  return match?.[1] || ''
}

/**********************************************************************************/
/*                                                                                */
/*                                   Components                                   */
/*                                                                                */
/**********************************************************************************/

const NOOP = () => ''

export const Prefixes: Record<string, string> = {
  ListItem: '   ',
  Blockquote: '> ',
}

export const DefaultNodeRenderers: Record<string, Component> = {
  // Root document container
  Document() {
    const [node] = useNodeStack()
    debug('Document node:', {
      content: node.content,
      children: node.children.length,
      childTypes: node.children.map(c => c.type),
    })
    return (
      <Show when={node.children.length > 0} fallback={<span>{node.content}</span>}>
        <For each={node.children}>{child => <DefaultNode node={child} />}</For>
      </Show>
    )
  },

  // Regular paragraph text
  Paragraph() {
    const [node] = useNodeStack()
    return (
      <Show when={node.children.length > 0} fallback={<span>{node.content}</span>}>
        <span>
          <For each={node.children}>{child => <DefaultNode node={child} />}</For>
        </span>
      </Show>
    )
  },

  // # Heading 1
  ATXHeading1() {
    const [node] = useNodeStack()
    return <h1>{node.content.replace(/^#\s+/, '')}</h1>
  },
  // ## Heading 2
  ATXHeading2() {
    const [node] = useNodeStack()
    return <h2>{node.content.replace(/^##\s+/, '')}</h2>
  },
  // ### Heading 3
  ATXHeading3() {
    const [node] = useNodeStack()
    return <h3>{node.content.replace(/^###\s+/, '')}</h3>
  },
  // #### Heading 4
  ATXHeading4() {
    const [node] = useNodeStack()
    return <h4>{node.content.replace(/^####\s+/, '')}</h4>
  },
  // ##### Heading 5
  ATXHeading5() {
    const [node] = useNodeStack()
    return <h5>{node.content.replace(/^#####\s+/, '')}</h5>
  },
  // ###### Heading 6
  ATXHeading6() {
    const [node] = useNodeStack()
    return <h6>{node.content.replace(/^######\s+/, '')}</h6>
  },

  // Indented code block (4+ spaces)
  CodeBlock() {
    const [node] = useNodeStack()
    const outdented = () =>
      node.content
        .split('\n')
        .map(content => content.replaceAll('    ', ''))
        .join('\n')
        .replace(/^```[\w]*\n/, '')
        .replace(/\n```$/, '')

    return (
      <pre style={{ margin: '8px 0' }}>
        <code>{outdented()}</code>
      </pre>
    )
  },

  // ``` fenced code blocks ```
  FencedCode() {
    const [node, ...stack] = useNodeStack()

    return (
      <pre
        style={{
          'background-color': 'var(--cm-editor-background, rgba(128, 128, 128, 0.1))',
          padding: '8px',
          'border-radius': '4px',
          margin: '8px 0',
        }}
      >
        <code>
          {node.children
            .filter(child => child.type === 'CodeText')
            .map(text => text.content)
            .join('')}
        </code>
      </pre>
    )
  },

  // `inline code`
  InlineCode() {
    const [node] = useNodeStack()
    return (
      <code
        style={{
          'background-color': 'var(--cm-editor-background, rgba(128, 128, 128, 0.1))',
          padding: '2px 4px',
          'border-radius': '3px',
          'font-family': 'monospace',
        }}
      >
        {node.content.replace(/^`+|`+$/g, '')}
      </code>
    )
  },

  // Plain text content
  Text() {
    const [node, previous] = useNodeStack()
    return <Show when={previous?.type !== 'ListItem'}>{node.content}</Show>
  },

  // *italic* or _italic_
  Emphasis() {
    const [node] = useNodeStack()
    return (
      <em>
        <Show when={node.children.length > 0} fallback={node.content.replace(/^\*|\*$/g, '')}>
          <For each={node.children}>{child => <DefaultNode node={child} />}</For>
        </Show>
      </em>
    )
  },

  // **bold** or __bold__
  StrongEmphasis() {
    const [node] = useNodeStack()
    return (
      <strong>
        <Show when={node.children.length > 0} fallback={node.content.replace(/^\*\*|\*\*$/g, '')}>
          <For each={node.children}>{child => <DefaultNode node={child} />}</For>
        </Show>
      </strong>
    )
  },

  // [link text](url) or [link text](url "title")
  Link() {
    const [node] = useNodeStack()
    return (
      <a href={extractLinkUrl(node)} target="_blank" rel="noopener noreferrer">
        <DefaultNode node={node.children[0]!} />
      </a>
    )
  },

  // ![alt text](image.jpg) or ![alt text](image.jpg "title")
  Image() {
    const [node] = useNodeStack()
    return <img src={extractLinkUrl(node)} alt={extractImageAlt(node)} />
  },

  // - bullet list or * bullet list
  BulletList() {
    const [node] = useNodeStack()
    return (
      <ul>
        <For each={node.children}>{child => <DefaultNode node={child} />}</For>
      </ul>
    )
  },

  // 1. ordered list
  OrderedList() {
    const [node] = useNodeStack()
    return (
      <ol>
        <For each={node.children}>{child => <DefaultNode node={child} />}</For>
      </ol>
    )
  },

  // List item content
  ListItem() {
    const [node] = useNodeStack()
    return (
      <li>
        <For each={node.children}>{child => <DefaultNode node={child} />}</For>
      </li>
    )
  },

  // > blockquote
  Blockquote() {
    const [node] = useNodeStack()
    return (
      <blockquote
        style={{
          'border-left': '4px solid var(--cm-editor-selectionBackground, #ddd)',
          'padding-left': '16px',
          margin: '8px 0',
        }}
      >
        <For each={node.children}>{child => <DefaultNode node={child} />}</For>
      </blockquote>
    )
  },
  // --- or *** or ___
  HorizontalRule() {
    return (
      <hr
        style={{
          border: 'none',
          'border-top': '1px solid var(--cm-editor-selectionBackground, #ddd)',
          margin: '16px 0',
        }}
      />
    )
  },

  // Soft line break
  LineBreak: () => <br />,
  // Hard line break (two spaces + newline)
  HardLineBreak: () => <br />,
  // HardBreak is the actual node type from lezer
  HardBreak: () => <br />,

  // | col1 | col2 | table syntax
  Table() {
    const [node] = useNodeStack()

    console.log('table is ', node)

    return (
      <table
        style={{
          'border-collapse': 'collapse',
          margin: '8px 0',
          width: '100%',
        }}
      >
        <Show when={node.children.some(child => child.type === 'TableHeader')}>
          <thead>
            <For each={node.children.filter(child => child.type === 'TableHeader')}>
              {header => (
                <tr>
                  <For each={header.children.filter(child => child.type === 'TableCell')}>
                    {cell => (
                      <th
                        style={{
                          border: '1px solid var(--cm-editor-selectionBackground, #ddd)',
                          padding: '6px 12px',
                          'font-weight': 'bold',
                          'background-color':
                            'var(--cm-editor-background, rgba(128, 128, 128, 0.05))',
                          'text-align': 'left',
                        }}
                      >
                        {<DefaultNode node={cell} />}
                      </th>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </thead>
        </Show>
        <tbody>
          <For each={node.children.filter(child => child.type === 'TableRow')}>
            {row => {
              return (
                <tr>
                  <For each={row.children.filter(child => child.type === 'TableCell')}>
                    {cell => (
                      <td
                        style={{
                          border: '1px solid var(--cm-editor-selectionBackground, #ddd)',
                          padding: '6px 12px',
                          'text-align': 'left',
                        }}
                      >
                        <DefaultNode node={cell} />
                      </td>
                    )}
                  </For>
                </tr>
              )
            }}
          </For>
        </tbody>
      </table>
    )
  },

  // Table row - handled within Table
  TableRow: NOOP,
  // Table header - handled within Table
  TableHeader: NOOP,

  // Table cell content
  TableCell() {
    const [node] = useNodeStack()
    return (
      <Show when={node.children.length > 0} fallback={node.content}>
        <For each={node.children}>{node => <DefaultNode node={node} />}</For>
      </Show>
    )
  },

  // ~~strikethrough~~
  Strikethrough() {
    const [node] = useNodeStack()
    return (
      <del>
        <For each={node.children}>{node => <DefaultNode node={node} />}</For>
      </del>
    )
  },

  // Missing block-level nodes
  // Heading 1\n======= (underlined with =)
  SetextHeading1() {
    const [node] = useNodeStack()
    return <h1>{node.content.split('\n')[0]}</h1>
  },
  // Heading 2\n------- (underlined with -)
  SetextHeading2() {
    const [node] = useNodeStack()
    return <h2>{node.content.split('\n')[0]}</h2>
  },
  // Raw HTML block content
  HTMLBlock() {
    const [node] = useNodeStack()
    return <div innerHTML={node.content} />
  },
  // [link]: url "title" (link reference definition)
  LinkReference: NOOP,
  // <!-- HTML comment block -->
  CommentBlock: NOOP,
  // <?xml processing instruction?>
  ProcessingInstructionBlock: NOOP,

  // Missing inline nodes
  // \\escaped character
  Escape() {
    const [node] = useNodeStack()
    return <>{node.content.slice(1)}</>
  },
  // &amp; &lt; HTML entities
  Entity() {
    const [node] = useNodeStack()
    // Simple HTML entity decoder
    const entities: Record<string, string> = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&apos;': "'",
      '&nbsp;': '\u00A0',
      '&copy;': '\u00A9',
      '&reg;': '\u00AE',
      '&trade;': '\u2122',
    }
    return <>{entities[node.content] || node.content}</>
  },
  // <span>inline HTML</span>
  HTMLTag() {
    const [node] = useNodeStack()
    return <span innerHTML={node.content} />
  },
  // <!-- inline comment -->
  Comment: NOOP,
  // <?xml inline processing instruction?>
  ProcessingInstruction: NOOP,
  // <https://example.com> or https://example.com (auto-detected links)
  Autolink() {
    const [node] = useNodeStack()
    const url = () => node.content.replace(/^<|>$/g, '')

    return (
      <a href={url()} target="_blank" rel="noopener noreferrer">
        {url()}
      </a>
    )
  },

  // Missing token/mark types - return empty string
  // # (header marker)
  HeaderMark: NOOP,
  // > (quote marker)
  QuoteMark: NOOP,
  // [ ] (link bracket markers)
  LinkMark: NOOP,
  // * _ (emphasis markers)
  EmphasisMark: NOOP,
  // ` (code markers)
  CodeMark: NOOP,
  // "title" part in [text](url "title")
  LinkTitle() {
    const [node] = useNodeStack()
    return <For each={node.children}>{child => <DefaultNode node={child} />}</For>
  },
  // [label] part in [label](url)
  LinkLabel() {
    const [node] = useNodeStack()
    return <For each={node.children}>{child => <DefaultNode node={child} />}</For>
  },
  // URL part in links
  URL() {
    const [node] = useNodeStack()
    return <>{node.content}</>
  },
  // Code content without markers
  CodeText() {
    const [node] = useNodeStack()
    return <>{node.content}</>
  },
  // js in ```js (language info)
  CodeInfo: NOOP,

  // Extension nodes (GFM and others)
  // ~~ (strikethrough markers)
  StrikethroughMark: NOOP,
  // | (table delimiter)
  TableDelimiter: NOOP,
  // - [x] task list item or - [ ] task list item
  Task() {
    const [node] = useNodeStack()
    return (
      <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
        <For each={node.children}>{child => <DefaultNode node={child} />}</For>
      </div>
    )
  },
  // [x] or [ ] (task markers)
  TaskMarker: NOOP,
  // ^superscript^
  Superscript() {
    const [node] = useNodeStack()
    return (
      <sup>
        <For each={node.children}>{child => <DefaultNode node={child} />}</For>
      </sup>
    )
  },
  // ^ (superscript markers)
  SuperscriptMark: NOOP,
  // ~subscript~
  Subscript() {
    const [node] = useNodeStack()
    return (
      <sub>
        <For each={node.children}>{child => <DefaultNode node={child} />}</For>
      </sub>
    )
  },
  // ~ (subscript markers)
  SubscriptMark: NOOP,
  // :emoji_name:
  Emoji() {
    const [node] = useNodeStack()
    return <span>{node.content}</span>
  },
}

function DefaultNode(props: { node: MDNode }): any {
  const mdRendererProps = useMDRendererProps()
  debug('DefaultNode processing:', { type: props.node.type, content: props.node.content })

  const Comp = () =>
    mdRendererProps.renderers?.[props.node.type] ?? DefaultNodeRenderers[props.node.type]

  createEffect(() => {
    if (!Comp()) {
      throw new Error(`No Renderer For ${props.node.type}`)
    }
  })

  return (
    <NodeStackContext.Provider value={[props.node, ...useNodeStack()]}>
      <Show when={Comp()} keyed fallback={props.node.content}>
        {Comp => <Comp />}
      </Show>
    </NodeStackContext.Provider>
  )
}

export function MDRenderer(props: MDRendererProps) {
  const root = createMemo(() => {
    const tree = parser.parse(props.content)
    return parseMarkdownTree(tree.topNode, props.content)
  })

  return (
    <MDRendererPropsContext.Provider value={props}>
      <DefaultNode node={root()} />
    </MDRendererPropsContext.Provider>
  )
}
