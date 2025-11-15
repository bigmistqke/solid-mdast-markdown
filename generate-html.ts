#!/usr/bin/env tsx

import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { MDRenderer } from './dist/index.mjs'
import { testSpec, type TestCase } from './test/testSpec.ts'
// Import render from solid-js/web for DOM rendering
import { renderToString } from 'solid-js/web'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('Generating HTML for all test cases...')

// Generate HTML for each test case
const updatedTestSpec: Record<string, TestCase> = {}
let successCount = 0
let errorCount = 0

for (const [testName, testCase] of Object.entries(testSpec)) {
  try {
    // Use DOM rendering approach since renderToString isn't working with our component
    const tempDiv = global.document.createElement('div')
    global.document.body.appendChild(tempDiv)

    const html = renderToString(() => MDRenderer({ content: testCase.markdown }))

    updatedTestSpec[testName] = {
      markdown: testCase.markdown,
      html: html,
    }
    console.log(`✓ Generated HTML for: ${testName}`)
    successCount++
  } catch (error) {
    console.error(`✗ Failed to generate HTML for ${testName}:`, (error as Error).message)
    updatedTestSpec[testName] = {
      markdown: testCase.markdown,
      html: `Error: ${(error as Error).message}`,
    }
    errorCount++
  }
}

// Generate the updated testSpec file
const newTestSpecContent = `// Test specifications - Source of truth for all markdown tests
// This file drives test generation and the test viewer

export interface TestCase {
  markdown: string
  html: string
}

export const testSpec: Record<string, TestCase> = {
${Object.entries(updatedTestSpec)
  .map(([testName, testCase]) => {
    const escapedMarkdown = testCase.markdown
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
    const escapedHtml = testCase.html
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
    return `  '${testName}': { markdown: '${escapedMarkdown}', html: '${escapedHtml}' }`
  })
  .join(',\n')}
}
`

// Write the updated file
const testSpecPath = join(__dirname, 'test', 'testSpec.ts')
writeFileSync(testSpecPath, newTestSpecContent)

console.log(`\n✅ Generated HTML for ${successCount} test cases`)
if (errorCount > 0) {
  console.log(`❌ Failed to generate HTML for ${errorCount} test cases`)
}
console.log(`📄 Updated ${testSpecPath}`)
