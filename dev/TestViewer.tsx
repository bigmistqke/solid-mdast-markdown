import { useSearchParams } from '@solidjs/router'
import { createMemo, createSelector, createSignal, For, onMount, Show } from 'solid-js'
import { createStore } from 'solid-js/store'
import { MDRenderer } from '../src'
import { compareNodes } from '../src/utils'
import spec from '../test/spec'
import styles from './TestViewer.module.css'

interface TestProps {
  title: string
  input: string
  // currentOutput: string
  snapshot: string
  // success: boolean
  // error?: string
  onResult(result: { success: boolean; error?: string }): void
}

const parser = new DOMParser()

function Test(props: TestProps) {
  let element: HTMLDivElement = null!

  const [result, setResult] = createSignal<{ success: boolean; error?: string }>()
  const [raw, setRaw] = createSignal<string>()

  onMount(() => {
    console.log(element.innerHTML)
    setRaw(element.innerHTML)

    try {
      // Compare actual vs expected
      compareNodes(
        parser.parseFromString(element.innerHTML, 'text/html').querySelector('body')!,
        parser.parseFromString(props.snapshot, 'text/html').querySelector('body')!,
      )

      setResult({ success: true })
    } catch (error) {
      console.error('Error', error)
      setResult({ success: false, error: error instanceof Error ? error.message : `${error}` })
    }
  })

  return (
    <div
      class={styles.result}
      style={{
        border: result()?.success ? '1px solid #ddd' : '2px solid #ff6b6b',
      }}
    >
      <div
        style={{
          background: result()?.success ? '#e8f5e8' : '#ffe6e6',
          padding: '12px 16px',
          'border-bottom': '1px solid #ddd',
          display: 'flex',
          'justify-content': 'space-between',
          'align-items': 'center',
        }}
      >
        <div>
          <div style={{ 'font-weight': 'bold' }}>{props.title}</div>
        </div>
        <div
          style={{
            padding: '4px 12px',
            'border-radius': '16px',
            background: result()?.success ? '#4caf50' : '#f44336',
            color: 'white',
            'font-weight': 'bold',
            'font-size': '12px',
          }}
        >
          {result()?.success ? 'PASS' : 'FAIL'}
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
          <div class={styles.subtitle}>A: Markdown Source</div>
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
            {props.input}
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
          <div class={styles.subtitle}>B: Actual Result</div>

          {/* B1: Raw HTML String */}
          <div style={{ 'margin-bottom': '8px' }}>
            <div class={styles.subtitle}>Raw HTML:</div>
            <pre
              style={{
                margin: '0',
                padding: '6px',
                'border-radius': '3px',
                'font-size': '10px',
                'word-wrap': 'break-word',
                border: '1px solid #e0e0e0',
                'max-height': '60px',
                overflow: 'auto',
              }}
            >
              {raw()}
            </pre>
          </div>

          {/* B2: Rendered HTML */}
          <div>
            <div class={styles.subtitle}>Rendered:</div>
            <div ref={element!} class={styles.container}>
              <MDRenderer content={props.input} />
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
          <div class={styles.subtitle}>C: Expected (Snapshot)</div>

          {/* C1: Raw HTML String */}
          <div style={{ 'margin-bottom': '8px' }}>
            <div class={styles.subtitle}>Raw HTML:</div>
            <pre
              style={{
                margin: '0',
                padding: '6px',
                'border-radius': '3px',
                'font-size': '10px',
                'word-wrap': 'break-word',
                border: '1px solid #e0e0e0',
                'max-height': '60px',
                overflow: 'auto',
              }}
            >
              {props.snapshot}
            </pre>
          </div>

          {/* C2: Rendered HTML */}
          <div>
            <div class={styles.subtitle}>Rendered:</div>
            <div
              class={styles.container}
              innerHTML={props.snapshot !== 'No snapshot found' ? props.snapshot : ''}
            ></div>
            <Show when={props.snapshot === 'No snapshot found'}>
              <div style={{ color: '#999', 'font-style': 'italic', 'text-align': 'center' }}>
                No snapshot found
              </div>
            </Show>
          </div>
        </div>

        {/* D: Comparison */}
        <div style={{ padding: '16px', 'overflow-x': 'hidden' }}>
          <div class={styles.subtitle}>D: Comparison</div>
          <div
            style={{
              padding: '8px',
              background: result()?.success ? '#e8f5e8' : '#ffe6e6',
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
              when={result()?.success}
              fallback={
                <div style={{ color: '#d32f2f' }}>
                  <div style={{ 'font-weight': 'bold', 'margin-bottom': '4px' }}>❌ MISMATCH</div>
                  <div style={{ 'font-size': '12px' }}>{result()?.error ?? 'Oopsie'}</div>
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
  )
}

export function TestViewer() {
  const [searchParams] = useSearchParams()
  const [results, setResults] = createStore<Record<string, { success: boolean; error?: string }>>(
    {},
  )

  const stats = createMemo(() => {
    const values = Object.values(results)
    const total = values.length
    const passed = values.filter(r => r.success).length
    const failed = total - passed
    return { total, passed, failed }
  })

  const selected = createSelector(
    () => searchParams.t,
    (name: string, t) =>
      t === undefined ? true : Array.isArray(t) ? !!name.includes(t[0] ?? '') : name.includes(t),
  )

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
        <For each={Object.entries(spec)}>
          {([title, { input, snapshot }]) => {
            return (
              <Show when={selected(title)}>
                <Test
                  title={title}
                  input={input}
                  snapshot={snapshot}
                  onResult={result => setResults(title, result)}
                />
              </Show>
            )
          }}
        </For>
      </div>
    </div>
  )
}
