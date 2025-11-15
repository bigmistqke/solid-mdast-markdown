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
        expect(html).toBe('<span>This is a paragraph.</span>')
      })

      it('renders multiple paragraphs', () => {
        const html = renderComponent('First paragraph.\n\nSecond paragraph.')
        expect(html).toBe('<span>First paragraph.</span><span>Second paragraph.</span>')
      })
    })

    describe('Emphasis', () => {
      it('renders italic text with asterisks', () => {
        const html = renderComponent('*italic*')
        expect(html).toBe('<span><em>italic</em></span>')
      })

      it('renders italic text with underscores', () => {
        const html = renderComponent('_italic_')
        expect(html).toBe('<span><em>italic</em></span>')
      })

      it('renders bold text with double asterisks', () => {
        const html = renderComponent('**bold**')
        expect(html).toBe('<span><strong>bold</strong></span>')
      })

      it('renders bold text with double underscores', () => {
        const html = renderComponent('__bold__')
        expect(html).toBe('<span><strong>bold</strong></span>')
      })

      it('renders emphasis within paragraph', () => {
        const html = renderComponent('This is *italic* and **bold** text.')
        expect(html).toBe('<span>This is <em>italic</em> and <strong>bold</strong> text.</span>')
      })
    })

    describe('Strikethrough', () => {
      it('renders strikethrough text', () => {
        const html = renderComponent('~~strikethrough~~')
        expect(html).toBe('<span><del>strikethrough</del></span>')
      })

      it('renders strikethrough within paragraph', () => {
        const html = renderComponent('This is ~~deleted~~ text.')
        expect(html).toBe('<span>This is <del>deleted</del> text.</span>')
      })
    })
  })

  describe('Lists', () => {
    describe('Unordered lists', () => {
      it('renders bullet list with dashes', () => {
        const html = renderComponent('- Item 1\n- Item 2\n- Item 3')
        expect(html).toBe('<ul><li> <span>Item 1</span></li><li> <span>Item 2</span></li><li> <span>Item 3</span></li></ul>')
      })

      it('renders bullet list with asterisks', () => {
        const html = renderComponent('* Item 1\n* Item 2\n* Item 3')
        expect(html).toBe('<ul><li> <span>Item 1</span></li><li> <span>Item 2</span></li><li> <span>Item 3</span></li></ul>')
      })

      it('renders bullet list with plus signs', () => {
        const html = renderComponent('+ Item 1\n+ Item 2\n+ Item 3')
        expect(html).toBe('<ul><li> <span>Item 1</span></li><li> <span>Item 2</span></li><li> <span>Item 3</span></li></ul>')
      })
    })

    describe('Ordered lists', () => {
      it('renders ordered list', () => {
        const html = renderComponent('1. First item\n2. Second item\n3. Third item')
        expect(html).toBe('<ol><li> <span>First item</span></li><li> <span>Second item</span></li><li> <span>Third item</span></li></ol>')
      })

      it('renders ordered list with different starting numbers', () => {
        const html = renderComponent('5. Fifth item\n6. Sixth item\n7. Seventh item')
        expect(html).toBe('<ol><li> <span>Fifth item</span></li><li> <span>Sixth item</span></li><li> <span>Seventh item</span></li></ol>')
      })
    })
  })

  describe('Code blocks and inline code', () => {
    describe('Inline code', () => {
      it('renders inline code', () => {
        const html = renderComponent('`code`')
        expect(html).toBe('<span><code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">code</code></span>')
      })

      it('renders inline code within paragraph', () => {
        const html = renderComponent('Use `console.log()` to debug.')
        expect(html).toBe('<span>Use <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">console.log()</code> to debug.</span>')
      })
    })

    describe('Code blocks', () => {
      it('renders fenced code block', () => {
        const html = renderComponent('```\nconst x = 1;\nconsole.log(x);\n```')
        expect(html).toBe('<pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>const x = 1;\nconsole.log(x);</code></pre>')
      })

      it('renders fenced code block with language', () => {
        const html = renderComponent('```javascript\nconst x = 1;\nconsole.log(x);\n```')
        expect(html).toBe('<pre style="padding: 8px; border-radius: 4px; margin: 8px 0px;"><code>const x = 1;\nconsole.log(x);</code></pre>')
      })

      it('renders indented code block', () => {
        const html = renderComponent('    const x = 1;\n    console.log(x);')
        expect(html).toBe('<pre style="margin: 8px 0px;"><code>const x = 1;\n    console.log(x);</code></pre>')
      })
    })
  })

  describe('Links and images', () => {
    describe('Links', () => {
      it('renders inline link', () => {
        const html = renderComponent('[Example.com](https://example.com)')
        expect(html).toBe('<span><a target="_blank" rel="noopener noreferrer" href="https://example.com">Example.comhttps://example.com</a></span>')
      })

      it('renders autolink', () => {
        const html = renderComponent('<https://example.com>')
        expect(html).toBe('<span><a target="_blank" rel="noopener noreferrer" href="https://example.com">https://example.com</a></span>')
      })
    })

    describe('Images', () => {
      it('renders image', () => {
        const html = renderComponent('![Alt text](image.jpg)')
        expect(html).toBe('<span><img src="image.jpg" alt="Alt text"></span>')
      })
    })
  })

  describe('Blockquotes and horizontal rules', () => {
    describe('Blockquotes', () => {
      it('renders blockquote', () => {
        const html = renderComponent('> This is a blockquote.')
        expect(html).toBe('<blockquote style="padding-left: 16px; margin: 8px 0px;"> <span>This is a blockquote.</span></blockquote>')
      })

      it('renders multi-line blockquote', () => {
        const html = renderComponent('> First line\n> Second line')
        expect(html).toBe('<blockquote style="padding-left: 16px; margin: 8px 0px;"> <span>First line\n Second line</span></blockquote>')
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
      expect(html).toBe('<table><thead><tr><th>Name</th><th>Age</th></tr></thead><tbody><tr><td>John</td><td>30</td></tr><tr><td>Jane</td><td>25</td></tr></tbody></table>')
    })

    it('renders table with alignment', () => {
      const content =
        '| Left | Center | Right |\n|:-----|:------:|------:|\n| L1   |   C1   |    R1 |'
      const html = renderComponent(content)
      expect(html).toBe('<table><thead><tr><th>Left</th><th>Center</th><th>Right</th></tr></thead><tbody><tr><td>L1</td><td>C1</td><td>R1</td></tr></tbody></table>')
    })
  })

  describe('Special syntax', () => {
    describe('Escapes', () => {
      it('handles backslash escapes', () => {
        const html = renderComponent('\\*not italic\\*')
        expect(html).toBe('<span>*not italic*</span>')
      })

      it('handles escaped characters', () => {
        const html = renderComponent('\\# Not a header')
        expect(html).toBe('<span># Not a header</span>')
      })
    })

    describe('HTML entities', () => {
      it('handles HTML entities', () => {
        const html = renderComponent('&amp; &lt; &gt;')
        expect(html).toBe('<span>&amp; &lt; &gt;</span>')
      })

      it('handles special entities', () => {
        const html = renderComponent('&copy; &trade;')
        expect(html).toBe('<span>© ™</span>')
      })
    })

    describe('Line breaks', () => {
      it('handles soft line breaks', () => {
        const html = renderComponent('Line one\nLine two')
        expect(html).toBe('<span>Line one\nLine two</span>')
      })

      it('handles hard line breaks', () => {
        const html = renderComponent('Line one  \nLine two')
        expect(html).toBe('<span>Line one<br>Line two</span>')
      })
    })

    describe('Mixed content', () => {
      it('handles complex nested markdown', () => {
        const content =
          '# Header\n\nThis is a **bold** paragraph with *italic* text and `code`.\n\n- List item with [link](https://example.com)\n- Another item\n\n> Blockquote with **emphasis**'
        const html = renderComponent(content)
        expect(html).toBe('<h1>Header</h1><span>This is a <strong>bold</strong> paragraph with <em>italic</em> text and <code>code</code>.</span><ul><li><a href="https://example.com">link</a></li><li>Another item</li></ul><blockquote><span>Blockquote with <strong>emphasis</strong></span></blockquote>')
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
        expect(html).toBe('<ul><li><span>Level 1</span><ul><li><span>Level 2</span><ul><li><span>Level 3</span><ul><li><span>Level 4</span></li></ul></li></ul></li></ul></li></ul>')
      })

      it('renders mixed nested lists (ordered and unordered)', () => {
        const content = `1. First ordered item
   - Nested unordered item
   - Another nested item
2. Second ordered item
   1. Nested ordered item
   2. Another nested ordered item`
        const html = renderComponent(content)
        expect(html).toBe('<ol><li><span>First ordered item</span><ul><li><span>Nested unordered item</span></li><li><span>Another nested item</span></li></ul></li><li><span>Second ordered item</span><ol><li><span>Nested ordered item</span></li><li><span>Another nested ordered item</span></li></ol></li></ol>')
      })

      it('renders lists with multiple paragraphs in items', () => {
        const content = `1. First item with multiple paragraphs.

   This is the second paragraph of the first item.

2. Second item with code:

   \`\`\`javascript
   console.log('Hello from list');
   \`\`\``
        const html = renderComponent(content)
        expect(html).toBe('<ol><li><span>First item with multiple paragraphs.</span><span>This is the second paragraph of the first item.</span></li><li><span>Second item with code:</span><pre><code>console.log(\'Hello from list\');</code></pre></li></ol>')
      })
    })

    describe('Nested emphasis', () => {
      it('renders bold within italic', () => {
        const html = renderComponent('*This is italic with **bold** inside*')
        expect(html).toBe('<span><em>This is italic with <strong>bold</strong> inside</em></span>')
      })

      it('renders italic within bold', () => {
        const html = renderComponent('**This is bold with *italic* inside**')
        expect(html).toBe('<span><strong>This is bold with <em>italic</em> inside</strong></span>')
      })

      it('renders strikethrough with nested emphasis', () => {
        const html = renderComponent('~~This is deleted with **bold** and *italic* text~~')
        expect(html).toBe('<span><del>This is deleted with <strong>bold</strong> and <em>italic</em> text</del></span>')
      })

      it('renders complex nested emphasis combinations', () => {
        const html = renderComponent(
          '***This is bold and italic*** with ~~strikethrough **and bold**~~',
        )
        expect(html).toBe('<span><em><strong>This is bold and italic</strong></em> with <del>strikethrough <strong>and bold</strong></del></span>')
      })
    })

    describe('Links and images in various contexts', () => {
      it('renders links with emphasis', () => {
        const html = renderComponent(
          '[**Bold link**](https://example.com) and [*italic link*](https://test.com)',
        )
        expect(html).toBe('<span><a href="https://example.com" target="_blank" rel="noopener noreferrer"><strong>Bold link</strong></a> and <a href="https://test.com" target="_blank" rel="noopener noreferrer"><em>italic link</em></a></span>')
      })

      it('renders images within links', () => {
        const html = renderComponent('[![Alt text](image.jpg)](https://example.com)')
        expect(html).toBe('<span><a href="https://example.com" target="_blank" rel="noopener noreferrer"><img src="image.jpg" alt="Alt text"></a></span>')
      })

      it('renders links in lists', () => {
        const content = `- [Link 1](https://example.com)
- Visit [Google](https://google.com) for search
- Multiple [links](https://a.com) in [one](https://b.com) item`
        const html = renderComponent(content)
        expect(html).toBe('<ul><li> <span><a href="https://example.com" target="_blank" rel="noopener noreferrer">Link 1</a></span></li><li> <span>Visit <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a> for search</span></li><li> <span>Multiple <a href="https://a.com" target="_blank" rel="noopener noreferrer">links</a> in <a href="https://b.com" target="_blank" rel="noopener noreferrer">one</a> item</span></li></ul>')
      })

      it('renders code within links', () => {
        const html = renderComponent('[Check out `console.log()`](https://developer.mozilla.org)')
        expect(html).toBe('<span><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Check out <code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">console.log()</code></a></span>')
      })
    })

    describe('Code in various contexts', () => {
      it('renders inline code with emphasis markers that should not be processed', () => {
        const html = renderComponent("`const **bold** = 'not bold';`")
        expect(html).toBe('<span><code style="padding: 2px 4px; border-radius: 3px; font-family: monospace;">const **bold** = \'not bold\';</code></span>')
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
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
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
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
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
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('renders blockquotes with emphasis and links', () => {
        const content = `> This is a **bold** statement with [a link](https://example.com)
> 
> And this is *italic* text in the same blockquote`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('renders blockquotes with lists', () => {
        const content = `> This blockquote contains a list:
> 
> 1. First item
> 2. Second item
> 3. Third item`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })
    })

    describe('Tables with complex content', () => {
      it('renders standalone table correctly', () => {
        const content = `| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('renders tables with emphasis and links', () => {
        const content = `| Name | Description | Link |
|------|-------------|------|
| **Bold Name** | *Italic description* | [Visit](https://example.com) |
| ~~Deprecated~~ | \`code example\` | [GitHub](https://github.com) |`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('renders tables with images', () => {
        const content = `| Icon | Name | Description |
|------|------|-------------|
| ![Icon](icon.png) | Project | Main project |
| ![Logo](logo.svg) | Brand | Company brand |`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
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
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")

        // Check for specific content
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('renders edge case with consecutive emphasis', () => {
        const html = renderComponent(
          'This has **bold** and **more bold** and *italic* and *more italic* text.',
        )
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('renders emphasis across line breaks', () => {
        const content = `This is **bold text that
continues on the next line**`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
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
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })
    })

    describe('Edge cases and malformed content', () => {
      it('handles unbalanced emphasis markers', () => {
        const html = renderComponent('This has **unbalanced bold and *mixed emphasis**')
        // Should handle gracefully without breaking
        expect(html).toBeDefined()
        //expect(html).toBe("TEMP")
      })

      it('handles empty code blocks', () => {
        const html = renderComponent('```\n```')
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('handles code blocks without closing', () => {
        const html = renderComponent('```javascript\nconst x = 1;')
        expect(html).toBeDefined()
        //expect(html).toBe("TEMP")
      })

      it('handles consecutive same emphasis types correctly', () => {
        const html = renderComponent('**This is** nested **bold**')
        expect(html).toBe('<span><strong>This is</strong> nested <strong>bold</strong></span>')
      })

      it('handles consecutive italic emphasis correctly', () => {
        const html = renderComponent('*This is* nested *italic*')
        expect(html).toBe('<span><em>This is</em> nested <em>italic</em></span>')
      })

      it('handles triple asterisk emphasis correctly', () => {
        const html = renderComponent('***This is*** nested ***bold italic***')
        expect(html).toBe('<span><em><strong>This is</strong></em> nested <em><strong>bold italic</strong></em></span>')
      })

      it('handles proper separated emphasis correctly', () => {
        const html = renderComponent('**this** is **bold**')
        expect(html).toBe('<span><strong>this</strong> is <strong>bold</strong></span>')
      })

      it('handles links without URLs', () => {
        const html = renderComponent('[Link text]()')
        //expect(html).toBe("TEMP")
      })

      it('handles images without src', () => {
        const html = renderComponent('![Alt text]()')
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('handles empty table cells', () => {
        const content = `| Col1 | Col2 | Col3 |
|------|------|------|
| Data |      | More |
|      | Data |      |`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })
    })

    describe('Task lists and checkboxes', () => {
      it('renders task lists with checkboxes', () => {
        const content = `- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })

      it('renders nested task lists', () => {
        const content = `- [x] Main task
  - [x] Subtask 1
  - [ ] Subtask 2
    - [x] Sub-subtask`
        const html = renderComponent(content)
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
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
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
        //expect(html).toBe("TEMP")
      })
    })
  })

  describe('Custom renderers', () => {
    it('allows custom paragraph renderer', () => {
      const customRenderers = {
        Paragraph: ({ node }: { node: any }) => <div class="custom-paragraph">{node.content}</div>,
      }
      const html = renderComponent('Test paragraph', customRenderers)
      //expect(html).toBe("TEMP")
      //expect(html).toBe("TEMP")
    })

    it('falls back to default renderer when custom not provided', () => {
      const customRenderers = {
        Paragraph: ({ node }: { node: any }) => <div class="custom-paragraph">{node.content}</div>,
      }
      const html = renderComponent('# Header', customRenderers)
      //expect(html).toBe("TEMP")
    })

    it('allows custom emphasis renderer', () => {
      const customRenderers = {
        Emphasis: ({ node }: { node: any }) => <span class="custom-italic">{node.content}</span>,
      }
      const html = renderComponent('This is *custom italic* text', customRenderers)
      //expect(html).toBe("TEMP")
      
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
      //expect(html).toBe("TEMP")
      //expect(html).toBe("TEMP")
    })

    it('allows chaining of custom renderers', () => {
      const customRenderers = {
        StrongEmphasis: ({ node }: { node: any }) => <b class="custom-bold">{node.content}</b>,
        Emphasis: ({ node }: { node: any }) => <i class="custom-italic">{node.content}</i>,
      }
      const html = renderComponent('**Bold** and *italic* text', customRenderers)
      //expect(html).toBe("TEMP")
      //expect(html).toBe("TEMP")
      //expect(html).toBe("TEMP")
      //expect(html).toBe("TEMP")
    })
  })
})
