import { Component, createMemo, createSignal, For, Show } from 'solid-js'
import { render } from 'solid-js/web'
import { MDRenderer } from '../src'
import { spec } from '../test/spec'

interface TestResult {
  title: string
  markdown: string
  actualOutput: string
  expectedOutput: string
  matches: boolean
}

export const AutoTestViewer: Component = () => {
  const [selectedCategory, setSelectedCategory] = createSignal<string | null>(null)
  const [showOnlyFailures, setShowOnlyFailures] = createSignal(false)

  // Generate test results
  const testResults = createMemo<TestResult[]>(() => {
    const results: TestResult[] = []

    Object.entries(spec).forEach(([title, testCase]) => {
      try {
        // Get actual output by rendering the component
        const tempDiv = document.createElement('div')
        document.body.appendChild(tempDiv)

        let actualOutput: string
        try {
          // Render the component the same way as in the tests
          render(() => MDRenderer({ content: testCase.markdown }), tempDiv)
          actualOutput = tempDiv.innerHTML
        } catch (e) {
          actualOutput = `Render Error: ${e}`
        } finally {
          if (document.body.contains(tempDiv)) {
            document.body.removeChild(tempDiv)
          }
        }

        // Get expected output from testSpec
        const expectedOutput = testCase.html

        // Compare actual vs expected
        const matches = actualOutput === expectedOutput

        results.push({
          title,
          markdown: testCase.markdown,
          actualOutput,
          expectedOutput,
          matches,
        })
      } catch (error) {
        results.push({
          title,
          markdown: testCase.markdown,
          actualOutput: `Error: ${error}`,
          expectedOutput: testCase.html,
          matches: false,
        })
      }
    })

    return results
  })

  const filteredResults = createMemo(() => {
    let results = testResults()

    if (selectedCategory()) {
      results = results.filter(r =>
        r.title.toLowerCase().includes(selectedCategory()!.toLowerCase()),
      )
    }

    if (showOnlyFailures()) {
      results = results.filter(r => !r.matches)
    }

    return results
  })

  const categories = createMemo(() => {
    const cats = new Set<string>()
    testResults().forEach(r => {
      // Extract category keywords from titles
      if (r.title.includes('heading') || r.title.includes('header')) cats.add('Headers')
      else if (r.title.includes('paragraph')) cats.add('Paragraphs')
      else if (
        r.title.includes('italic') ||
        r.title.includes('bold') ||
        r.title.includes('emphasis')
      )
        cats.add('Emphasis')
      else if (r.title.includes('strikethrough')) cats.add('Strikethrough')
      else if (r.title.includes('list')) cats.add('Lists')
      else if (r.title.includes('code')) cats.add('Code')
      else if (r.title.includes('link') || r.title.includes('image')) cats.add('Links/Images')
      else if (r.title.includes('blockquote')) cats.add('Blockquotes')
      else if (r.title.includes('table')) cats.add('Tables')
      else cats.add('Other')
    })
    return Array.from(cats)
  })

  const stats = createMemo(() => {
    const total = testResults().length
    const passed = testResults().filter(r => r.matches).length
    const failed = total - passed
    return { total, passed, failed }
  })

  return (
    <div
      style={{
        padding: '20px',
        'font-family': 'system-ui, -apple-system, sans-serif',
        'max-width': '1400px',
        margin: '0 auto',
      }}
    >
      <h1>Solid Lezer Markdown Test Viewer</h1>

      <div
        style={{
          'margin-bottom': '20px',
          padding: '16px',
          background: '#f5f5f5',
          'border-radius': '8px',
        }}
      >
        <h3 style={{ margin: '0 0 10px 0' }}>Test Statistics</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Total: {stats().total}</span>
          <span style={{ color: 'green' }}>Passed: {stats().passed}</span>
          <span style={{ color: 'red' }}>Failed: {stats().failed}</span>
        </div>
      </div>

      <div
        style={{
          'margin-bottom': '20px',
          display: 'flex',
          gap: '10px',
          'flex-wrap': 'wrap',
          'align-items': 'center',
        }}
      >
        <button
          onClick={() => setSelectedCategory(null)}
          style={{
            padding: '8px 16px',
            border: '1px solid #ccc',
            'border-radius': '4px',
            background: selectedCategory() === null ? '#007acc' : 'white',
            color: selectedCategory() === null ? 'white' : 'black',
            cursor: 'pointer',
          }}
        >
          All Categories
        </button>

        <For each={categories()}>
          {category => (
            <button
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '8px 16px',
                border: '1px solid #ccc',
                'border-radius': '4px',
                background: selectedCategory() === category ? '#007acc' : 'white',
                color: selectedCategory() === category ? 'white' : 'black',
                cursor: 'pointer',
                'font-size': '12px',
              }}
            >
              {category.replace('MDRenderer > ', '')}
            </button>
          )}
        </For>

        <label
          style={{ 'margin-left': '20px', display: 'flex', 'align-items': 'center', gap: '5px' }}
        >
          <input
            type="checkbox"
            checked={showOnlyFailures()}
            onChange={e => setShowOnlyFailures(e.target.checked)}
          />
          Show only failures
        </label>
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        <For each={filteredResults()}>
          {result => (
            <div
              style={{
                border: result.matches ? '1px solid #ddd' : '2px solid #ff6b6b',
                'border-radius': '8px',
                overflow: 'hidden',
                'box-shadow': '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <div
                style={{
                  background: result.matches ? '#e8f5e8' : '#ffe6e6',
                  padding: '12px 16px',
                  'border-bottom': '1px solid #ddd',
                  display: 'flex',
                  'justify-content': 'space-between',
                  'align-items': 'center',
                }}
              >
                <div>
                  <div style={{ 'font-weight': 'bold' }}>{result.case.name}</div>
                  <div style={{ 'font-size': '12px', color: '#666' }}>
                    {result.category.replace('MDRenderer > ', '')}
                  </div>
                </div>
                <div
                  style={{
                    padding: '4px 12px',
                    'border-radius': '16px',
                    background: result.matches ? '#4caf50' : '#f44336',
                    color: 'white',
                    'font-weight': 'bold',
                    'font-size': '12px',
                  }}
                >
                  {result.matches ? 'PASS' : 'FAIL'}
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  'grid-template-columns': '1fr 2fr 2fr 1fr',
                  'min-height': '200px',
                }}
              >
                {/* A: Markdown Source */}
                <div style={{ padding: '16px', 'border-right': '1px solid #eee' }}>
                  <div
                    style={{
                      'margin-bottom': '8px',
                      'font-weight': '600',
                      'font-size': '14px',
                      color: '#666',
                    }}
                  >
                    A: Markdown Source
                  </div>
                  <pre
                    style={{
                      margin: '0',
                      padding: '8px',
                      background: '#f8f8f8',
                      'border-radius': '4px',
                      'font-size': '12px',
                      'white-space': 'pre-wrap',
                      'word-wrap': 'break-word',
                      border: '1px solid #e0e0e0',
                      'max-height': '160px',
                      overflow: 'auto',
                    }}
                  >
                    {result.markdown}
                  </pre>
                </div>

                {/* B: Actual Result */}
                <div style={{ padding: '16px', 'border-right': '1px solid #eee' }}>
                  <div
                    style={{
                      'margin-bottom': '8px',
                      'font-weight': '600',
                      'font-size': '14px',
                      color: '#666',
                    }}
                  >
                    B: Actual Result
                  </div>

                  {/* B1: Raw HTML String */}
                  <div style={{ 'margin-bottom': '8px' }}>
                    <div
                      style={{
                        'font-size': '12px',
                        'font-weight': '600',
                        color: '#888',
                        'margin-bottom': '4px',
                      }}
                    >
                      Raw HTML:
                    </div>
                    <pre
                      style={{
                        margin: '0',
                        padding: '6px',
                        background: '#fff8dc',
                        'border-radius': '3px',
                        'font-size': '10px',
                        'word-wrap': 'break-word',
                        border: '1px solid #e0e0e0',
                        'max-height': '60px',
                        overflow: 'auto',
                      }}
                    >
                      {result.actualOutput}
                    </pre>
                  </div>

                  {/* B2: Rendered HTML */}
                  <div>
                    <div
                      style={{
                        'font-size': '12px',
                        'font-weight': '600',
                        color: '#888',
                        'margin-bottom': '4px',
                      }}
                    >
                      Rendered:
                    </div>
                    <div
                      style={{
                        padding: '8px',
                        background: '#f0fff0',
                        'border-radius': '4px',
                        'min-height': '40px',
                        border: '1px solid #e0e0e0',
                        'max-height': '80px',
                        overflow: 'auto',
                      }}
                    >
                      <MDRenderer content={result.markdown} />
                    </div>
                  </div>
                </div>

                {/* C: Expected (Snapshot) */}
                <div style={{ padding: '16px', 'border-right': '1px solid #eee' }}>
                  <div
                    style={{
                      'margin-bottom': '8px',
                      'font-weight': '600',
                      'font-size': '14px',
                      color: '#666',
                    }}
                  >
                    C: Expected (Snapshot)
                  </div>

                  {/* C1: Raw HTML String */}
                  <div style={{ 'margin-bottom': '8px' }}>
                    <div
                      style={{
                        'font-size': '12px',
                        'font-weight': '600',
                        color: '#888',
                        'margin-bottom': '4px',
                      }}
                    >
                      Raw HTML:
                    </div>
                    <pre
                      style={{
                        margin: '0',
                        padding: '6px',
                        background: '#f0f0ff',
                        'border-radius': '3px',
                        'font-size': '10px',
                        'word-wrap': 'break-word',
                        border: '1px solid #e0e0e0',
                        'max-height': '60px',
                        overflow: 'auto',
                      }}
                    >
                      {result.expectedOutput}
                    </pre>
                  </div>

                  {/* C2: Rendered HTML */}
                  <div>
                    <div
                      style={{
                        'font-size': '12px',
                        'font-weight': '600',
                        color: '#888',
                        'margin-bottom': '4px',
                      }}
                    >
                      Rendered:
                    </div>
                    <div
                      style={{
                        padding: '8px',
                        background: '#fff0f5',
                        'border-radius': '4px',
                        'min-height': '40px',
                        border: '1px solid #e0e0e0',
                        'max-height': '80px',
                        overflow: 'auto',
                      }}
                      innerHTML={
                        result.expectedOutput !== 'No snapshot found' ? result.expectedOutput : ''
                      }
                    ></div>
                    <Show when={result.expectedOutput === 'No snapshot found'}>
                      <div
                        style={{ color: '#999', 'font-style': 'italic', 'text-align': 'center' }}
                      >
                        No snapshot found
                      </div>
                    </Show>
                  </div>
                </div>

                {/* D: Comparison */}
                <div style={{ padding: '16px' }}>
                  <div
                    style={{
                      'margin-bottom': '8px',
                      'font-weight': '600',
                      'font-size': '14px',
                      color: '#666',
                    }}
                  >
                    D: Comparison
                  </div>
                  <div
                    style={{
                      padding: '8px',
                      background: result.matches ? '#e8f5e8' : '#ffe6e6',
                      'border-radius': '4px',
                      'min-height': '40px',
                      border: '1px solid #e0e0e0',
                      'text-align': 'center',
                      display: 'flex',
                      'align-items': 'center',
                      'justify-content': 'center',
                      'flex-direction': 'column',
                      gap: '8px',
                    }}
                  >
                    <Show
                      when={result.matches}
                      fallback={
                        <div style={{ color: '#d32f2f' }}>
                          <div style={{ 'font-weight': 'bold', 'margin-bottom': '4px' }}>
                            ❌ MISMATCH
                          </div>
                          <div style={{ 'font-size': '12px' }}>HTML differs from snapshot</div>
                        </div>
                      }
                    >
                      <div style={{ color: '#2e7d32' }}>
                        <div style={{ 'font-weight': 'bold', 'margin-bottom': '4px' }}>
                          ✅ MATCH
                        </div>
                        <div style={{ 'font-size': '12px' }}>HTML matches snapshot</div>
                      </div>
                    </Show>

                    <Show when={result.expectedOutput !== 'No snapshot found'}>
                      <div style={{ 'font-size': '10px', color: '#666' }}>
                        Length: {result.actualOutput.length} vs {result.expectedOutput.length}
                      </div>
                    </Show>
                  </div>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>

      <Show when={filteredResults().length === 0}>
        <div
          style={{
            padding: '40px',
            'text-align': 'center',
            color: '#666',
            background: '#f5f5f5',
            'border-radius': '8px',
          }}
        >
          No tests match the current filters
        </div>
      </Show>
    </div>
  )
}
