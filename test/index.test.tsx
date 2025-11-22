/**
 * Generated from testSpec.ts - [DO NOT EDIT MANUALLY]
 * Run 'pnpm test:update' to regenerate this file
 **/

import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import { setup } from "./setup.ts";
import { Markdown } from "../src/index.ts";
import { extensions, mdastExtensions } from "../snapshots/extensions.ts";

setup();

describe("Markdown", () => {
  it("renders heading 1 with 1 asterisk prefix", () => {
    const { asFragment } = render(() => <Markdown markdown={"# Heading 1"} />);
    expect(asFragment()).toRenderEqual("<h1 >Heading 1</h1>");
  });
  it("renders heading 2 with 2 asterisks prefix", () => {
    const { asFragment } = render(() => <Markdown markdown={"## Heading 2"} />);
    expect(asFragment()).toRenderEqual("<h2 >Heading 2</h2>");
  });
  it("renders heading 3 with 3 asterisks prefix", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"### Heading 3"} />
    ));
    expect(asFragment()).toRenderEqual("<h3 >Heading 3</h3>");
  });
  it("renders heading 4 with 4 asterisks prefix", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"#### Heading 4"} />
    ));
    expect(asFragment()).toRenderEqual("<h4 >Heading 4</h4>");
  });
  it("renders heading 5 with 5 asterisks prefix", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"##### Heading 5"} />
    ));
    expect(asFragment()).toRenderEqual("<h5 >Heading 5</h5>");
  });
  it("renders heading 6 with 6 asterisks prefix", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"###### Heading 6"} />
    ));
    expect(asFragment()).toRenderEqual("<h6 >Heading 6</h6>");
  });
  it("renders heading 1 with = underline", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"Heading 1\n========="} />
    ));
    expect(asFragment()).toRenderEqual("<h1 >Heading 1</h1>");
  });
  it("renders heading 2 with - underline", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"Heading 2\n---------"} />
    ));
    expect(asFragment()).toRenderEqual("<h2 >Heading 2</h2>");
  });
  it("renders a simple paragraph", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"This is a paragraph."} />
    ));
    expect(asFragment()).toRenderEqual("<p>This is a paragraph.</p>");
  });
  it("renders multiple paragraphs", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"First paragraph.\n\nSecond paragraph."} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p>First paragraph.</p><p>Second paragraph.</p>",
    );
  });
  it("renders italic text with asterisks", () => {
    const { asFragment } = render(() => <Markdown markdown={"*italic*"} />);
    expect(asFragment()).toRenderEqual("<p><em>italic</em></p>");
  });
  it("renders italic text with underscores", () => {
    const { asFragment } = render(() => <Markdown markdown={"_italic_"} />);
    expect(asFragment()).toRenderEqual("<p><em>italic</em></p>");
  });
  it("renders bold text with double asterisks", () => {
    const { asFragment } = render(() => <Markdown markdown={"**bold**"} />);
    expect(asFragment()).toRenderEqual("<p><strong>bold</strong></p>");
  });
  it("renders bold text with double underscores", () => {
    const { asFragment } = render(() => <Markdown markdown={"__bold__"} />);
    expect(asFragment()).toRenderEqual("<p><strong>bold</strong></p>");
  });
  it("renders emphasis within paragraph", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"This is *italic* and **bold** text."} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p>This is <em>italic</em> and <strong>bold</strong> text.</p>",
    );
  });
  it("renders bullet list with dashes", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"- Item 1\n- Item 2\n- Item 3"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
    );
  });
  it("renders bullet list with asterisks", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"* Item 1\n* Item 2\n* Item 3"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
    );
  });
  it("renders bullet list with plus signs", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"+ Item 1\n+ Item 2\n+ Item 3"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
    );
  });
  it("renders ordered list", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"1. First item\n2. Second item\n3. Third item"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<ol ><li>First item</li><li>Second item</li><li>Third item</li></ol>",
    );
  });
  it("renders ordered list with different starting numbers", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"5. Fifth item\n6. Sixth item\n7. Seventh item"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<ol ><li>Fifth item</li><li>Sixth item</li><li>Seventh item</li></ol>",
    );
  });
  it("renders inline code", () => {
    const { asFragment } = render(() => <Markdown markdown={"`code`"} />);
    expect(asFragment()).toRenderEqual("<p><code>code</code></p>");
  });
  it("renders inline code within paragraph", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"Use `console.log()` to debug."} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p>Use <code>console.log()</code> to debug.</p>",
    );
  });
  it("renders fenced code block", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"```\nconst x = 1;\nconsole.log(x);\n```"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<pre><code>const x = 1;\nconsole.log(x);</code></pre>",
    );
  });
  it("renders fenced code block with language", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={"```javascript\nconst x = 1;\nconsole.log(x);\n```"}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<pre><code>const x = 1;\nconsole.log(x);</code></pre>",
    );
  });
  it("renders indented code block", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"    const x = 1;\n    console.log(x);"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<pre><code>const x = 1;\nconsole.log(x);</code></pre>",
    );
  });
  it("renders indented code block break", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"    const x = 1;\nconsole.log(x);"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<pre><code>const x = 1;</code></pre><p>console.log(x);</p>",
    );
  });
  it("renders inline link", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"[Example.com](https://example.com)"} />
    ));
    expect(asFragment()).toRenderEqual(
      '<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Example.com</a></p>',
    );
  });
  it("renders autolink", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"<https://example.com>"} />
    ));
    expect(asFragment()).toRenderEqual(
      '<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a></p>',
    );
  });
  it("renders image", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"![Alt text](image.jpg)"} />
    ));
    expect(asFragment()).toRenderEqual(
      '<p><img src="image.jpg" alt="Alt text"></p>',
    );
  });
  it("renders blockquote", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"> This is a blockquote."} />
    ));
    expect(asFragment()).toRenderEqual(
      "<blockquote><p>This is a blockquote.</p></blockquote>",
    );
  });
  it("renders multi-line blockquote", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"> First line\n> Second line"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<blockquote><p>First line\nSecond line</p></blockquote>",
    );
  });
  it("renders multi-line blockquote with empty line", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"> First line\n>\n> Second line"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<blockquote><p>First line</p><p>Second line</p></blockquote>",
    );
  });
  it("renders nested blockquotes", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "> This is a blockquote\n> \n> > This is a nested blockquote\n> > \n> > > And this is triple nested"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<blockquote><p>This is a blockquote</p><blockquote><p>This is a nested blockquote</p><blockquote><p>And this is triple nested</p></blockquote></blockquote></blockquote>",
    );
  });
  it("renders blockquotes with emphasis and links", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "> This is a **bold** statement with [a link](https://example.com)\n> \n> And this is *italic* text in the same blockquote"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<blockquote><p>This is a <strong>bold</strong> statement with <a href="https://example.com" target="_blank" rel="noopener noreferrer">a link</a></p><p>And this is <em>italic</em> text in the same blockquote</p></blockquote>',
    );
  });
  it("renders blockquotes with lists", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "> This blockquote contains a list:\n> \n> 1. First item\n> 2. Second item\n> 3. Third item"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<blockquote><p>This blockquote contains a list:</p><ol ><li>First item</li><li>Second item</li><li>Third item</li></ol></blockquote>",
    );
  });
  it("renders horizontal rule with dashes", () => {
    const { asFragment } = render(() => <Markdown markdown={"---"} />);
    expect(asFragment()).toRenderEqual("<hr>");
  });
  it("renders horizontal rule with asterisks", () => {
    const { asFragment } = render(() => <Markdown markdown={"***"} />);
    expect(asFragment()).toRenderEqual("<hr>");
  });
  it("renders horizontal rule with underscores", () => {
    const { asFragment } = render(() => <Markdown markdown={"___"} />);
    expect(asFragment()).toRenderEqual("<hr>");
  });
  it("handles backslash escapes", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"\\*not italic\\*"} />
    ));
    expect(asFragment()).toRenderEqual("<p>*not italic*</p>");
  });
  it("handles escaped characters", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"\\# Not a header"} />
    ));
    expect(asFragment()).toRenderEqual("<p># Not a header</p>");
  });
  it("handles HTML entities", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"&amp; &lt; &gt;"} />
    ));
    expect(asFragment()).toRenderEqual("<p>&amp; &lt; ></p>");
  });
  it("handles special entities", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"&copy; &trade;"} />
    ));
    expect(asFragment()).toRenderEqual("<p>© ™</p>");
  });
  it("handles soft line breaks", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"Line one\nLine two"} />
    ));
    expect(asFragment()).toRenderEqual("<p>Line one\nLine two</p>");
  });
  it("handles hard line breaks", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"Line one  \nLine two"} />
    ));
    expect(asFragment()).toRenderEqual("<p>Line one<br>Line two</p>");
  });
  it("handles complex nested markdown", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "# Header\n\nThis is a **bold** paragraph with *italic* text and `code`.\n\n- List item with [link](https://example.com)\n- Another item\n\n> Blockquote with **emphasis**"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<h1 >Header</h1><p>This is a <strong>bold</strong> paragraph with <em>italic</em> text and <code>code</code>.</p><ul ><li>List item with <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a></li><li>Another item</li></ul><blockquote><p>Blockquote with <strong>emphasis</strong></p></blockquote>',
    );
  });
  it("renders deeply nested unordered lists", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={"- Level 1\n  - Level 2\n    - Level 3\n      - Level 4"}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<ul ><li>Level 1<ul ><li>Level 2<ul ><li>Level 3<ul ><li>Level 4</li></ul></li></ul></li></ul></li></ul>",
    );
  });
  it("renders mixed nested lists (ordered and unordered)", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "1. First ordered item\n   - Nested unordered item\n   - Another nested item\n2. Second ordered item\n   1. Nested ordered item\n   2. Another nested ordered item"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<ol ><li>First ordered item<ul ><li>Nested unordered item</li><li>Another nested item</li></ul></li><li>Second ordered item<ol ><li>Nested ordered item</li><li>Another nested ordered item</li></ol></li></ol>",
    );
  });
  it("renders lists with multiple paragraphs in items", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "1. First item with multiple paragraphs.\n\n   This is the second paragraph of the first item.\n\n2. Second item with code:\n\n   ```javascript\n   console.log('Hello from list');\n   ```"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<ol ><li><p>First item with multiple paragraphs.</p><p>This is the second paragraph of the first item.</p></li><li><p>Second item with code:</p><pre><code>console.log('Hello from list');</code></pre></li></ol>",
    );
  });
  it("renders bold within italic", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"*This is italic with **bold** inside*"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><em>This is italic with <strong>bold</strong> inside</em></p>",
    );
  });
  it("renders italic within bold", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"**This is bold with *italic* inside**"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><strong>This is bold with <em>italic</em> inside</strong></p>",
    );
  });
  it("renders links with emphasis", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "[**Bold link**](https://example.com) and [*italic link*](https://test.com)"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<p><a href="https://example.com" target="_blank" rel="noopener noreferrer"><strong>Bold link</strong></a> and <a href="https://test.com" target="_blank" rel="noopener noreferrer"><em>italic link</em></a></p>',
    );
  });
  it("renders images within links", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"[![Alt text](image.jpg)](https://example.com)"} />
    ));
    expect(asFragment()).toRenderEqual(
      '<p><a href="https://example.com" target="_blank" rel="noopener noreferrer"><img src="image.jpg" alt="Alt text"></a></p>',
    );
  });
  it("renders links in lists", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "- [Link 1](https://example.com)\n- Visit [Google](https://google.com) for search\n- Multiple [links](https://a.com) in [one](https://b.com) item"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<ul ><li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Link 1</a></li><li>Visit <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a> for search</li><li>Multiple <a href="https://a.com" target="_blank" rel="noopener noreferrer">links</a> in <a href="https://b.com" target="_blank" rel="noopener noreferrer">one</a> item</li></ul>',
    );
  });
  it("renders code within links", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={"[Check out `console.log()`](https://developer.mozilla.org)"}
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<p><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Check out <code>console.log()</code></a></p>',
    );
  });
  it("renders inline code with emphasis markers that should not be processed", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"`const **bold** = 'not bold';`"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><code>const **bold** = 'not bold';</code></p>",
    );
  });
  it("renders code blocks in lists", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n2. Run the application:\n   ```javascript\n   npm start\n   ```"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<ol ><li>Install dependencies:<pre><code>npm install</code></pre></li><li>Run the application:<pre><code>npm start</code></pre></li></ol>",
    );
  });
  it("renders code blocks in nested lists", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "1. Install dependencies:\n   ```bash\n   npm install\n   ```\n\n   1. Run the application:\n      ```javascript\n      npm start\n      ```"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<ol ><li><p>Install dependencies:</p><pre><code>npm install</code></pre><ol ><li>Run the application:<pre><code>npm start</code></pre></li></ol></li></ol>",
    );
  });
  it("renders code blocks in blockquotes", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          '> Here\'s an example:\n> \n> ```javascript\n> function hello() {\n>   return "world";\n> }\n> ```'
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<blockquote><p>Here\'s an example:</p><pre><code>function hello() {\n  return "world";\n}</code></pre></blockquote>',
    );
  });
  it("renders complex document with all features", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          '# Main Title\n\nThis is a **complex document** with *various* elements.\n\n## Features\n\n1. **Lists** with nested items:\n   - Unordered nested list\n   - Another item with `inline code`\n\n2. **Code blocks** with different languages:\n   ```javascript\n   function example() {\n     return "Hello World";\n   }\n   ```\n\n3. **Tables** with complex content\n\n## Quotes and More\n\n> This is a blockquote with **emphasis** and a [link](https://test.com).\n> \n> > Nested quote with `code`\n\n---\n\n### Final Notes\n\nCheck out this image: ![Example](test.jpg)\n\nAnd this autolink: <https://automatic.link>'
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<h1 >Main Title</h1><p>This is a <strong>complex document</strong> with <em>various</em> elements.</p><h2 >Features</h2><ol ><li><strong>Lists</strong> with nested items:<ul ><li>Unordered nested list</li><li>Another item with <code>inline code</code></li></ul></li><li><strong>Code blocks</strong> with different languages:<pre><code>function example() {\n  return "Hello World";\n}</code></pre></li><li><strong>Tables</strong> with complex content</li></ol><h2 >Quotes and More</h2><blockquote><p>This is a blockquote with <strong>emphasis</strong> and a <a href="https://test.com" target="_blank" rel="noopener noreferrer">link</a>.</p><blockquote><p>Nested quote with <code>code</code></p></blockquote></blockquote><hr><h3 >Final Notes</h3><p>Check out this image: <img src="test.jpg" alt="Example"></p><p>And this autolink: <a href="https://automatic.link" target="_blank" rel="noopener noreferrer">https://automatic.link</a></p>',
    );
  });
  it("renders edge case with consecutive emphasis", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "This has **bold** and **more bold** and *italic* and *more italic* text."
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<p>This has <strong>bold</strong> and <strong>more bold</strong> and <em>italic</em> and <em>more italic</em> text.</p>",
    );
  });
  it("renders emphasis across line breaks", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={"This is **bold text that\ncontinues on the next line**"}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<p>This is <strong>bold text that\ncontinues on the next line</strong></p>",
    );
  });
  it("renders mixed list types in complex document", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          '## Mixed Lists\n\n1. Ordered item one\n   - Nested unordered\n   - Another nested\n     1. Deep nested ordered\n     2. Another deep ordered\n\n2. Ordered item two\n   > With a blockquote\n   > \n   > And **emphasis**\n\n3. Ordered item three with code:\n   ```python\n   print("Hello from Python")\n   ```'
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<h2 >Mixed Lists</h2><ol ><li>Ordered item one<ul ><li>Nested unordered</li><li>Another nested<ol ><li>Deep nested ordered</li><li>Another deep ordered</li></ol></li></ul></li><li>Ordered item two<blockquote><p>With a blockquote</p><p>And <strong>emphasis</strong></p></blockquote></li><li>Ordered item three with code:<pre><code>print("Hello from Python")</code></pre></li></ol>',
    );
  });
  it("handles unbalanced emphasis markers", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"This has **unbalanced bold and *mixed emphasis**"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p>This has *<em>unbalanced bold and <em>mixed emphasis</em></em></p>",
    );
  });
  it("handles empty code blocks", () => {
    const { asFragment } = render(() => <Markdown markdown={"```\n```"} />);
    expect(asFragment()).toRenderEqual("<pre><code></code></pre>");
  });
  it("handles code blocks without closing", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"```javascript\nconst x = 1;"} />
    ));
    expect(asFragment()).toRenderEqual("<pre><code>const x = 1;</code></pre>");
  });
  it("handles consecutive same emphasis types correctly", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"**This is** nested **bold**"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><strong>This is</strong> nested <strong>bold</strong></p>",
    );
  });
  it("handles consecutive italic emphasis correctly", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"*This is* nested *italic*"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><em>This is</em> nested <em>italic</em></p>",
    );
  });
  it("handles triple asterisk emphasis correctly", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"***This is*** nested ***bold italic***"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><em><strong>This is</strong></em> nested <em><strong>bold italic</strong></em></p>",
    );
  });
  it("handles proper separated emphasis correctly", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"**this** is **bold**"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><strong>this</strong> is <strong>bold</strong></p>",
    );
  });
  it("handles links without URLs", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"[Link text]()"} />
    ));
    expect(asFragment()).toRenderEqual(
      '<p><a href="" target="_blank" rel="noopener noreferrer">Link text</a></p>',
    );
  });
  it("handles images without src", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"![Alt text]()"} />
    ));
    expect(asFragment()).toRenderEqual('<p><img src="" alt="Alt text"></p>');
  });
  it("renders task lists with checkboxes", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "- [x] Completed task\n- [ ] Incomplete task\n- [x] Another completed task"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<ul ><li>[x] Completed task</li><li>[ ] Incomplete task</li><li>[x] Another completed task</li></ul>",
    );
  });
  it("renders nested task lists", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "- [x] Main task\n  - [x] Subtask 1\n  - [ ] Subtask 2\n    - [x] Sub-subtask"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<ul ><li>[x] Main task<ul ><li>[x] Subtask 1</li><li>[ ] Subtask 2<ul ><li>[x] Sub-subtask</li></ul></li></ul></li></ul>",
    );
  });
  it("handles large documents efficiently", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "## Section 1\n\nThis is paragraph 1 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 2\n\nThis is paragraph 2 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 3\n\nThis is paragraph 3 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 4\n\nThis is paragraph 4 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 5\n\nThis is paragraph 5 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 6\n\nThis is paragraph 6 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 7\n\nThis is paragraph 7 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 8\n\nThis is paragraph 8 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 9\n\nThis is paragraph 9 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 10\n\nThis is paragraph 10 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 11\n\nThis is paragraph 11 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 12\n\nThis is paragraph 12 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 13\n\nThis is paragraph 13 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 14\n\nThis is paragraph 14 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 15\n\nThis is paragraph 15 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 16\n\nThis is paragraph 16 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 17\n\nThis is paragraph 17 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 18\n\nThis is paragraph 18 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 19\n\nThis is paragraph 19 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 20\n\nThis is paragraph 20 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 21\n\nThis is paragraph 21 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 22\n\nThis is paragraph 22 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 23\n\nThis is paragraph 23 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 24\n\nThis is paragraph 24 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 25\n\nThis is paragraph 25 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 26\n\nThis is paragraph 26 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 27\n\nThis is paragraph 27 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 28\n\nThis is paragraph 28 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 29\n\nThis is paragraph 29 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 30\n\nThis is paragraph 30 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 31\n\nThis is paragraph 31 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 32\n\nThis is paragraph 32 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 33\n\nThis is paragraph 33 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 34\n\nThis is paragraph 34 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 35\n\nThis is paragraph 35 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 36\n\nThis is paragraph 36 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 37\n\nThis is paragraph 37 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 38\n\nThis is paragraph 38 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 39\n\nThis is paragraph 39 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 40\n\nThis is paragraph 40 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 41\n\nThis is paragraph 41 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 42\n\nThis is paragraph 42 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 43\n\nThis is paragraph 43 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 44\n\nThis is paragraph 44 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 45\n\nThis is paragraph 45 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 46\n\nThis is paragraph 46 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 47\n\nThis is paragraph 47 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 48\n\nThis is paragraph 48 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 49\n\nThis is paragraph 49 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 50\n\nThis is paragraph 50 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 51\n\nThis is paragraph 51 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 52\n\nThis is paragraph 52 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 53\n\nThis is paragraph 53 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 54\n\nThis is paragraph 54 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 55\n\nThis is paragraph 55 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 56\n\nThis is paragraph 56 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 57\n\nThis is paragraph 57 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 58\n\nThis is paragraph 58 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 59\n\nThis is paragraph 59 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 60\n\nThis is paragraph 60 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 61\n\nThis is paragraph 61 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 62\n\nThis is paragraph 62 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 63\n\nThis is paragraph 63 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 64\n\nThis is paragraph 64 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 65\n\nThis is paragraph 65 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 66\n\nThis is paragraph 66 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 67\n\nThis is paragraph 67 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 68\n\nThis is paragraph 68 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 69\n\nThis is paragraph 69 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 70\n\nThis is paragraph 70 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 71\n\nThis is paragraph 71 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 72\n\nThis is paragraph 72 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 73\n\nThis is paragraph 73 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 74\n\nThis is paragraph 74 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 75\n\nThis is paragraph 75 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 76\n\nThis is paragraph 76 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 77\n\nThis is paragraph 77 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 78\n\nThis is paragraph 78 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 79\n\nThis is paragraph 79 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 80\n\nThis is paragraph 80 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 81\n\nThis is paragraph 81 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 82\n\nThis is paragraph 82 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 83\n\nThis is paragraph 83 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 84\n\nThis is paragraph 84 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 85\n\nThis is paragraph 85 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 86\n\nThis is paragraph 86 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 87\n\nThis is paragraph 87 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 88\n\nThis is paragraph 88 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 89\n\nThis is paragraph 89 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 90\n\nThis is paragraph 90 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 91\n\nThis is paragraph 91 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 92\n\nThis is paragraph 92 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 93\n\nThis is paragraph 93 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 94\n\nThis is paragraph 94 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 95\n\nThis is paragraph 95 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 96\n\nThis is paragraph 96 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 97\n\nThis is paragraph 97 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 98\n\nThis is paragraph 98 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 99\n\nThis is paragraph 99 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n## Section 100\n\nThis is paragraph 100 with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n"
        }
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<h2 >Section 1</h2><p>This is paragraph 1 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 2</h2><p>This is paragraph 2 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 3</h2><p>This is paragraph 3 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 4</h2><p>This is paragraph 4 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 5</h2><p>This is paragraph 5 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 6</h2><p>This is paragraph 6 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 7</h2><p>This is paragraph 7 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 8</h2><p>This is paragraph 8 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 9</h2><p>This is paragraph 9 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 10</h2><p>This is paragraph 10 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 11</h2><p>This is paragraph 11 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 12</h2><p>This is paragraph 12 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 13</h2><p>This is paragraph 13 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 14</h2><p>This is paragraph 14 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 15</h2><p>This is paragraph 15 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 16</h2><p>This is paragraph 16 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 17</h2><p>This is paragraph 17 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 18</h2><p>This is paragraph 18 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 19</h2><p>This is paragraph 19 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 20</h2><p>This is paragraph 20 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 21</h2><p>This is paragraph 21 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 22</h2><p>This is paragraph 22 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 23</h2><p>This is paragraph 23 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 24</h2><p>This is paragraph 24 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 25</h2><p>This is paragraph 25 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 26</h2><p>This is paragraph 26 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 27</h2><p>This is paragraph 27 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 28</h2><p>This is paragraph 28 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 29</h2><p>This is paragraph 29 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 30</h2><p>This is paragraph 30 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 31</h2><p>This is paragraph 31 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 32</h2><p>This is paragraph 32 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 33</h2><p>This is paragraph 33 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 34</h2><p>This is paragraph 34 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 35</h2><p>This is paragraph 35 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 36</h2><p>This is paragraph 36 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 37</h2><p>This is paragraph 37 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 38</h2><p>This is paragraph 38 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 39</h2><p>This is paragraph 39 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 40</h2><p>This is paragraph 40 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 41</h2><p>This is paragraph 41 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 42</h2><p>This is paragraph 42 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 43</h2><p>This is paragraph 43 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 44</h2><p>This is paragraph 44 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 45</h2><p>This is paragraph 45 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 46</h2><p>This is paragraph 46 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 47</h2><p>This is paragraph 47 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 48</h2><p>This is paragraph 48 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 49</h2><p>This is paragraph 49 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 50</h2><p>This is paragraph 50 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 51</h2><p>This is paragraph 51 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 52</h2><p>This is paragraph 52 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 53</h2><p>This is paragraph 53 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 54</h2><p>This is paragraph 54 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 55</h2><p>This is paragraph 55 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 56</h2><p>This is paragraph 56 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 57</h2><p>This is paragraph 57 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 58</h2><p>This is paragraph 58 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 59</h2><p>This is paragraph 59 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 60</h2><p>This is paragraph 60 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 61</h2><p>This is paragraph 61 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 62</h2><p>This is paragraph 62 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 63</h2><p>This is paragraph 63 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 64</h2><p>This is paragraph 64 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 65</h2><p>This is paragraph 65 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 66</h2><p>This is paragraph 66 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 67</h2><p>This is paragraph 67 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 68</h2><p>This is paragraph 68 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 69</h2><p>This is paragraph 69 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 70</h2><p>This is paragraph 70 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 71</h2><p>This is paragraph 71 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 72</h2><p>This is paragraph 72 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 73</h2><p>This is paragraph 73 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 74</h2><p>This is paragraph 74 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 75</h2><p>This is paragraph 75 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 76</h2><p>This is paragraph 76 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 77</h2><p>This is paragraph 77 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 78</h2><p>This is paragraph 78 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 79</h2><p>This is paragraph 79 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 80</h2><p>This is paragraph 80 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 81</h2><p>This is paragraph 81 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 82</h2><p>This is paragraph 82 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 83</h2><p>This is paragraph 83 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 84</h2><p>This is paragraph 84 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 85</h2><p>This is paragraph 85 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 86</h2><p>This is paragraph 86 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 87</h2><p>This is paragraph 87 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 88</h2><p>This is paragraph 88 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 89</h2><p>This is paragraph 89 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 90</h2><p>This is paragraph 90 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 91</h2><p>This is paragraph 91 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 92</h2><p>This is paragraph 92 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 93</h2><p>This is paragraph 93 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 94</h2><p>This is paragraph 94 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 95</h2><p>This is paragraph 95 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 96</h2><p>This is paragraph 96 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 97</h2><p>This is paragraph 97 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 98</h2><p>This is paragraph 98 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 99</h2><p>This is paragraph 99 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><h2 >Section 100</h2><p>This is paragraph 100 with <strong>bold</strong> and <em>italic</em> text.</p><ul ><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
    );
  });
  it("allows custom paragraph renderer", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"Test paragraph"} />
    ));
    expect(asFragment()).toRenderEqual("<p>Test paragraph</p>");
  });
  it("falls back to default renderer when custom not provided", () => {
    const { asFragment } = render(() => <Markdown markdown={"# Header"} />);
    expect(asFragment()).toRenderEqual("<h1 >Header</h1>");
  });
  it("allows custom emphasis renderer", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"This is *custom italic* text"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p>This is <em>custom italic</em> text</p>",
    );
  });
  it("allows custom link renderer with additional attributes", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"[Original Link](https://example.com)"} />
    ));
    expect(asFragment()).toRenderEqual(
      '<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Original Link</a></p>',
    );
  });
  it("allows chaining of custom renderers", () => {
    const { asFragment } = render(() => (
      <Markdown markdown={"**Bold** and *italic* text"} />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><strong>Bold</strong> and <em>italic</em> text</p>",
    );
  });
  it("renders tables with emphasis and links", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "| Name | Description | Link |\n|------|-------------|------|\n| **Bold Name** | *Italic description* | [Visit](https://example.com) |\n| ~~Deprecated~~ | `code example` | [GitHub](https://github.com) |"
        }
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<table><thead><tr><th >Name</th><th >Description</th><th >Link</th></tr></thead><tbody><tr><td ><strong>Bold Name</strong></td><td ><em>Italic description</em></td><td ><a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a></td></tr><tr><td ><del>Deprecated</del></td><td ><code>code example</code></td><td ><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></td></tr></tbody></table>',
    );
  });
  it("renders tables with images", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "| Icon | Name | Description |\n|------|------|-------------|\n| ![Icon](icon.png) | Project | Main project |\n| ![Logo](logo.svg) | Brand | Company brand |"
        }
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      '<table><thead><tr><th >Icon</th><th >Name</th><th >Description</th></tr></thead><tbody><tr><td ><img src="icon.png" alt="Icon"></td><td >Project</td><td >Main project</td></tr><tr><td ><img src="logo.svg" alt="Logo"></td><td >Brand</td><td >Company brand</td></tr></tbody></table>',
    );
  });
  it("handles empty table cells", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "| Col1 | Col2 | Col3 |\n|------|------|------|\n| Data || More |\n||Data ||"
        }
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<table><thead><tr><th >Col1</th><th >Col2</th><th >Col3</th></tr></thead><tbody><tr><td >Data</td><td ></td><td >More</td></tr><tr><td ></td><td >Data</td><td ></td></tr></tbody></table>",
    );
  });
  it("renders simple table", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |"
        }
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<table><thead><tr><th >Name</th><th >Age</th></tr></thead><tbody><tr><td >John</td><td >30</td></tr><tr><td >Jane</td><td >25</td></tr></tbody></table>",
    );
  });
  it("renders table with alignment", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "| Left | Center | Right |\n|:-----|:------:|------:|\n| L1   |   C1   |    R1 |"
        }
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<table><thead><tr><th >Left</th><th >Center</th><th >Right</th></tr></thead><tbody><tr><td >L1</td><td >C1</td><td >R1</td></tr></tbody></table>",
    );
  });
  it("renders standalone table correctly", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |"
        }
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<table><thead><tr><th >Name</th><th >Age</th></tr></thead><tbody><tr><td >John</td><td >30</td></tr><tr><td >Jane</td><td >25</td></tr></tbody></table>",
    );
  });
  it("renders strikethrough text", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={"~~strikethrough~~"}
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual("<p><del>strikethrough</del></p>");
  });
  it("renders strikethrough within paragraph", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={"This is ~~deleted~~ text."}
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<p>This is <del>deleted</del> text.</p>",
    );
  });
  it("renders strikethrough with nested emphasis", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={"~~This is deleted with **bold** and *italic* text~~"}
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><del>This is deleted with <strong>bold</strong> and <em>italic</em> text</del></p>",
    );
  });
  it("renders complex nested emphasis combinations", () => {
    const { asFragment } = render(() => (
      <Markdown
        markdown={
          "***This is bold and italic*** with ~~strikethrough **and bold**~~"
        }
        extensions={[extensions["gfm"]()]}
        mdastExtensions={[mdastExtensions["gfmFromMarkdown"]()]}
      />
    ));
    expect(asFragment()).toRenderEqual(
      "<p><em><strong>This is bold and italic</strong></em> with <del>strikethrough <strong>and bold</strong></del></p>",
    );
  });
});
