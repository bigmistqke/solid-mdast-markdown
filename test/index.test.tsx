import { describe, it, expect } from 'vitest'
import { render } from 'solid-js/web'
import { MDRenderer } from '../src'

// Generated from testSpec.ts - DO NOT EDIT MANUALLY
// Run 'tsx generate-tests.ts' to regenerate this file

describe('MDRenderer', () => {
  describe('Basic markdown features', () => {
    describe('Headers', () => {
      it('renders ATX heading 1', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "# Heading 1" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders ATX heading 2', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "## Heading 2" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders ATX heading 3', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "### Heading 3" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders ATX heading 4', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "#### Heading 4" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders ATX heading 5', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "##### Heading 5" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders ATX heading 6', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "###### Heading 6" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders Setext heading 1', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "Heading 1\n=========" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders Setext heading 2', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "Heading 2\n---------" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Paragraphs', () => {
      it('renders a simple paragraph', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "This is a paragraph." }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders multiple paragraphs', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "First paragraph.\n\nSecond paragraph." }), div)
        expect(div.innerHTML).toBe("undefinedundefined")
      })

      it('renders emphasis within paragraph', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "This is *italic* and **bold** text." }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders strikethrough within paragraph', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "This is ~~deleted~~ text." }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders inline code within paragraph', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "Use `console.log()` to debug." }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders lists with multiple paragraphs in items', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "1. First item with multiple paragraphs.\n\n   This is the second paragraph of the first item.\n\n2. Second item with code:\n\n   ```javascript\n   console.log('Hello from list');\n   ```" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('allows custom paragraph renderer', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "Test paragraph" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Emphasis', () => {
      it('renders italic text with asterisks', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "*italic*" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders italic text with underscores', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "_italic_" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders bold text with double asterisks', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "**bold**" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders bold text with double underscores', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "__bold__" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders blockquotes with emphasis and links', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "> This is a **bold** statement with [a link](https://example.com)\n> \n> And this is *italic* text in the same blockquote" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders bold within italic', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "*This is italic with **bold** inside*" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders italic within bold', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "**This is bold with *italic* inside**" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders strikethrough with nested emphasis', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "~~This is deleted with **bold** and *italic* text~~" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders complex nested emphasis combinations', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "***This is bold and italic*** with ~~strikethrough **and bold**~~" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders links with emphasis', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "[**Bold link**](https://example.com) and [*italic link*](https://test.com)" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders inline code with emphasis markers that should not be processed', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "`const **bold** = 'not bold';`" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders tables with emphasis and links', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "| Name | Description | Link |\n|------|-------------|------|\n| **Bold Name** | *Italic description* | [Visit](https://example.com) |\n| ~~Deprecated~~ | `code example` | [GitHub](https://github.com) |" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders edge case with consecutive emphasis', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "This has **bold** and **more bold** and *italic* and *more italic* text." }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders emphasis across line breaks', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "This is **bold text that\ncontinues on the next line**" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles unbalanced emphasis markers', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "This has **unbalanced bold and *mixed emphasis**" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles consecutive same emphasis types correctly', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "**This is** nested **bold**" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles consecutive italic emphasis correctly', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "*This is* nested *italic*" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles triple asterisk emphasis correctly', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "***This is*** nested ***bold italic***" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles proper separated emphasis correctly', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "**this** is **bold**" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('allows custom emphasis renderer', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "This is *custom italic* text" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Strikethrough', () => {
      it('renders strikethrough text', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "~~strikethrough~~" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Lists', () => {
      it('renders bullet list with dashes', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "- Item 1\n- Item 2\n- Item 3" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders bullet list with asterisks', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "* Item 1\n* Item 2\n* Item 3" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders bullet list with plus signs', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "+ Item 1\n+ Item 2\n+ Item 3" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders ordered list', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "1. First item\n2. Second item\n3. Third item" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders ordered list with different starting numbers', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "5. Fifth item\n6. Sixth item\n7. Seventh item" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders blockquotes with lists', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "> This blockquote contains a list:\n> \n> 1. First item\n> 2. Second item\n> 3. Third item" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders links in lists', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "- [Link 1](https://example.com)\n- Visit [Google](https://google.com) for search\n- Multiple [links](https://a.com) in [one](https://b.com) item" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders code blocks in lists', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n2. Run the application:\n   ```javascript\n   npm start\n   ```" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders mixed list types in complex document', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "## Mixed Lists\n\n1. Ordered item one\n   - Nested unordered\n   - Another nested\n     1. Deep nested ordered\n     2. Another deep ordered\n\n2. Ordered item two\n   > With a blockquote\n   > \n   > And **emphasis**\n\n3. Ordered item three with code:\n   ```python\n   print(\"Hello from Python\")\n   ```" }), div)
        expect(div.innerHTML).toBe("undefinedundefined")
      })

    })

    describe('Code', () => {
      it('renders inline code', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "`code`" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders fenced code block', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "```\nconst x = 1;\nconsole.log(x);\n```" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders fenced code block with language', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "```javascript\nconst x = 1;\nconsole.log(x);\n```" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders indented code block', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "    const x = 1;\n    console.log(x);" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders code within links', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "[Check out `console.log()`](https://developer.mozilla.org)" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles empty code blocks', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "```\n```" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles code blocks without closing', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "```javascript\nconst x = 1;" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Links and Images', () => {
      it('renders inline link', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "[Example.com](https://example.com)" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders autolink', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "<https://example.com>" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders image', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "![Alt text](image.jpg)" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders tables with images', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "| Icon | Name | Description |\n|------|------|-------------|\n| ![Icon](icon.png) | Project | Main project |\n| ![Logo](logo.svg) | Brand | Company brand |" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles links without URLs', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "[Link text]()" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles images without src', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "![Alt text]()" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('allows custom link renderer with additional attributes', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "[Original Link](https://example.com)" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Blockquotes', () => {
      it('renders blockquote', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "> This is a blockquote." }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders multi-line blockquote', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "> First line\n> Second line" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders nested blockquotes', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "> This is a blockquote\n> \n> > This is a nested blockquote\n> > \n> > > And this is triple nested" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Horizontal Rules', () => {
      it('renders horizontal rule with dashes', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "---" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders horizontal rule with asterisks', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "***" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders horizontal rule with underscores', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "___" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Tables', () => {
      it('renders simple table', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders table with alignment', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "| Left | Center | Right |\n|:-----|:------:|------:|\n| L1   |   C1   |    R1 |" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders standalone table correctly', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles empty table cells', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "| Col1 | Col2 | Col3 |\n|------|------|------|\n| Data |      | More |\n|      | Data |      |" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Special syntax', () => {
      it('handles backslash escapes', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "\\*not italic\\*" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles escaped characters', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "\\# Not a header" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles HTML entities', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "&amp; &lt; &gt;" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles special entities', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "&copy; &trade;" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles soft line breaks', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "Line one\nLine two" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('handles hard line breaks', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "Line one  \nLine two" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Custom renderers', () => {
      it('falls back to default renderer when custom not provided', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "# Header" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('allows chaining of custom renderers', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "**Bold** and *italic* text" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

  })

  describe('Nested and complex scenarios', () => {
    describe('Nested lists', () => {
      it('renders deeply nested unordered lists', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "- Level 1\n  - Level 2\n    - Level 3\n      - Level 4" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders mixed nested lists (ordered and unordered)', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "1. First ordered item\n   - Nested unordered item\n   - Another nested item\n2. Second ordered item\n   1. Nested ordered item\n   2. Another nested ordered item" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

      it('renders nested task lists', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "- [x] Main task\n  - [x] Subtask 1\n  - [ ] Subtask 2\n    - [x] Sub-subtask" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Links and images in various contexts', () => {
      it('renders images within links', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "[![Alt text](image.jpg)](https://example.com)" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Code in various contexts', () => {
      it('renders code blocks in blockquotes', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "> Here's an example:\n> \n> ```javascript\n> function hello() {\n>   return \"world\";\n> }\n> ```" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

    describe('Mixed content scenarios', () => {
      it('renders complex document with all features', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "# Main Title\n\nThis is a **complex document** with *various* elements.\n\n## Features\n\n1. **Lists** with nested items:\n   - Unordered nested list\n   - Another item with `inline code`\n\n2. **Code blocks** with different languages:\n   ```javascript\n   function example() {\n     return \"Hello World\";\n   }\n   ```\n\n3. **Tables** with complex content\n\n## Quotes and More\n\n> This is a blockquote with **emphasis** and a [link](https://test.com).\n> \n> > Nested quote with `code`\n\n---\n\n### Final Notes\n\nCheck out this image: ![Example](test.jpg)\n\nAnd this autolink: <https://automatic.link>" }), div)
        expect(div.innerHTML).toBe("undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined")
      })

    })

    describe('Edge cases and malformed content', () => {
      it('handles complex nested markdown', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "# Header\n\nThis is a **bold** paragraph with *italic* text and `code`.\n\n- List item with [link](https://example.com)\n- Another item\n\n> Blockquote with **emphasis**" }), div)
        expect(div.innerHTML).toBe("undefinedundefinedundefinedundefined")
      })

    })

    describe('Task lists and checkboxes', () => {
      it('renders task lists with checkboxes', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: "- [x] Completed task\n- [ ] Incomplete task\n- [x] Another completed task" }), div)
        expect(div.innerHTML).toBe("undefined")
      })

    })

  })

  describe('Special syntax', () => {
    it('handles backslash escapes', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "\\*not italic\\*" }), div)
      expect(div.innerHTML).toBe("undefined")
    })

    it('handles escaped characters', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "\\# Not a header" }), div)
      expect(div.innerHTML).toBe("undefined")
    })

    it('handles HTML entities', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "&amp; &lt; &gt;" }), div)
      expect(div.innerHTML).toBe("undefined")
    })

    it('handles special entities', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "&copy; &trade;" }), div)
      expect(div.innerHTML).toBe("undefined")
    })

    it('handles soft line breaks', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "Line one\nLine two" }), div)
      expect(div.innerHTML).toBe("undefined")
    })

    it('handles hard line breaks', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "Line one  \nLine two" }), div)
      expect(div.innerHTML).toBe("undefined")
    })

  })

  describe('Performance with large content', () => {
    it('handles large documents efficiently', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "## Section 1\n\nThis is paragraph 1 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 2\n\nThis is paragraph 2 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 3\n\nThis is paragraph 3 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 4\n\nThis is paragraph 4 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 5\n\nThis is paragraph 5 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 6\n\nThis is paragraph 6 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 7\n\nThis is paragraph 7 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 8\n\nThis is paragraph 8 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 9\n\nThis is paragraph 9 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 10\n\nThis is paragraph 10 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 11\n\nThis is paragraph 11 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 12\n\nThis is paragraph 12 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 13\n\nThis is paragraph 13 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 14\n\nThis is paragraph 14 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 15\n\nThis is paragraph 15 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 16\n\nThis is paragraph 16 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 17\n\nThis is paragraph 17 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 18\n\nThis is paragraph 18 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 19\n\nThis is paragraph 19 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 20\n\nThis is paragraph 20 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 21\n\nThis is paragraph 21 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 22\n\nThis is paragraph 22 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 23\n\nThis is paragraph 23 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 24\n\nThis is paragraph 24 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 25\n\nThis is paragraph 25 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 26\n\nThis is paragraph 26 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 27\n\nThis is paragraph 27 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 28\n\nThis is paragraph 28 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 29\n\nThis is paragraph 29 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 30\n\nThis is paragraph 30 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 31\n\nThis is paragraph 31 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 32\n\nThis is paragraph 32 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 33\n\nThis is paragraph 33 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 34\n\nThis is paragraph 34 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 35\n\nThis is paragraph 35 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 36\n\nThis is paragraph 36 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 37\n\nThis is paragraph 37 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 38\n\nThis is paragraph 38 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 39\n\nThis is paragraph 39 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 40\n\nThis is paragraph 40 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 41\n\nThis is paragraph 41 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 42\n\nThis is paragraph 42 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 43\n\nThis is paragraph 43 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 44\n\nThis is paragraph 44 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 45\n\nThis is paragraph 45 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 46\n\nThis is paragraph 46 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 47\n\nThis is paragraph 47 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 48\n\nThis is paragraph 48 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 49\n\nThis is paragraph 49 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 50\n\nThis is paragraph 50 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 51\n\nThis is paragraph 51 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 52\n\nThis is paragraph 52 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 53\n\nThis is paragraph 53 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 54\n\nThis is paragraph 54 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 55\n\nThis is paragraph 55 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 56\n\nThis is paragraph 56 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 57\n\nThis is paragraph 57 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 58\n\nThis is paragraph 58 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 59\n\nThis is paragraph 59 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 60\n\nThis is paragraph 60 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 61\n\nThis is paragraph 61 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 62\n\nThis is paragraph 62 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 63\n\nThis is paragraph 63 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 64\n\nThis is paragraph 64 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 65\n\nThis is paragraph 65 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 66\n\nThis is paragraph 66 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 67\n\nThis is paragraph 67 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 68\n\nThis is paragraph 68 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 69\n\nThis is paragraph 69 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 70\n\nThis is paragraph 70 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 71\n\nThis is paragraph 71 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 72\n\nThis is paragraph 72 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 73\n\nThis is paragraph 73 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 74\n\nThis is paragraph 74 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 75\n\nThis is paragraph 75 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 76\n\nThis is paragraph 76 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 77\n\nThis is paragraph 77 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 78\n\nThis is paragraph 78 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 79\n\nThis is paragraph 79 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 80\n\nThis is paragraph 80 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 81\n\nThis is paragraph 81 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 82\n\nThis is paragraph 82 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 83\n\nThis is paragraph 83 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 84\n\nThis is paragraph 84 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 85\n\nThis is paragraph 85 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 86\n\nThis is paragraph 86 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 87\n\nThis is paragraph 87 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 88\n\nThis is paragraph 88 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 89\n\nThis is paragraph 89 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 90\n\nThis is paragraph 90 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 91\n\nThis is paragraph 91 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 92\n\nThis is paragraph 92 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 93\n\nThis is paragraph 93 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 94\n\nThis is paragraph 94 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 95\n\nThis is paragraph 95 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 96\n\nThis is paragraph 96 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 97\n\nThis is paragraph 97 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 98\n\nThis is paragraph 98 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 99\n\nThis is paragraph 99 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 100\n\nThis is paragraph 100 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n" }), div)
      expect(div.innerHTML).toBe("undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined")
    })

  })

  describe('Custom renderers', () => {
    it('falls back to default renderer when custom not provided', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "# Header" }), div)
      expect(div.innerHTML).toBe("undefined")
    })

    it('allows chaining of custom renderers', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: "**Bold** and *italic* text" }), div)
      expect(div.innerHTML).toBe("undefined")
    })

  })

})
