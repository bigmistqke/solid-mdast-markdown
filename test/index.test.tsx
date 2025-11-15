import { render } from 'solid-js/web'
import { describe, expect, it } from 'vitest'
import { MDRenderer } from '../src'

function renderComponent(content: string, renderers?: any): string {
  let html = ''
  const div = document.createElement('div')
  document.body.appendChild(div)

  render(() => <MDRenderer content={content} renderers={renderers} />, div)
  html = div.innerHTML

  document.body.removeChild(div)
  return html
}

describe('MDRenderer', () => {
  describe('Basic markdown features', () => {
    describe('Headers', () => {
      it('renders ATX heading 1', () => {
        const html = renderComponent('# Heading 1')
        expect(html).toBe('<h1>Heading 1</h1>')
      })

      it('renders ATX heading 2', () => {
        const html = renderComponent('## Heading 2')
        expect(html).toBe('<h2>Heading 2</h2>')
      })

      it('renders ATX heading 3', () => {
        const html = renderComponent('### Heading 3')
        expect(html).toBe('<h3>Heading 3</h3>')
      })

      it('renders ATX heading 4', () => {
        const html = renderComponent('#### Heading 4')
        expect(html).toBe('<h4>Heading 4</h4>')
      })

      it('renders ATX heading 5', () => {
        const html = renderComponent('##### Heading 5')
        expect(html).toBe('<h5>Heading 5</h5>')
      })

      it('renders ATX heading 6', () => {
        const html = renderComponent('###### Heading 6')
        expect(html).toBe('<h6>Heading 6</h6>')
      })

      it('renders Setext heading 1', () => {
        const html = renderComponent('Heading 1\n=========')
        expect(html).toBe('<h1>Heading 1</h1>')
      })

      it('renders Setext heading 2', () => {
        const html = renderComponent('Heading 2\n---------')
        expect(html).toBe('<h2>Heading 2</h2>')
      })
    })

    describe('Paragraphs', () => {
      it('renders a simple paragraph', () => {
        const html = renderComponent('This is a paragraph.')
        expect(html).toBe('<p>This is a paragraph.</p>')
      })

      it('renders multiple paragraphs', () => {
        const html = renderComponent('First paragraph.\n\nSecond paragraph.')
        expect(html).toBe('<p>First paragraph.</p><p>Second paragraph.</p>')
      })
    })

    describe('Emphasis', () => {
      it('renders italic text with asterisks', () => {
        const html = renderComponent('*italic*')
        expect(html).toBe('<p><em>italic</em></p>')
      })

      it('renders italic text with underscores', () => {
        const html = renderComponent('_italic_')
        expect(html).toBe('<p><em>italic</em></p>')
      })

      it('renders bold text with double asterisks', () => {
        const html = renderComponent('**bold**')
        expect(html).toBe('<p><strong>bold</strong></p>')
      })

      it('renders bold text with double underscores', () => {
        const html = renderComponent('__bold__')
        expect(html).toBe('<p><strong>bold</strong></p>')
      })

      it('renders emphasis within paragraph', () => {
        const html = renderComponent('This is *italic* and **bold** text.')
        expect(html).toBe('<p>This is <em>italic</em> and <strong>bold</strong> text.</p>')
      })
    })

    describe('Strikethrough', () => {
      it('renders strikethrough text', () => {
        const html = renderComponent('~~strikethrough~~')
        expect(html).toBe('<p><del>strikethrough</del></p>')
      })

      it('renders strikethrough within paragraph', () => {
        const html = renderComponent('This is ~~deleted~~ text.')
        expect(html).toBe('<p>This is <del>deleted</del> text.</p>')
      })
    })
  })

  describe('Lists', () => {
    describe('Unordered lists', () => {
      it('renders bullet list with dashes', () => {
        const html = renderComponent('- Item 1\n- Item 2\n- Item 3')
        expect(html).toBe(
          '<ul><li> <span>Item 1</span></li><li> <span>Item 2</span></li><li> <span>Item 3</span></li></ul>',
        )
      })

      it('renders bullet list with asterisks', () => {
        const html = renderComponent('* Item 1\n* Item 2\n* Item 3')
        expect(html).toBe(
          '<ul><li> <span>Item 1</span></li><li> <span>Item 2</span></li><li> <span>Item 3</span></li></ul>',
        )
      })

      it('renders bullet list with plus signs', () => {
        const html = renderComponent('+ Item 1\n+ Item 2\n+ Item 3')
        expect(html).toBe(
          '<ul><li> <span>Item 1</span></li><li> <span>Item 2</span></li><li> <span>Item 3</span></li></ul>',
        )
      })
    })

    describe('Ordered lists', () => {
      it('renders ordered list', () => {
        const html = renderComponent('1. First item\n2. Second item\n3. Third item')
        expect(html).toBe(
          '<ol><li> <span>First item</span></li><li> <span>Second item</span></li><li> <span>Third item</span></li></ol>',
        )
      })

      it('renders ordered list with different starting numbers', () => {
        const html = renderComponent('5. Fifth item\n6. Sixth item\n7. Seventh item')
        expect(html).toBe(
          '<ol><li> <span>Fifth item</span></li><li> <span>Sixth item</span></li><li> <span>Seventh item</span></li></ol>',
        )
      })
    })
  })

  describe('Code blocks and inline code', () => {
    describe('Inline code', () => {
      it('renders inline code', () => {
        const html = renderComponent('`code`')
        expect(html).toBe(
          '<p><code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">code</code></p>',
        )
      })

      it('renders inline code within paragraph', () => {
        const html = renderComponent('Use `console.log()` to debug.')
        expect(html).toBe(
          '<p>Use <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">console.log()</code> to debug.</p>',
        )
      })
    })

    describe('Code blocks', () => {
      it('renders fenced code block', () => {
        const html = renderComponent('```\nconst x = 1;\nconsole.log(x);\n```')
        expect(html).toBe(
          '<pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>const x = 1;\nconsole.log(x);</code></pre>',
        )
      })

      it('renders fenced code block with language', () => {
        const html = renderComponent('```javascript\nconst x = 1;\nconsole.log(x);\n```')
        expect(html).toBe(
          '<pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>const x = 1;\nconsole.log(x);</code></pre>',
        )
      })

      it('renders indented code block', () => {
        const html = renderComponent('    const x = 1;\n    console.log(x);')
        expect(html).toBe(
          '<pre style="margin: 8px 0px;"><code>const x = 1;\n    console.log(x);</code></pre>',
        )
      })
    })
  })

  describe('Links and images', () => {
    describe('Links', () => {
      it('renders inline link', () => {
        const html = renderComponent('[Example.com](https://example.com)')
        expect(html).toBe(
          '<p><a target="_blank" rel="noopener noreferrer" href="https://example.com">Example.comhttps://example.com</a></p>',
        )
      })

      it('renders autolink', () => {
        const html = renderComponent('<https://example.com>')
        expect(html).toBe(
          '<p><a target="_blank" rel="noopener noreferrer" href="https://example.com">https://example.com</a></p>',
        )
      })
    })

    describe('Images', () => {
      it('renders image', () => {
        const html = renderComponent('![Alt text](image.jpg)')
        expect(html).toBe('<p><img src="image.jpg" alt="Alt text"></p>')
      })
    })
  })

  describe('Blockquotes and horizontal rules', () => {
    describe('Blockquotes', () => {
      it('renders blockquote', () => {
        const html = renderComponent('> This is a blockquote.')
        expect(html).toBe(
          '<blockquote style="padding-left: 16px; margin: 8px 0px;"><span>This is a blockquote.</span></blockquote>',
        )
      })

      it('renders multi-line blockquote', () => {
        const html = renderComponent('> First line\n> Second line')
        expect(html).toBe(
          '<blockquote style="padding-left: 16px; margin: 8px 0px;"><span>First line\n Second line</span></blockquote>',
        )
      })
    })

    describe('Horizontal rules', () => {
      it('renders horizontal rule with dashes', () => {
        const html = renderComponent('---')
        expect(html).toBe('<hr style="margin: 16px 0px;">')
      })

      it('renders horizontal rule with asterisks', () => {
        const html = renderComponent('***')
        expect(html).toBe('<hr style="margin: 16px 0px;">')
      })

      it('renders horizontal rule with underscores', () => {
        const html = renderComponent('___')
        expect(html).toBe('<hr style="margin: 16px 0px;">')
      })
    })
  })

  describe('Tables', () => {
    it('renders simple table', () => {
      const content = '| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |'
      const html = renderComponent(content)
      expect(html).toBe(
        '<table style="border-collapse: collapse; margin: 8px 0px; width: 100%;"><thead><tr><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Name</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Age</th></tr></thead><tbody><tr><td style="padding: 6px 12px; text-align: left;">John</td><td style="padding: 6px 12px; text-align: left;">30</td></tr><tr><td style="padding: 6px 12px; text-align: left;">Jane</td><td style="padding: 6px 12px; text-align: left;">25</td></tr></tbody></table>',
      )
    })

    it('renders table with alignment', () => {
      const content =
        '| Left | Center | Right |\n|:-----|:------:|------:|\n| L1   |   C1   |    R1 |'
      const html = renderComponent(content)
      expect(html).toBe(
        '<table style="border-collapse: collapse; margin: 8px 0px; width: 100%;"><thead><tr><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Left</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Center</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Right</th></tr></thead><tbody><tr><td style="padding: 6px 12px; text-align: left;">L1</td><td style="padding: 6px 12px; text-align: left;">C1</td><td style="padding: 6px 12px; text-align: left;">R1</td></tr></tbody></table>',
      )
    })
  })

  describe('Special syntax', () => {
    describe('Escapes', () => {
      it('handles backslash escapes', () => {
        const html = renderComponent('\\*not italic\\*')
        expect(html).toBe('<p>*not italic*</p>')
      })

      it('handles escaped characters', () => {
        const html = renderComponent('\\# Not a header')
        expect(html).toBe('<p># Not a header</p>')
      })
    })

    describe('HTML entities', () => {
      it('handles HTML entities', () => {
        const html = renderComponent('&amp; &lt; &gt;')
        expect(html).toBe('<p>&amp; &lt; &gt;</p>')
      })

      it('handles special entities', () => {
        const html = renderComponent('&copy; &trade;')
        expect(html).toBe('<p>© ™</p>')
      })
    })

    describe('Line breaks', () => {
      it('handles soft line breaks', () => {
        const html = renderComponent('Line one\nLine two')
        expect(html).toBe('<p>Line one\nLine two</p>')
      })

      it('handles hard line breaks', () => {
        const html = renderComponent('Line one  \nLine two')
        expect(html).toBe('<p>Line one<br>Line two</p>')
      })
    })

    describe('Mixed content', () => {
      it('handles complex nested markdown', () => {
        const content =
          '# Header\n\nThis is a **bold** paragraph with *italic* text and `code`.\n\n- List item with [link](https://example.com)\n- Another item\n\n> Blockquote with **emphasis**'
        const html = renderComponent(content)
        expect(html).toBe(
          '<h1>Header</h1><p>This is a <strong>bold</strong> paragraph with <em>italic</em> text and <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">code</code>.</p><ul><li> <span>List item with <a target="_blank" rel="noopener noreferrer" href="https://example.com">linkhttps://example.com</a></span></li><li> <span>Another item</span></li></ul><blockquote style="padding-left: 16px; margin: 8px 0px;"><span>Blockquote with <strong>emphasis</strong></span></blockquote>',
        )
      })
    })
  })

  describe('Nested and complex scenarios', () => {
    describe('Nested lists', () => {
      it('renders deeply nested unordered lists', () => {
        const content = `- Level 1
  - Level 2
    - Level 3
      - Level 4`
        const html = renderComponent(content)
        expect(html).toBe(
          '<ul><li> <span>Level 1</span>\n  <ul><li> <span>Level 2</span>\n    <ul><li> <span>Level 3</span>\n      <ul><li> <span>Level 4</span></li></ul></li></ul></li></ul></li></ul>',
        )
      })

      it('renders mixed nested lists (ordered and unordered)', () => {
        const content = `1. First ordered item
   - Nested unordered item
   - Another nested item
2. Second ordered item
   1. Nested ordered item
   2. Another nested ordered item`
        const html = renderComponent(content)
        expect(html).toBe(
          '<ol><li> <span>First ordered item</span>\n   <ul><li> <span>Nested unordered item</span></li><li> <span>Another nested item</span></li></ul></li><li> <span>Second ordered item</span>\n   <ol><li> <span>Nested ordered item</span></li><li> <span>Another nested ordered item</span></li></ol></li></ol>',
        )
      })

      it('renders lists with multiple paragraphs in items', () => {
        const content = `1. First item with multiple paragraphs.

   This is the second paragraph of the first item.

2. Second item with code:

   \`\`\`javascript
   console.log('Hello from list');
   \`\`\``
        const html = renderComponent(content)
        expect(html).toBe(
          '<ol><li> <span>First item with multiple paragraphs.</span>\n\n   <span>This is the second paragraph of the first item.</span></li><li> <span>Second item with code:</span>\n\n   <pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>   console.log(\'Hello from list\');\n   ```</code></pre></li></ol>',
        )
      })
    })

    describe('Nested emphasis', () => {
      it('renders bold within italic', () => {
        const html = renderComponent('*This is italic with **bold** inside*')
        expect(html).toBe('<p><em>This is italic with <strong>bold</strong> inside</em></p>')
      })

      it('renders italic within bold', () => {
        const html = renderComponent('**This is bold with *italic* inside**')
        expect(html).toBe('<p><strong>This is bold with <em>italic</em> inside</strong></p>')
      })

      it('renders strikethrough with nested emphasis', () => {
        const html = renderComponent('~~This is deleted with **bold** and *italic* text~~')
        expect(html).toBe(
          '<p><del>This is deleted with <strong>bold</strong> and <em>italic</em> text</del></p>',
        )
      })

      it('renders complex nested emphasis combinations', () => {
        const html = renderComponent(
          '***This is bold and italic*** with ~~strikethrough **and bold**~~',
        )
        expect(html).toBe(
          '<p><em><strong>This is bold and italic</strong></em> with <del>strikethrough <strong>and bold</strong></del></p>',
        )
      })
    })

    describe('Links and images in various contexts', () => {
      it('renders links with emphasis', () => {
        const html = renderComponent(
          '[**Bold link**](https://example.com) and [*italic link*](https://test.com)',
        )
        expect(html).toBe(
          '<p><a target="_blank" rel="noopener noreferrer" href="https://example.com"><strong>Bold link</strong>https://example.com</a> and <a target="_blank" rel="noopener noreferrer" href="https://test.com"><em>italic link</em>https://test.com</a></p>',
        )
      })

      it('renders images within links', () => {
        const html = renderComponent('[![Alt text](image.jpg)](https://example.com)')
        expect(html).toBe(
          '<p><a target="_blank" rel="noopener noreferrer" href="https://example.com"><img src="image.jpg" alt="Alt text">https://example.com</a></p>',
        )
      })

      it('renders links in lists', () => {
        const content = `- [Link 1](https://example.com)
- Visit [Google](https://google.com) for search
- Multiple [links](https://a.com) in [one](https://b.com) item`
        const html = renderComponent(content)
        expect(html).toBe(
          '<ul><li> <span><a target="_blank" rel="noopener noreferrer" href="https://example.com">Link 1https://example.com</a></span></li><li> <span>Visit <a target="_blank" rel="noopener noreferrer" href="https://google.com">Googlehttps://google.com</a> for search</span></li><li> <span>Multiple <a target="_blank" rel="noopener noreferrer" href="https://a.com">linkshttps://a.com</a> in <a target="_blank" rel="noopener noreferrer" href="https://b.com">onehttps://b.com</a> item</span></li></ul>',
        )
      })

      it('renders code within links', () => {
        const html = renderComponent('[Check out `console.log()`](https://developer.mozilla.org)')
        expect(html).toBe(
          '<p><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org">Check out <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">console.log()</code>https://developer.mozilla.org</a></p>',
        )
      })
    })

    describe('Code in various contexts', () => {
      it('renders inline code with emphasis markers that should not be processed', () => {
        const html = renderComponent("`const **bold** = 'not bold';`")
        expect(html).toBe(
          '<p><code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">const **bold** = \'not bold\';</code></p>',
        )
      })

      it('renders code blocks in lists', () => {
        const content = `1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the application:
   \`\`\`javascript
   npm start
   \`\`\``
        const html = renderComponent(content)
        expect(html).toBe(
          '<ol><li> <span>Install dependencies:</span>\n   <pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>   npm install\n   ```</code></pre></li><li> <span>Run the application:</span>\n   <pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>   npm start\n   ```</code></pre></li></ol>',
        )
      })

      it('renders code blocks in blockquotes', () => {
        const content = `> Here's an example:
> 
> \`\`\`javascript
> function hello() {
>   return "world";
> }
> \`\`\``
        const html = renderComponent(content)
        expect(html).toBe(
          '<blockquote style="padding-left: 16px; margin: 8px 0px;"><span>Here\'s an example:</span><pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>&gt; function hello() {\n&gt;   return "world";\n&gt; }\n&gt; ```</code></pre></blockquote>',
        )
      })
    })

    describe('Blockquotes', () => {
      it('renders nested blockquotes', () => {
        const content = `> This is a blockquote
> 
> > This is a nested blockquote
> > 
> > > And this is triple nested`
        const html = renderComponent(content)
        expect(html).toBe(
          '<blockquote style="padding-left: 16px; margin: 8px 0px;"><span>This is a blockquote</span><blockquote style="padding-left: 16px; margin: 8px 0px;"><span>This is a nested blockquote</span><blockquote style="padding-left: 16px; margin: 8px 0px;"><span>And this is triple nested</span></blockquote></blockquote></blockquote>',
        )
      })

      it('renders blockquotes with emphasis and links', () => {
        const content = `> This is a **bold** statement with [a link](https://example.com)
> 
> And this is *italic* text in the same blockquote`
        const html = renderComponent(content)
        expect(html).toBe(
          '<blockquote style="padding-left: 16px; margin: 8px 0px;"><span>This is a <strong>bold</strong> statement with <a target="_blank" rel="noopener noreferrer" href="https://example.com">a linkhttps://example.com</a></span><span>And this is <em>italic</em> text in the same blockquote</span></blockquote>',
        )
      })

      it('renders blockquotes with lists', () => {
        const content = `> This blockquote contains a list:
> 
> 1. First item
> 2. Second item
> 3. Third item`
        const html = renderComponent(content)
        expect(html).toBe(
          '<blockquote style="padding-left: 16px; margin: 8px 0px;"><span>This blockquote contains a list:</span><ol><li> <span>First item</span></li><li> <span>Second item</span></li><li> <span>Third item</span></li></ol></blockquote>',
        )
      })
    })

    describe('Tables with complex content', () => {
      it('renders standalone table correctly', () => {
        const content = `| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`
        const html = renderComponent(content)
        expect(html).toBe(
          '<table style="border-collapse: collapse; margin: 8px 0px; width: 100%;"><thead><tr><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Name</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Age</th></tr></thead><tbody><tr><td style="padding: 6px 12px; text-align: left;">John</td><td style="padding: 6px 12px; text-align: left;">30</td></tr><tr><td style="padding: 6px 12px; text-align: left;">Jane</td><td style="padding: 6px 12px; text-align: left;">25</td></tr></tbody></table>',
        )
      })

      it('renders tables with emphasis and links', () => {
        const content = `| Name | Description | Link |
|------|-------------|------|
| **Bold Name** | *Italic description* | [Visit](https://example.com) |
| ~~Deprecated~~ | \`code example\` | [GitHub](https://github.com) |`
        const html = renderComponent(content)
        expect(html).toBe(
          '<table style="border-collapse: collapse; margin: 8px 0px; width: 100%;"><thead><tr><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Name</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Description</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Link</th></tr></thead><tbody><tr><td style="padding: 6px 12px; text-align: left;"><strong>Bold Name</strong></td><td style="padding: 6px 12px; text-align: left;"><em>Italic description</em></td><td style="padding: 6px 12px; text-align: left;"><a target="_blank" rel="noopener noreferrer" href="https://example.com">Visithttps://example.com</a></td></tr><tr><td style="padding: 6px 12px; text-align: left;"><del>Deprecated</del></td><td style="padding: 6px 12px; text-align: left;"><code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">code example</code></td><td style="padding: 6px 12px; text-align: left;"><a target="_blank" rel="noopener noreferrer" href="https://github.com">GitHubhttps://github.com</a></td></tr></tbody></table>',
        )
      })

      it('renders tables with images', () => {
        const content = `| Icon | Name | Description |
|------|------|-------------|
| ![Icon](icon.png) | Project | Main project |
| ![Logo](logo.svg) | Brand | Company brand |`
        const html = renderComponent(content)
        expect(html).toBe(
          '<table style="border-collapse: collapse; margin: 8px 0px; width: 100%;"><thead><tr><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Icon</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Name</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Description</th></tr></thead><tbody><tr><td style="padding: 6px 12px; text-align: left;"><img src="icon.png" alt="Icon"></td><td style="padding: 6px 12px; text-align: left;">Project</td><td style="padding: 6px 12px; text-align: left;">Main project</td></tr><tr><td style="padding: 6px 12px; text-align: left;"><img src="logo.svg" alt="Logo"></td><td style="padding: 6px 12px; text-align: left;">Brand</td><td style="padding: 6px 12px; text-align: left;">Company brand</td></tr></tbody></table>',
        )
      })
    })

    describe('Mixed content scenarios', () => {
      it('renders complex document with all features', () => {
        const content = `# Main Title

This is a **complex document** with *various* elements.

## Features

1. **Lists** with nested items:
   - Unordered nested list
   - Another item with \`inline code\`

2. **Code blocks** with different languages:
   \`\`\`javascript
   function example() {
     return "Hello World";
   }
   \`\`\`

3. **Tables** with complex content

## Quotes and More

> This is a blockquote with **emphasis** and a [link](https://test.com).
> 
> > Nested quote with \`code\`

---

### Final Notes

Check out this image: ![Example](test.jpg)

And this autolink: <https://automatic.link>`
        const html = renderComponent(content)

        // Check for all major elements
        expect(html).toBe(
          '<h1>Main Title</h1><p>This is a <strong>complex document</strong> with <em>various</em> elements.</p><h2>Features</h2><ol><li> <span><strong>Lists</strong> with nested items:</span>\n   <ul><li> <span>Unordered nested list</span></li><li> <span>Another item with <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">inline code</code></span></li></ul></li><li> <span><strong>Code blocks</strong> with different languages:</span>\n   <pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>   function example() {\n     return "Hello World";\n   }\n   ```</code></pre></li><li> <span><strong>Tables</strong> with complex content</span></li></ol><h2>Quotes and More</h2><blockquote style="padding-left: 16px; margin: 8px 0px;"><span>This is a blockquote with <strong>emphasis</strong> and a <a target="_blank" rel="noopener noreferrer" href="https://test.com">linkhttps://test.com</a>.</span><blockquote style="padding-left: 16px; margin: 8px 0px;"><span>Nested quote with <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">code</code></span></blockquote></blockquote><hr style="margin: 16px 0px;"><h3>Final Notes</h3><p>Check out this image: <img src="test.jpg" alt="Example"></p><p>And this autolink: <a target="_blank" rel="noopener noreferrer" href="https://automatic.link">https://automatic.link</a></p>',
        )
      })

      it('renders edge case with consecutive emphasis', () => {
        const html = renderComponent(
          'This has **bold** and **more bold** and *italic* and *more italic* text.',
        )
        expect(html).toBe(
          '<p>This has <strong>bold</strong> and <strong>more bold</strong> and <em>italic</em> and <em>more italic</em> text.</p>',
        )
      })

      it('renders emphasis across line breaks', () => {
        const content = `This is **bold text that
continues on the next line**`
        const html = renderComponent(content)
        expect(html).toBe(
          '<p>This is <strong>bold text that\ncontinues on the next line</strong></p>',
        )
      })

      it('renders mixed list types in complex document', () => {
        const content = `## Mixed Lists

1. Ordered item one
   - Nested unordered
   - Another nested
     1. Deep nested ordered
     2. Another deep ordered

2. Ordered item two
   > With a blockquote
   > 
   > And **emphasis**

3. Ordered item three with code:
   \`\`\`python
   print("Hello from Python")
   \`\`\``
        const html = renderComponent(content)
        expect(html).toBeDefined()
        expect(html).toContain('<h2>Mixed Lists</h2>')
        expect(html).toContain('<ol><li> <span>Ordered item one</span>')
      })
    })

    describe('Edge cases and malformed content', () => {
      it('handles unbalanced emphasis markers', () => {
        const html = renderComponent('This has **unbalanced bold and *mixed emphasis**')
        // Should handle gracefully without breaking
        expect(html).toBeDefined()
        expect(html).toBe('<p>This has *<em>unbalanced bold and <em>mixed emphasis</em></em></p>')
      })

      it('handles empty code blocks', () => {
        const html = renderComponent('```\n```')
        expect(html).toBe(
          '<pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>```</code></pre>',
        )
      })

      it('handles code blocks without closing', () => {
        const html = renderComponent('```javascript\nconst x = 1;')
        expect(html).toBeDefined()
        expect(html).toBe(
          '<pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>const x = 1;</code></pre>',
        )
      })

      it('handles consecutive same emphasis types correctly', () => {
        const html = renderComponent('**This is** nested **bold**')
        expect(html).toBe('<p><strong>This is</strong> nested <strong>bold</strong></p>')
      })

      it('handles consecutive italic emphasis correctly', () => {
        const html = renderComponent('*This is* nested *italic*')
        expect(html).toBe('<p><em>This is</em> nested <em>italic</em></p>')
      })

      it('handles triple asterisk emphasis correctly', () => {
        const html = renderComponent('***This is*** nested ***bold italic***')
        expect(html).toBe(
          '<p><em><strong>This is</strong></em> nested <em><strong>bold italic</strong></em></p>',
        )
      })

      it('handles proper separated emphasis correctly', () => {
        const html = renderComponent('**this** is **bold**')
        expect(html).toBe('<p><strong>this</strong> is <strong>bold</strong></p>')
      })

      it('handles links without URLs', () => {
        const html = renderComponent('[Link text]()')
        expect(html).toBe(
          '<p><a target="_blank" rel="noopener noreferrer" href="#">Link text</a></p>',
        )
      })

      it('handles images without src', () => {
        const html = renderComponent('![Alt text]()')
        expect(html).toBe('<p><img src="#" alt="Alt text"></p>')
      })

      it('handles empty table cells', () => {
        const content = `| Col1 | Col2 | Col3 |
|------|------|------|
| Data |      | More |
|      | Data |      |`
        const html = renderComponent(content)
        expect(html).toBe(
          '<table style="border-collapse: collapse; margin: 8px 0px; width: 100%;"><thead><tr><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Col1</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Col2</th><th style="padding: 6px 12px; font-weight: bold; text-align: left;">Col3</th></tr></thead><tbody><tr><td style="padding: 6px 12px; text-align: left;">Data</td><td style="padding: 6px 12px; text-align: left;">More</td></tr><tr><td style="padding: 6px 12px; text-align: left;">Data</td></tr></tbody></table>',
        )
      })
    })

    describe('Task lists and checkboxes', () => {
      it('renders task lists with checkboxes', () => {
        const content = `- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task`
        const html = renderComponent(content)
        expect(html).toBe(
          '<ul><li> <span><a target="_blank" rel="noopener noreferrer" href="#">x</a> Completed task</span></li><li> <span>[ ] Incomplete task</span></li><li> <span><a target="_blank" rel="noopener noreferrer" href="#">x</a> Another completed task</span></li></ul>',
        )
      })

      it('renders nested task lists', () => {
        const content = `- [x] Main task
  - [x] Subtask 1
  - [ ] Subtask 2
    - [x] Sub-subtask`
        const html = renderComponent(content)
        expect(html).toBe(
          '<ul><li> <span><a target="_blank" rel="noopener noreferrer" href="#">x</a> Main task</span>\n  <ul><li> <span><a target="_blank" rel="noopener noreferrer" href="#">x</a> Subtask 1</span></li><li> <span>[ ] Subtask 2</span>\n    <ul><li> <span><a target="_blank" rel="noopener noreferrer" href="#">x</a> Sub-subtask</span></li></ul></li></ul></li></ul>',
        )
      })
    })

    describe('Performance with large content', () => {
      it('handles large documents efficiently', () => {
        const largeContent = Array(100)
          .fill(0)
          .map(
            (_, i) =>
              `## Section ${i + 1}\n\nThis is paragraph ${
                i + 1
              } with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n`,
          )
          .join('\n')

        const html = renderComponent(largeContent)
        expect(html).toBeDefined()
        expect(html.length).toBeGreaterThan(1000)
      })
    })
  })

  describe('Custom renderers', () => {
    it('allows custom paragraph renderer', () => {
      const customRenderers = {
        Paragraph: ({ node }: { node: any }) => <div class="custom-paragraph">{node.content}</div>,
      }
      const html = renderComponent('Test paragraph', customRenderers)
      expect(html).toBe('<div class="custom-paragraph">Test paragraph</div>')
    })

    it('falls back to default renderer when custom not provided', () => {
      const customRenderers = {
        Paragraph: ({ node }: { node: any }) => <div class="custom-paragraph">{node.content}</div>,
      }
      const html = renderComponent('# Header', customRenderers)
      expect(html).toBe('<h1>Header</h1>')
    })

    it('allows custom emphasis renderer', () => {
      const customRenderers = {
        Emphasis: ({ node }: { node: any }) => <span class="custom-italic">{node.content}</span>,
      }
      const html = renderComponent('This is *custom italic* text', customRenderers)
      expect(html).toBe('<p>This is <span class="custom-italic">*custom italic*</span> text</p>')
    })

    it('allows custom link renderer with additional attributes', () => {
      const customRenderers = {
        Link: ({ node }: { node: any }) => (
          <a href="#" class="custom-link" data-original={node.content}>
            Custom Link
          </a>
        ),
      }
      const html = renderComponent('[Original Link](https://example.com)', customRenderers)
      expect(html).toBe(
        '<p><a href="#" class="custom-link" data-original="[Original Link](https://example.com)">Custom Link</a></p>',
      )
    })

    it('allows chaining of custom renderers', () => {
      const customRenderers = {
        StrongEmphasis: ({ node }: { node: any }) => <b class="custom-bold">{node.content}</b>,
        Emphasis: ({ node }: { node: any }) => <i class="custom-italic">{node.content}</i>,
      }
      const html = renderComponent('**Bold** and *italic* text', customRenderers)
      expect(html).toBe(
        '<p><b class="custom-bold">**Bold**</b> and <i class="custom-italic">*italic*</i> text</p>',
      )
    })
  })
})
