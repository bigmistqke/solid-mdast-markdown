import { render } from '@solidjs/testing-library'
import { createMemo, For, Show } from 'solid-js'
import { MDRenderer } from '../src'
import { compareElements } from '../src/utils'
import spec from '../test/spec'

interface TestResult {
  title: string
  markdown: string
  currentOutput: string
  snapshot: string
  success: boolean
  error?: string
}

const parser = new DOMParser()

function Test(props: { result: TestResult }) {
  return (
    <>
      <div
        style={{
          border: props.result.success ? '1px solid #ddd' : '2px solid #ff6b6b',
          'border-radius': '8px',
          'overflow-x': 'hidden',
          'box-shadow': '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            background: props.result.success ? '#e8f5e8' : '#ffe6e6',
            padding: '12px 16px',
            'border-bottom': '1px solid #ddd',
            display: 'flex',
            'justify-content': 'space-between',
            'align-items': 'center',
          }}
        >
          <div>
            <div style={{ 'font-weight': 'bold' }}>{props.result.title}</div>
          </div>
          <div
            style={{
              padding: '4px 12px',
              'border-radius': '16px',
              background: props.result.success ? '#4caf50' : '#f44336',
              color: 'white',
              'font-weight': 'bold',
              'font-size': '12px',
            }}
          >
            {props.result.success ? 'PASS' : 'FAIL'}
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
          <div
            style={{
              padding: '16px',
              'border-right': '1px solid #eee',
              'overflow-x': 'hidden',
            }}
          >
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
              {props.result.markdown}
            </pre>
          </div>

          {/* B: Actual Result */}
          <div
            style={{
              padding: '16px',
              'border-right': '1px solid #eee',
              'overflow-x': 'hidden',
            }}
          >
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
                {props.result.currentOutput}
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
                <MDRenderer content={props.result.markdown} />
              </div>
            </div>
          </div>

          {/* C: Expected (Snapshot) */}
          <div
            style={{
              padding: '16px',
              'border-right': '1px solid #eee',
              'overflow-x': 'hidden',
            }}
          >
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
                {props.result.snapshot}
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
                  props.result.snapshot !== 'No snapshot found' ? props.result.snapshot : ''
                }
              ></div>
              <Show when={props.result.snapshot === 'No snapshot found'}>
                <div style={{ color: '#999', 'font-style': 'italic', 'text-align': 'center' }}>
                  No snapshot found
                </div>
              </Show>
            </div>
          </div>

          {/* D: Comparison */}
          <div style={{ padding: '16px', 'overflow-x': 'hidden' }}>
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
                background: props.result.success ? '#e8f5e8' : '#ffe6e6',
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
                when={props.result.success}
                fallback={
                  <div style={{ color: '#d32f2f' }}>
                    <div style={{ 'font-weight': 'bold', 'margin-bottom': '4px' }}>❌ MISMATCH</div>
                    <div style={{ 'font-size': '12px' }}>{props.result.error ?? 'Oopsie'}</div>
                  </div>
                }
              >
                <div style={{ color: '#2e7d32' }}>
                  <div style={{ 'font-weight': 'bold', 'margin-bottom': '4px' }}>✅ MATCH</div>
                  <div style={{ 'font-size': '12px' }}>HTML matches snapshot</div>
                </div>
              </Show>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function TestViewer() {
  // Generate test results
  const testResults = createMemo<TestResult[]>(() => {
    return Object.entries(spec).map(([title, { markdown, html: snapshot }]) => {
      let currentOutput: string | undefined

      try {
        const container = document.createElement('div')
        // Render the component the same way as in the tests
        currentOutput = render(() => <MDRenderer content={markdown} />, {
          container,
        }).asFragment()

        // Compare actual vs expected
        compareElements(
          parser.parseFromString(currentOutput, 'text/html').querySelector('body')!,
          parser.parseFromString(snapshot, 'text/html').querySelector('body')!,
        )

        return {
          title,
          markdown,
          currentOutput,
          snapshot,
          success: true,
        }
      } catch (error) {
        return {
          title,
          markdown,
          currentOutput: currentOutput ?? '',
          snapshot,
          success: false,
          error: error instanceof Error ? error.message : `${error}`,
        }
      }
    })
  })

  const stats = createMemo(() => {
    const total = testResults().length
    const passed = testResults().filter(r => r.success).length
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

      <div style={{ display: 'grid', gap: '20px' }}>
        <For each={testResults()}>{result => <Test result={result} />}</For>
      </div>
    </div>
  )
}
