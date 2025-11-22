<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-mdast-renderer&background=tiles&project=%20" alt="solid-mdast-renderer">
</p>

# solid-mdast-renderer

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

mdast based markdown renderer

## Quick start

Install it:

```bash
npm i mdast-util-from-markdown @bigmistqke/solid-mdast-renderer
# or
yarn add mdast-util-from-markdown @bigmistqke/solid-mdast-renderer
# or
pnpm add mdast-util-from-markdown @bigmistqke/solid-mdast-renderer
```

Use it:

```tsx
import { Markdown } from '@bigmistqke/solid-mdast-renderer'

export function App() {
  return <Markdown markdown="# Hello World!" />
}
```
