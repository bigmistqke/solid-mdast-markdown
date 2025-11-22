<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-mdast-renderer&background=tiles&project=%20" alt="solid-mdast-renderer">
</p>

# @bigmistqke/solid-mdast-renderer

A SolidJS component for rendering Markdown via [mdast](https://github.com/syntax-tree/mdast) and [mdast-util-from-markdown](https://github.com/syntax-tree/mdast-util-from-markdown) with extensible support for custom renderers and markdown extensions.

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

### Advanced Features
- **Custom Components** - Override any node type with custom components
- **Extension Support** - Compatible with micromark extensions
- **Mdast Extensions** - Support for mdast-util extensions
- **Context API** - Access to node stack and markdown props in custom components

## Installation

```bash
npm install @bigmistqke/solid-mdast-renderer
```

```bash
pnpm add @bigmistqke/solid-mdast-renderer
```

```bash
yarn add @bigmistqke/solid-mdast-renderer
```

## Basic Usage

```tsx
import { Markdown } from '@bigmistqke/solid-mdast-renderer';

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

## Custom Components

You can override the default rendering for any node type:

```tsx
import { Markdown, Slot } from '@bigmistqke/solid-mdast-renderer';

const components = {
  paragraph: (props) => (
    <p class="custom-paragraph">
      <Slot.Children node={props.node} />
    </p>
  ),
  
  link: (props) => (
    <a 
      href={props.node.url} 
      class="custom-link"
      target="_blank"
    >
      <Slot.Children node={props.node} />
    </a>
  ),
  
  heading: (props) => {
    const Tag = `h${props.node.depth}`;
    return (
      <Tag class={`heading-${props.node.depth}`}>
        <Slot.Children node={props.node} />
      </Tag>
    );
  }
};

<Markdown 
  markdown="# Hello World!"
  components={components}
/>
```

## Extensions

Add support for GitHub Flavored Markdown (tables, strikethrough):

```tsx
import { Markdown } from '@bigmistqke/solid-mdast-renderer';
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

## Context Hooks

Custom components can access context information:

```tsx
import { useNodeStack, useMarkdownRendererProps } from '@bigmistqke/solid-mdast-renderer';

const CustomComponent = (props) => {
  // Get the current node stack (useful for nested contexts)
  const nodeStack = useNodeStack();
  
  // Access the markdown props
  const markdownProps = useMarkdownRendererProps();
  
  return <div>{/* your custom rendering */}</div>;
};
```

## License

MIT
