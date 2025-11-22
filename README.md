# solid-lezer-markdown

A SolidJS component for rendering Markdown using mdast (Markdown Abstract Syntax Tree) with extensible support for custom renderers and markdown extensions.

## Features

### Core Markdown Support
- **Headings** (h1-h6) with both `#` prefix and underline syntax
- **Paragraphs** with proper text formatting
- **Emphasis** - italic (`*text*` or `_text_`) and bold (`**text**` or `__text__`)
- **Lists** - ordered (numbered) and unordered (bullet) lists with deep nesting
- **Code** - inline code with backticks and fenced/indented code blocks
- **Links** - inline links and autolinks with automatic `target="_blank"`
- **Images** - inline images with alt text support
- **Blockquotes** - nested blockquotes with full markdown support inside
- **Horizontal rules** - using `---`, `***`, or `___`
- **Line breaks** - soft breaks and hard breaks (double space + newline)
- **HTML** - raw HTML rendering support
- **Escape sequences** - backslash escaping for special characters

### Extended Features (with GFM extensions)
- **Tables** - pipe-based table syntax with header/body separation
- **Strikethrough** - `~~deleted text~~` syntax
- **Task lists** - checkbox syntax (rendered as plain text)

### Advanced Features
- **Custom Renderers** - Override any node type with custom components
- **Extension Support** - Compatible with micromark extensions
- **mdast Extensions** - Support for mdast-util extensions
- **Context API** - Access to node stack and markdown props in custom renderers
- **Performance** - Efficient rendering of large documents
- **Type Safety** - Full TypeScript support with proper typing

## Installation

```bash
npm install solid-lezer-markdown
```

## Basic Usage

```tsx
import { Markdown } from 'solid-lezer-markdown';

function App() {
  const content = `
# Hello World

This is a **bold** statement with *italic* text.

- Item 1
- Item 2
  - Nested item

[Visit Example](https://example.com)
`;

  return <Markdown markdown={content} />;
}
```

## Custom Renderers

You can override the default rendering for any node type:

```tsx
import { Markdown } from 'solid-lezer-markdown';

const customRenderers = {
  // Custom paragraph renderer
  paragraph: (props) => (
    <p class="custom-paragraph">
      <DefaultChildren node={props.node} />
    </p>
  ),
  
  // Custom link renderer
  link: (props) => (
    <a 
      href={props.node.url} 
      class="custom-link"
      target="_blank"
    >
      <DefaultChildren node={props.node} />
    </a>
  ),
  
  // Custom heading renderer
  heading: (props) => {
    const Tag = `h${props.node.depth}`;
    return (
      <Tag class={`heading-${props.node.depth}`}>
        <DefaultChildren node={props.node} />
      </Tag>
    );
  }
};

<Markdown 
  markdown={content} 
  renderers={customRenderers}
/>
```

## Extensions

Add support for GitHub Flavored Markdown (tables, strikethrough):

```tsx
import { Markdown } from 'solid-lezer-markdown';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';

const markdown = `
| Feature | Status |
|---------|--------|
| Tables  | ✓      |
| ~~Old~~ | New    |
`;

<Markdown 
  markdown={markdown}
  extensions={[gfm()]}
  mdastExtensions={[gfmFromMarkdown()]}
/>
```

## Available Node Types

The following node types can be customized via the `renderers` prop:

- `blockquote` - Block quotes
- `break` - Hard line breaks
- `code` - Code blocks
- `delete` - Strikethrough text (requires GFM)
- `emphasis` - Italic text
- `heading` - Headers (h1-h6)
- `html` - Raw HTML
- `image` - Images
- `inlineCode` - Inline code
- `link` - Hyperlinks
- `list` - Ordered/unordered lists
- `listItem` - List items
- `paragraph` - Paragraphs
- `strong` - Bold text
- `table` - Tables (requires GFM)
- `tableCell` - Table cells
- `tableRow` - Table rows
- `text` - Plain text
- `thematicBreak` - Horizontal rules

## Context Hooks

Custom renderers can access context information:

```tsx
import { useNodeStack, useMarkdownRendererProps } from 'solid-lezer-markdown';

const CustomRenderer = (props) => {
  // Get the current node stack (useful for nested contexts)
  const nodeStack = useNodeStack();
  
  // Access the markdown props
  const markdownProps = useMarkdownRendererProps();
  
  return <div>{/* your custom rendering */}</div>;
};
```

## TypeScript Support

The library is fully typed with TypeScript. Node types are properly typed based on mdast specifications:

```tsx
import type { Component } from 'solid-js';
import type { Paragraph } from 'mdast';

const customParagraph: Component<{ node: Paragraph }> = (props) => {
  // props.node is fully typed as Paragraph
  return <p>{/* render children */}</p>;
};
```

## License

MIT
