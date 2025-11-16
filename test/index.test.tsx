/** 
 * Generated from testSpec.ts - [DO NOT EDIT MANUALLY]
 * Run 'pnpm test:update' to regenerate this file
 **/

import { describe, it, expect } from 'vitest'
import { render } from '@solidjs/testing-library'
import { MDRenderer } from '../src'
import { setup } from "./setup"

setup()

describe('MDRenderer', () => {
      it('renders ATX heading 1', () => {
        const { asFragment } = render(() => <MDRenderer content={"# Heading 1" } />)
        expect(asFragment()).toRenderEqual("<h1>Heading 1</h1>")
      })
      it('renders ATX heading 2', () => {
        const { asFragment } = render(() => <MDRenderer content={"## Heading 2" } />)
        expect(asFragment()).toRenderEqual("<h2>Heading 2</h2>")
      })
      it('renders ATX heading 3', () => {
        const { asFragment } = render(() => <MDRenderer content={"### Heading 3" } />)
        expect(asFragment()).toRenderEqual("<h3>Heading 3</h3>")
      })
      it('renders ATX heading 4', () => {
        const { asFragment } = render(() => <MDRenderer content={"#### Heading 4" } />)
        expect(asFragment()).toRenderEqual("<h4>Heading 4</h4>")
      })
      it('renders ATX heading 5', () => {
        const { asFragment } = render(() => <MDRenderer content={"##### Heading 5" } />)
        expect(asFragment()).toRenderEqual("<h5>Heading 5</h5>")
      })
      it('renders ATX heading 6', () => {
        const { asFragment } = render(() => <MDRenderer content={"###### Heading 6" } />)
        expect(asFragment()).toRenderEqual("<h6>Heading 6</h6>")
      })
      it('renders Setext heading 1', () => {
        const { asFragment } = render(() => <MDRenderer content={"Heading 1\n=========" } />)
        expect(asFragment()).toRenderEqual("<h1>Heading 1</h1>")
      })
      it('renders Setext heading 2', () => {
        const { asFragment } = render(() => <MDRenderer content={"Heading 2\n---------" } />)
        expect(asFragment()).toRenderEqual("<h2>Heading 2</h2>")
      })
      it('renders a simple paragraph', () => {
        const { asFragment } = render(() => <MDRenderer content={"This is a paragraph." } />)
        expect(asFragment()).toRenderEqual("<span>This is a paragraph.</span>")
      })
      it('renders multiple paragraphs', () => {
        const { asFragment } = render(() => <MDRenderer content={"First paragraph.\n\nSecond paragraph." } />)
        expect(asFragment()).toRenderEqual("<span>First paragraph.</span><span>Second paragraph.</span>")
      })
      it('renders italic text with asterisks', () => {
        const { asFragment } = render(() => <MDRenderer content={"*italic*" } />)
        expect(asFragment()).toRenderEqual("<span><em>italic</em></span>")
      })
      it('renders italic text with underscores', () => {
        const { asFragment } = render(() => <MDRenderer content={"_italic_" } />)
        expect(asFragment()).toRenderEqual("<span><em>italic</em></span>")
      })
      it('renders bold text with double asterisks', () => {
        const { asFragment } = render(() => <MDRenderer content={"**bold**" } />)
        expect(asFragment()).toRenderEqual("<span><strong>bold</strong></span>")
      })
      it('renders bold text with double underscores', () => {
        const { asFragment } = render(() => <MDRenderer content={"__bold__" } />)
        expect(asFragment()).toRenderEqual("<span><strong>bold</strong></span>")
      })
      it('renders emphasis within paragraph', () => {
        const { asFragment } = render(() => <MDRenderer content={"This is *italic* and **bold** text." } />)
        expect(asFragment()).toRenderEqual("<span>This is <em>italic</em> and <strong>bold</strong> text.</span>")
      })
      it('renders strikethrough text', () => {
        const { asFragment } = render(() => <MDRenderer content={"~~strikethrough~~" } />)
        expect(asFragment()).toRenderEqual("<span><del>strikethrough</del></span>")
      })
      it('renders strikethrough within paragraph', () => {
        const { asFragment } = render(() => <MDRenderer content={"This is ~~deleted~~ text." } />)
        expect(asFragment()).toRenderEqual("<span>This is <del>deleted</del> text.</span>")
      })
      it('renders bullet list with dashes', () => {
        const { asFragment } = render(() => <MDRenderer content={"- Item 1\n- Item 2\n- Item 3" } />)
        expect(asFragment()).toRenderEqual("<ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul>")
      })
      it('renders bullet list with asterisks', () => {
        const { asFragment } = render(() => <MDRenderer content={"* Item 1\n* Item 2\n* Item 3" } />)
        expect(asFragment()).toRenderEqual("<ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul>")
      })
      it('renders bullet list with plus signs', () => {
        const { asFragment } = render(() => <MDRenderer content={"+ Item 1\n+ Item 2\n+ Item 3" } />)
        expect(asFragment()).toRenderEqual("<ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul>")
      })
      it('renders ordered list', () => {
        const { asFragment } = render(() => <MDRenderer content={"1. First item\n2. Second item\n3. Third item" } />)
        expect(asFragment()).toRenderEqual("<ol><li><span>First item</span></li><li><span>Second item</span></li><li><span>Third item</span></li></ol>")
      })
      it('renders ordered list with different starting numbers', () => {
        const { asFragment } = render(() => <MDRenderer content={"5. Fifth item\n6. Sixth item\n7. Seventh item" } />)
        expect(asFragment()).toRenderEqual("<ol><li><span>Fifth item</span></li><li><span>Sixth item</span></li><li><span>Seventh item</span></li></ol>")
      })
      it('renders inline code', () => {
        const { asFragment } = render(() => <MDRenderer content={"`code`" } />)
        expect(asFragment()).toRenderEqual("<span><code style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:2px 4px;border-radius:3px;font-family:monospace\">code</code></span>")
      })
      it('renders inline code within paragraph', () => {
        const { asFragment } = render(() => <MDRenderer content={"Use `console.log()` to debug." } />)
        expect(asFragment()).toRenderEqual("<span>Use <code style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:2px 4px;border-radius:3px;font-family:monospace\">console.log()</code> to debug.</span>")
      })
      it('renders fenced code block', () => {
        const { asFragment } = render(() => <MDRenderer content={"```\nconst x = 1;\nconsole.log(x);\n```" } />)
        expect(asFragment()).toRenderEqual("<pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>const x = 1;\nconsole.log(x);</code></pre>")
      })
      it('renders fenced code block with language', () => {
        const { asFragment } = render(() => <MDRenderer content={"```javascript\nconst x = 1;\nconsole.log(x);\n```" } />)
        expect(asFragment()).toRenderEqual("<pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>const x = 1;\nconsole.log(x);</code></pre>")
      })
      it('renders indented code block', () => {
        const { asFragment } = render(() => <MDRenderer content={"    const x = 1;\n    console.log(x);" } />)
        expect(asFragment()).toRenderEqual("<pre style=\"margin:8px 0\"><code>const x = 1;\nconsole.log(x);</code></pre>")
      })
      it('renders indented code block break', () => {
        const { asFragment } = render(() => <MDRenderer content={"    const x = 1;\nconsole.log(x);" } />)
        expect(asFragment()).toRenderEqual("<pre style=\"margin:8px 0\"><code>const x = 1;</code></pre><span>console.log(x);</span>")
      })
      it('renders inline link', () => {
        const { asFragment } = render(() => <MDRenderer content={"[Example.com](https://example.com)" } />)
        expect(asFragment()).toRenderEqual("<span><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Example.com</a></span>")
      })
      it('renders autolink', () => {
        const { asFragment } = render(() => <MDRenderer content={"<https://example.com>" } />)
        expect(asFragment()).toRenderEqual("<span><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">https://example.com</a></span>")
      })
      it('renders image', () => {
        const { asFragment } = render(() => <MDRenderer content={"![Alt text](image.jpg)" } />)
        expect(asFragment()).toRenderEqual("<span><img src=\"image.jpg\" alt=\"Alt text\"></span>")
      })
      it('renders blockquote', () => {
        const { asFragment } = render(() => <MDRenderer content={"> This is a blockquote." } />)
        expect(asFragment()).toRenderEqual("<blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>This is a blockquote.</span></blockquote>")
      })
      it('renders multi-line blockquote', () => {
        const { asFragment } = render(() => <MDRenderer content={"> First line\n> Second line" } />)
        expect(asFragment()).toRenderEqual("<blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>First line\n Second line</span></blockquote>")
      })
      it('renders multi-line blockquote with empty line', () => {
        const { asFragment } = render(() => <MDRenderer content={"> First line\n>\n> Second line" } />)
        expect(asFragment()).toRenderEqual("<blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>First line</span>\n\n <span>Second line</span></blockquote>")
      })
      it('renders nested blockquotes', () => {
        const { asFragment } = render(() => <MDRenderer content={"> This is a blockquote\n> \n> > This is a nested blockquote\n> > \n> > > And this is triple nested" } />)
        expect(asFragment()).toRenderEqual("<blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>This is a blockquote</span>\n \n <blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>This is a nested blockquote</span>\n  \n  <blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>And this is triple nested</span></blockquote></blockquote></blockquote>")
      })
      it('renders blockquotes with emphasis and links', () => {
        const { asFragment } = render(() => <MDRenderer content={"> This is a **bold** statement with [a link](https://example.com)\n> \n> And this is *italic* text in the same blockquote" } />)
        expect(asFragment()).toRenderEqual("<blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>This is a <strong>bold</strong> statement with <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">a link</a></span>\n \n <span>And this is <em>italic</em> text in the same blockquote</span></blockquote>")
      })
      it('renders blockquotes with lists', () => {
        const { asFragment } = render(() => <MDRenderer content={"> This blockquote contains a list:\n> \n> 1. First item\n> 2. Second item\n> 3. Third item" } />)
        expect(asFragment()).toRenderEqual("<blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>This blockquote contains a list:</span>\n \n <ol><li><span>First item</span></li><li><span>Second item</span></li><li><span>Third item</span></li></ol></blockquote>")
      })
      it('renders horizontal rule with dashes', () => {
        const { asFragment } = render(() => <MDRenderer content={"---" } />)
        expect(asFragment()).toRenderEqual("<hr style=\"border:none;border-top:1px solid var(--cm-editor-selectionBackground, #ddd);margin:16px 0\">")
      })
      it('renders horizontal rule with asterisks', () => {
        const { asFragment } = render(() => <MDRenderer content={"***" } />)
        expect(asFragment()).toRenderEqual("<hr style=\"border:none;border-top:1px solid var(--cm-editor-selectionBackground, #ddd);margin:16px 0\">")
      })
      it('renders horizontal rule with underscores', () => {
        const { asFragment } = render(() => <MDRenderer content={"___" } />)
        expect(asFragment()).toRenderEqual("<hr style=\"border:none;border-top:1px solid var(--cm-editor-selectionBackground, #ddd);margin:16px 0\">")
      })
      it('renders simple table', () => {
        const { asFragment } = render(() => <MDRenderer content={"| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |" } />)
        expect(asFragment()).toRenderEqual("<table style=\"border-collapse:collapse;margin:8px 0;width:100%\"><thead><tr><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Name</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Age</th></tr></thead><tbody><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">John</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">30</td></tr><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">Jane</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">25</td></tr></tbody></table>")
      })
      it('renders table with alignment', () => {
        const { asFragment } = render(() => <MDRenderer content={"| Left | Center | Right |\n|:-----|:------:|------:|\n| L1   |   C1   |    R1 |" } />)
        expect(asFragment()).toRenderEqual("<table style=\"border-collapse:collapse;margin:8px 0;width:100%\"><thead><tr><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Left</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Center</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Right</th></tr></thead><tbody><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">L1</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">C1</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">R1</td></tr></tbody></table>")
      })
      it('handles backslash escapes', () => {
        const { asFragment } = render(() => <MDRenderer content={"\\*not italic\\*" } />)
        expect(asFragment()).toRenderEqual("<span>*not italic*</span>")
      })
      it('handles escaped characters', () => {
        const { asFragment } = render(() => <MDRenderer content={"\\# Not a header" } />)
        expect(asFragment()).toRenderEqual("<span># Not a header</span>")
      })
      it('handles HTML entities', () => {
        const { asFragment } = render(() => <MDRenderer content={"&amp; &lt; &gt;" } />)
        expect(asFragment()).toRenderEqual("<span>&amp; &lt; ></span>")
      })
      it('handles special entities', () => {
        const { asFragment } = render(() => <MDRenderer content={"&copy; &trade;" } />)
        expect(asFragment()).toRenderEqual("<span>© ™</span>")
      })
      it('handles soft line breaks', () => {
        const { asFragment } = render(() => <MDRenderer content={"Line one\nLine two" } />)
        expect(asFragment()).toRenderEqual("<span>Line one\nLine two</span>")
      })
      it('handles hard line breaks', () => {
        const { asFragment } = render(() => <MDRenderer content={"Line one  \nLine two" } />)
        expect(asFragment()).toRenderEqual("<span>Line one<br>Line two</span>")
      })
      it('handles complex nested markdown', () => {
        const { asFragment } = render(() => <MDRenderer content={"# Header\n\nThis is a **bold** paragraph with *italic* text and `code`.\n\n- List item with [link](https://example.com)\n- Another item\n\n> Blockquote with **emphasis**" } />)
        expect(asFragment()).toRenderEqual("<h1>Header</h1><span>This is a <strong>bold</strong> paragraph with <em>italic</em> text and <code style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:2px 4px;border-radius:3px;font-family:monospace\">code</code>.</span><ul><li><span>List item with <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">link</a></span></li><li><span>Another item</span></li></ul><blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>Blockquote with <strong>emphasis</strong></span></blockquote>")
      })
      it('renders deeply nested unordered lists', () => {
        const { asFragment } = render(() => <MDRenderer content={"- Level 1\n  - Level 2\n    - Level 3\n      - Level 4" } />)
        expect(asFragment()).toRenderEqual("<ul><li><span>Level 1</span><ul><li><span>Level 2</span><ul><li><span>Level 3</span><ul><li><span>Level 4</span></li></ul></li></ul></li></ul></li></ul>")
      })
      it('renders mixed nested lists (ordered and unordered)', () => {
        const { asFragment } = render(() => <MDRenderer content={"1. First ordered item\n   - Nested unordered item\n   - Another nested item\n2. Second ordered item\n   1. Nested ordered item\n   2. Another nested ordered item" } />)
        expect(asFragment()).toRenderEqual("<ol><li><span>First ordered item</span><ul><li><span>Nested unordered item</span></li><li><span>Another nested item</span></li></ul></li><li><span>Second ordered item</span><ol><li><span>Nested ordered item</span></li><li><span>Another nested ordered item</span></li></ol></li></ol>")
      })
      it('renders lists with multiple paragraphs in items', () => {
        const { asFragment } = render(() => <MDRenderer content={"1. First item with multiple paragraphs.\n\n   This is the second paragraph of the first item.\n\n2. Second item with code:\n\n   ```javascript\n   console.log('Hello from list');\n   ```" } />)
        expect(asFragment()).toRenderEqual("<ol><li><span>First item with multiple paragraphs.</span><span>This is the second paragraph of the first item.</span></li><li><span>Second item with code:</span><pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>console.log('Hello from list');</code></pre></li></ol>")
      })
      it('renders bold within italic', () => {
        const { asFragment } = render(() => <MDRenderer content={"*This is italic with **bold** inside*" } />)
        expect(asFragment()).toRenderEqual("<span><em>This is italic with <strong>bold</strong> inside</em></span>")
      })
      it('renders italic within bold', () => {
        const { asFragment } = render(() => <MDRenderer content={"**This is bold with *italic* inside**" } />)
        expect(asFragment()).toRenderEqual("<span><strong>This is bold with <em>italic</em> inside</strong></span>")
      })
      it('renders strikethrough with nested emphasis', () => {
        const { asFragment } = render(() => <MDRenderer content={"~~This is deleted with **bold** and *italic* text~~" } />)
        expect(asFragment()).toRenderEqual("<span><del>This is deleted with <strong>bold</strong> and <em>italic</em> text</del></span>")
      })
      it('renders complex nested emphasis combinations', () => {
        const { asFragment } = render(() => <MDRenderer content={"***This is bold and italic*** with ~~strikethrough **and bold**~~" } />)
        expect(asFragment()).toRenderEqual("<span><em><strong>This is bold and italic</strong></em> with <del>strikethrough <strong>and bold</strong></del></span>")
      })
      it('renders links with emphasis', () => {
        const { asFragment } = render(() => <MDRenderer content={"[**Bold link**](https://example.com) and [*italic link*](https://test.com)" } />)
        expect(asFragment()).toRenderEqual("<span><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Bold link</strong></a> and <a href=\"https://test.com\" target=\"_blank\" rel=\"noopener noreferrer\"><em>italic link</em></a></span>")
      })
      it('renders images within links', () => {
        const { asFragment } = render(() => <MDRenderer content={"[![Alt text](image.jpg)](https://example.com)" } />)
        expect(asFragment()).toRenderEqual("<span><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"image.jpg\" alt=\"Alt text\"></a></span>")
      })
      it('renders links in lists', () => {
        const { asFragment } = render(() => <MDRenderer content={"- [Link 1](https://example.com)\n- Visit [Google](https://google.com) for search\n- Multiple [links](https://a.com) in [one](https://b.com) item" } />)
        expect(asFragment()).toRenderEqual("<ul><li><span><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Link 1</a></span></li><li><span>Visit <a href=\"https://google.com\" target=\"_blank\" rel=\"noopener noreferrer\">Google</a> for search</span></li><li><span>Multiple <a href=\"https://a.com\" target=\"_blank\" rel=\"noopener noreferrer\">links</a> in <a href=\"https://b.com\" target=\"_blank\" rel=\"noopener noreferrer\">one</a> item</span></li></ul>")
      })
      it('renders code within links', () => {
        const { asFragment } = render(() => <MDRenderer content={"[Check out `console.log()`](https://developer.mozilla.org)" } />)
        expect(asFragment()).toRenderEqual("<span><a href=\"https://developer.mozilla.org\" target=\"_blank\" rel=\"noopener noreferrer\">Check out </a></span>")
      })
      it('renders inline code with emphasis markers that should not be processed', () => {
        const { asFragment } = render(() => <MDRenderer content={"`const **bold** = 'not bold';`" } />)
        expect(asFragment()).toRenderEqual("<span><code style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:2px 4px;border-radius:3px;font-family:monospace\">const **bold** = 'not bold';</code></span>")
      })
      it('renders code blocks in lists', () => {
        const { asFragment } = render(() => <MDRenderer content={"1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n2. Run the application:\n   ```javascript\n   npm start\n   ```" } />)
        expect(asFragment()).toRenderEqual("<ol><li><span>Install dependencies:</span><pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>npm install</code></pre></li><li><span>Run the application:</span><pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>npm start</code></pre></li></ol>")
      })
      it('renders code blocks in nested lists', () => {
        const { asFragment } = render(() => <MDRenderer content={"1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n   1. Run the application:\n      ```javascript\n      npm start\n      ```" } />)
        expect(asFragment()).toRenderEqual("<ol><li><span>Install dependencies:</span><pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>npm install</code></pre><ol><li><span>Run the application:</span><pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>npm start</code></pre></li></ol></li></ol>")
      })
      it('renders code blocks in blockquotes', () => {
        const { asFragment } = render(() => <MDRenderer content={"> Here's an example:\n> \n> ```javascript\n> function hello() {\n>   return \"world\";\n> }\n> ```" } />)
        expect(asFragment()).toRenderEqual("<blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>Here's an example:</span>\n \n <pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>function hello() {\n>   return \"world\";\n> }\n> ```</code></pre></blockquote>")
      })
      it('renders standalone table correctly', () => {
        const { asFragment } = render(() => <MDRenderer content={"| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |" } />)
        expect(asFragment()).toRenderEqual("<table style=\"border-collapse:collapse;margin:8px 0;width:100%\"><thead><tr><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Name</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Age</th></tr></thead><tbody><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">John</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">30</td></tr><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">Jane</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">25</td></tr></tbody></table>")
      })
      it('renders tables with emphasis and links', () => {
        const { asFragment } = render(() => <MDRenderer content={"| Name | Description | Link |\n|------|-------------|------|\n| **Bold Name** | *Italic description* | [Visit](https://example.com) |\n| ~~Deprecated~~ | `code example` | [GitHub](https://github.com) |" } />)
        expect(asFragment()).toRenderEqual("<table style=\"border-collapse:collapse;margin:8px 0;width:100%\"><thead><tr><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Name</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Description</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Link</th></tr></thead><tbody><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\"><strong>Bold Name</strong></td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\"><em>Italic description</em></td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\"><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit</a></td></tr><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\"><del>Deprecated</del></td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\"><code style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:2px 4px;border-radius:3px;font-family:monospace\">code example</code></td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\"><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></td></tr></tbody></table>")
      })
      it('renders tables with images', () => {
        const { asFragment } = render(() => <MDRenderer content={"| Icon | Name | Description |\n|------|------|-------------|\n| ![Icon](icon.png) | Project | Main project |\n| ![Logo](logo.svg) | Brand | Company brand |" } />)
        expect(asFragment()).toRenderEqual("<table style=\"border-collapse:collapse;margin:8px 0;width:100%\"><thead><tr><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Icon</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Name</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Description</th></tr></thead><tbody><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\"><img src=\"icon.png\" alt=\"Icon\"></td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">Project</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">Main project</td></tr><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\"><img src=\"logo.svg\" alt=\"Logo\"></td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">Brand</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">Company brand</td></tr></tbody></table>")
      })
      it('renders complex document with all features', () => {
        const { asFragment } = render(() => <MDRenderer content={"# Main Title\n\nThis is a **complex document** with *various* elements.\n\n## Features\n\n1. **Lists** with nested items:\n   - Unordered nested list\n   - Another item with `inline code`\n\n2. **Code blocks** with different languages:\n   ```javascript\n   function example() {\n     return \"Hello World\";\n   }\n   ```\n\n3. **Tables** with complex content\n\n## Quotes and More\n\n> This is a blockquote with **emphasis** and a [link](https://test.com).\n> \n> > Nested quote with `code`\n\n---\n\n### Final Notes\n\nCheck out this image: ![Example](test.jpg)\n\nAnd this autolink: <https://automatic.link>" } />)
        expect(asFragment()).toRenderEqual("<h1>Main Title</h1><span>This is a <strong>complex document</strong> with <em>various</em> elements.</span><h2>Features</h2><ol><li><span><strong>Lists</strong> with nested items:</span><ul><li><span>Unordered nested list</span></li><li><span>Another item with <code style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:2px 4px;border-radius:3px;font-family:monospace\">inline code</code></span></li></ul></li><li><span><strong>Code blocks</strong> with different languages:</span><pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>function example() {\n     return \"Hello World\";\n   }</code></pre></li><li><span><strong>Tables</strong> with complex content</span></li></ol><h2>Quotes and More</h2><blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>This is a blockquote with <strong>emphasis</strong> and a <a href=\"https://test.com\" target=\"_blank\" rel=\"noopener noreferrer\">link</a>.</span>\n \n <blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>Nested quote with <code style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:2px 4px;border-radius:3px;font-family:monospace\">code</code></span></blockquote></blockquote><hr style=\"border:none;border-top:1px solid var(--cm-editor-selectionBackground, #ddd);margin:16px 0\"><h3>Final Notes</h3><span>Check out this image: <img src=\"test.jpg\" alt=\"Example\"></span><span>And this autolink: <a href=\"https://automatic.link\" target=\"_blank\" rel=\"noopener noreferrer\">https://automatic.link</a></span>")
      })
      it('renders edge case with consecutive emphasis', () => {
        const { asFragment } = render(() => <MDRenderer content={"This has **bold** and **more bold** and *italic* and *more italic* text." } />)
        expect(asFragment()).toRenderEqual("<span>This has <strong>bold</strong> and <strong>more bold</strong> and <em>italic</em> and <em>more italic</em> text.</span>")
      })
      it('renders emphasis across line breaks', () => {
        const { asFragment } = render(() => <MDRenderer content={"This is **bold text that\ncontinues on the next line**" } />)
        expect(asFragment()).toRenderEqual("<span>This is <strong>bold text that\ncontinues on the next line</strong></span>")
      })
      it('renders mixed list types in complex document', () => {
        const { asFragment } = render(() => <MDRenderer content={"## Mixed Lists\n\n1. Ordered item one\n   - Nested unordered\n   - Another nested\n     1. Deep nested ordered\n     2. Another deep ordered\n\n2. Ordered item two\n   > With a blockquote\n   > \n   > And **emphasis**\n\n3. Ordered item three with code:\n   ```python\n   print(\"Hello from Python\")\n   ```" } />)
        expect(asFragment()).toRenderEqual("<h2>Mixed Lists</h2><ol><li><span>Ordered item one</span><ul><li><span>Nested unordered</span></li><li><span>Another nested</span><ol><li><span>Deep nested ordered</span></li><li><span>Another deep ordered</span></li></ol></li></ul></li><li><span>Ordered item two</span><blockquote style=\"border-left:4px solid var(--cm-editor-selectionBackground, #ddd);padding-left:16px;margin:8px 0\"> <span>With a blockquote</span>\n    \n    <span>And <strong>emphasis</strong></span></blockquote></li><li><span>Ordered item three with code:</span><pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>print(\"Hello from Python\")</code></pre></li></ol>")
      })
      it('handles unbalanced emphasis markers', () => {
        const { asFragment } = render(() => <MDRenderer content={"This has **unbalanced bold and *mixed emphasis**" } />)
        expect(asFragment()).toRenderEqual("<span>This has *<em>unbalanced bold and <em>mixed emphasis</em></em></span>")
      })
      it('handles empty code blocks', () => {
        const { asFragment } = render(() => <MDRenderer content={"```\n```" } />)
        expect(asFragment()).toRenderEqual("<pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>```</code></pre>")
      })
      it('handles code blocks without closing', () => {
        const { asFragment } = render(() => <MDRenderer content={"```javascript\nconst x = 1;" } />)
        expect(asFragment()).toRenderEqual("<pre style=\"background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.1));padding:8px;border-radius:4px;margin:8px 0\"><code>const x = 1;</code></pre>")
      })
      it('handles consecutive same emphasis types correctly', () => {
        const { asFragment } = render(() => <MDRenderer content={"**This is** nested **bold**" } />)
        expect(asFragment()).toRenderEqual("<span><strong>This is</strong> nested <strong>bold</strong></span>")
      })
      it('handles consecutive italic emphasis correctly', () => {
        const { asFragment } = render(() => <MDRenderer content={"*This is* nested *italic*" } />)
        expect(asFragment()).toRenderEqual("<span><em>This is</em> nested <em>italic</em></span>")
      })
      it('handles triple asterisk emphasis correctly', () => {
        const { asFragment } = render(() => <MDRenderer content={"***This is*** nested ***bold italic***" } />)
        expect(asFragment()).toRenderEqual("<span><em><strong>This is</strong></em> nested <em><strong>bold italic</strong></em></span>")
      })
      it('handles proper separated emphasis correctly', () => {
        const { asFragment } = render(() => <MDRenderer content={"**this** is **bold**" } />)
        expect(asFragment()).toRenderEqual("<span><strong>this</strong> is <strong>bold</strong></span>")
      })
      it('handles links without URLs', () => {
        const { asFragment } = render(() => <MDRenderer content={"[Link text]()" } />)
        expect(asFragment()).toRenderEqual("<span><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\">Link text</a></span>")
      })
      it('handles images without src', () => {
        const { asFragment } = render(() => <MDRenderer content={"![Alt text]()" } />)
        expect(asFragment()).toRenderEqual("<span><img src=\"#\" alt=\"Alt text\"></span>")
      })
      it('handles empty table cells', () => {
        const { asFragment } = render(() => <MDRenderer content={"| Col1 | Col2 | Col3 |\n|------|------|------|\n| Data |      | More |\n|      | Data |      |" } />)
        expect(asFragment()).toRenderEqual("<table style=\"border-collapse:collapse;margin:8px 0;width:100%\"><thead><tr><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Col1</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Col2</th><th style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;font-weight:bold;background-color:var(--cm-editor-background, rgba(128, 128, 128, 0.05));text-align:left\">Col3</th></tr></thead><tbody><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">Data</td><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">More</td></tr><tr><td style=\"border:1px solid var(--cm-editor-selectionBackground, #ddd);padding:6px 12px;text-align:left\">Data</td></tr></tbody></table>")
      })
      it('renders task lists with checkboxes', () => {
        const { asFragment } = render(() => <MDRenderer content={"- [x] Completed task\n- [ ] Incomplete task\n- [x] Another completed task" } />)
        expect(asFragment()).toRenderEqual("<ul><li><span><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\">x</a> Completed task</span></li><li><span>[ ] Incomplete task</span></li><li><span><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\">x</a> Another completed task</span></li></ul>")
      })
      it('renders nested task lists', () => {
        const { asFragment } = render(() => <MDRenderer content={"- [x] Main task\n  - [x] Subtask 1\n  - [ ] Subtask 2\n    - [x] Sub-subtask" } />)
        expect(asFragment()).toRenderEqual("<ul><li><span><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\">x</a> Main task</span><ul><li><span><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\">x</a> Subtask 1</span></li><li><span>[ ] Subtask 2</span><ul><li><span><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\">x</a> Sub-subtask</span></li></ul></li></ul></li></ul>")
      })
      it('handles large documents efficiently', () => {
        const { asFragment } = render(() => <MDRenderer content={"## Section 1\n\nThis is paragraph 1 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 2\n\nThis is paragraph 2 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 3\n\nThis is paragraph 3 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 4\n\nThis is paragraph 4 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 5\n\nThis is paragraph 5 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 6\n\nThis is paragraph 6 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 7\n\nThis is paragraph 7 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 8\n\nThis is paragraph 8 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 9\n\nThis is paragraph 9 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 10\n\nThis is paragraph 10 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 11\n\nThis is paragraph 11 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 12\n\nThis is paragraph 12 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 13\n\nThis is paragraph 13 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 14\n\nThis is paragraph 14 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 15\n\nThis is paragraph 15 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 16\n\nThis is paragraph 16 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 17\n\nThis is paragraph 17 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 18\n\nThis is paragraph 18 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 19\n\nThis is paragraph 19 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 20\n\nThis is paragraph 20 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 21\n\nThis is paragraph 21 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 22\n\nThis is paragraph 22 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 23\n\nThis is paragraph 23 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 24\n\nThis is paragraph 24 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 25\n\nThis is paragraph 25 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 26\n\nThis is paragraph 26 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 27\n\nThis is paragraph 27 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 28\n\nThis is paragraph 28 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 29\n\nThis is paragraph 29 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 30\n\nThis is paragraph 30 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 31\n\nThis is paragraph 31 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 32\n\nThis is paragraph 32 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 33\n\nThis is paragraph 33 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 34\n\nThis is paragraph 34 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 35\n\nThis is paragraph 35 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 36\n\nThis is paragraph 36 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 37\n\nThis is paragraph 37 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 38\n\nThis is paragraph 38 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 39\n\nThis is paragraph 39 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 40\n\nThis is paragraph 40 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 41\n\nThis is paragraph 41 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 42\n\nThis is paragraph 42 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 43\n\nThis is paragraph 43 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 44\n\nThis is paragraph 44 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 45\n\nThis is paragraph 45 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 46\n\nThis is paragraph 46 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 47\n\nThis is paragraph 47 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 48\n\nThis is paragraph 48 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 49\n\nThis is paragraph 49 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 50\n\nThis is paragraph 50 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 51\n\nThis is paragraph 51 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 52\n\nThis is paragraph 52 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 53\n\nThis is paragraph 53 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 54\n\nThis is paragraph 54 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 55\n\nThis is paragraph 55 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 56\n\nThis is paragraph 56 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 57\n\nThis is paragraph 57 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 58\n\nThis is paragraph 58 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 59\n\nThis is paragraph 59 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 60\n\nThis is paragraph 60 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 61\n\nThis is paragraph 61 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 62\n\nThis is paragraph 62 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 63\n\nThis is paragraph 63 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 64\n\nThis is paragraph 64 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 65\n\nThis is paragraph 65 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 66\n\nThis is paragraph 66 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 67\n\nThis is paragraph 67 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 68\n\nThis is paragraph 68 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 69\n\nThis is paragraph 69 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 70\n\nThis is paragraph 70 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 71\n\nThis is paragraph 71 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 72\n\nThis is paragraph 72 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 73\n\nThis is paragraph 73 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 74\n\nThis is paragraph 74 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 75\n\nThis is paragraph 75 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 76\n\nThis is paragraph 76 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 77\n\nThis is paragraph 77 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 78\n\nThis is paragraph 78 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 79\n\nThis is paragraph 79 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 80\n\nThis is paragraph 80 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 81\n\nThis is paragraph 81 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 82\n\nThis is paragraph 82 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 83\n\nThis is paragraph 83 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 84\n\nThis is paragraph 84 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 85\n\nThis is paragraph 85 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 86\n\nThis is paragraph 86 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 87\n\nThis is paragraph 87 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 88\n\nThis is paragraph 88 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 89\n\nThis is paragraph 89 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 90\n\nThis is paragraph 90 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 91\n\nThis is paragraph 91 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 92\n\nThis is paragraph 92 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 93\n\nThis is paragraph 93 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 94\n\nThis is paragraph 94 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 95\n\nThis is paragraph 95 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 96\n\nThis is paragraph 96 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 97\n\nThis is paragraph 97 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 98\n\nThis is paragraph 98 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 99\n\nThis is paragraph 99 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 100\n\nThis is paragraph 100 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n" } />)
        expect(asFragment()).toRenderEqual("<h2>Section 1</h2><span>This is paragraph 1 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 2</h2><span>This is paragraph 2 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 3</h2><span>This is paragraph 3 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 4</h2><span>This is paragraph 4 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 5</h2><span>This is paragraph 5 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 6</h2><span>This is paragraph 6 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 7</h2><span>This is paragraph 7 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 8</h2><span>This is paragraph 8 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 9</h2><span>This is paragraph 9 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 10</h2><span>This is paragraph 10 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 11</h2><span>This is paragraph 11 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 12</h2><span>This is paragraph 12 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 13</h2><span>This is paragraph 13 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 14</h2><span>This is paragraph 14 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 15</h2><span>This is paragraph 15 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 16</h2><span>This is paragraph 16 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 17</h2><span>This is paragraph 17 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 18</h2><span>This is paragraph 18 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 19</h2><span>This is paragraph 19 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 20</h2><span>This is paragraph 20 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 21</h2><span>This is paragraph 21 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 22</h2><span>This is paragraph 22 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 23</h2><span>This is paragraph 23 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 24</h2><span>This is paragraph 24 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 25</h2><span>This is paragraph 25 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 26</h2><span>This is paragraph 26 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 27</h2><span>This is paragraph 27 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 28</h2><span>This is paragraph 28 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 29</h2><span>This is paragraph 29 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 30</h2><span>This is paragraph 30 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 31</h2><span>This is paragraph 31 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 32</h2><span>This is paragraph 32 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 33</h2><span>This is paragraph 33 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 34</h2><span>This is paragraph 34 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 35</h2><span>This is paragraph 35 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 36</h2><span>This is paragraph 36 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 37</h2><span>This is paragraph 37 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 38</h2><span>This is paragraph 38 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 39</h2><span>This is paragraph 39 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 40</h2><span>This is paragraph 40 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 41</h2><span>This is paragraph 41 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 42</h2><span>This is paragraph 42 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 43</h2><span>This is paragraph 43 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 44</h2><span>This is paragraph 44 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 45</h2><span>This is paragraph 45 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 46</h2><span>This is paragraph 46 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 47</h2><span>This is paragraph 47 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 48</h2><span>This is paragraph 48 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 49</h2><span>This is paragraph 49 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 50</h2><span>This is paragraph 50 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 51</h2><span>This is paragraph 51 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 52</h2><span>This is paragraph 52 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 53</h2><span>This is paragraph 53 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 54</h2><span>This is paragraph 54 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 55</h2><span>This is paragraph 55 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 56</h2><span>This is paragraph 56 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 57</h2><span>This is paragraph 57 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 58</h2><span>This is paragraph 58 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 59</h2><span>This is paragraph 59 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 60</h2><span>This is paragraph 60 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 61</h2><span>This is paragraph 61 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 62</h2><span>This is paragraph 62 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 63</h2><span>This is paragraph 63 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 64</h2><span>This is paragraph 64 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 65</h2><span>This is paragraph 65 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 66</h2><span>This is paragraph 66 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 67</h2><span>This is paragraph 67 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 68</h2><span>This is paragraph 68 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 69</h2><span>This is paragraph 69 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 70</h2><span>This is paragraph 70 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 71</h2><span>This is paragraph 71 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 72</h2><span>This is paragraph 72 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 73</h2><span>This is paragraph 73 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 74</h2><span>This is paragraph 74 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 75</h2><span>This is paragraph 75 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 76</h2><span>This is paragraph 76 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 77</h2><span>This is paragraph 77 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 78</h2><span>This is paragraph 78 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 79</h2><span>This is paragraph 79 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 80</h2><span>This is paragraph 80 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 81</h2><span>This is paragraph 81 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 82</h2><span>This is paragraph 82 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 83</h2><span>This is paragraph 83 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 84</h2><span>This is paragraph 84 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 85</h2><span>This is paragraph 85 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 86</h2><span>This is paragraph 86 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 87</h2><span>This is paragraph 87 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 88</h2><span>This is paragraph 88 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 89</h2><span>This is paragraph 89 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 90</h2><span>This is paragraph 90 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 91</h2><span>This is paragraph 91 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 92</h2><span>This is paragraph 92 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 93</h2><span>This is paragraph 93 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 94</h2><span>This is paragraph 94 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 95</h2><span>This is paragraph 95 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 96</h2><span>This is paragraph 96 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 97</h2><span>This is paragraph 97 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 98</h2><span>This is paragraph 98 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 99</h2><span>This is paragraph 99 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul><h2>Section 100</h2><span>This is paragraph 100 with <strong>bold</strong> and <em>italic</em> text.</span><ul><li><span>Item 1</span></li><li><span>Item 2</span></li><li><span>Item 3</span></li></ul>")
      })
      it('allows custom paragraph renderer', () => {
        const { asFragment } = render(() => <MDRenderer content={"Test paragraph" } />)
        expect(asFragment()).toRenderEqual("<span>Test paragraph</span>")
      })
      it('falls back to default renderer when custom not provided', () => {
        const { asFragment } = render(() => <MDRenderer content={"# Header" } />)
        expect(asFragment()).toRenderEqual("<h1>Header</h1>")
      })
      it('allows custom emphasis renderer', () => {
        const { asFragment } = render(() => <MDRenderer content={"This is *custom italic* text" } />)
        expect(asFragment()).toRenderEqual("<span>This is <em>custom italic</em> text</span>")
      })
      it('allows custom link renderer with additional attributes', () => {
        const { asFragment } = render(() => <MDRenderer content={"[Original Link](https://example.com)" } />)
        expect(asFragment()).toRenderEqual("<span><a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Original Link</a></span>")
      })
      it('allows chaining of custom renderers', () => {
        const { asFragment } = render(() => <MDRenderer content={"**Bold** and *italic* text" } />)
        expect(asFragment()).toRenderEqual("<span><strong>Bold</strong> and <em>italic</em> text</span>")
      })
})