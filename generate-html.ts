#!/usr/bin/env tsx

import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { NoHydration, renderToString } from 'solid-js/web'
import { fileURLToPath } from 'url'
import { MDRenderer } from './dist/index.js'
import { spec, type TestCase } from './test/spec.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('Generating HTML for all test cases...')

// Generate HTML for each test case
const updatedTestSpec: Record<string, TestCase> = {}
let successCount = 0
let errorCount = 0

for (const [testName, testCase] of Object.entries(spec)) {
  try {
    const html = renderToString(() =>
      NoHydration({ children: MDRenderer({ content: testCase.markdown }) }),
    ).replaceAll('<!--!$-->', '')

    updatedTestSpec[testName] = {
      markdown: testCase.markdown,
      html: html,
    }
    console.log(`✓ Generated HTML for: ${testName}: ${html.includes('<!--!$-->')}`)
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

// Generate the updated spec file
const newTestSpecContent = `// Test specifications - Source of truth for all markdown tests
// This file drives test generation and the test viewer

export interface TestCase {
  markdown: string
  html: string
}

export const spec: Record<string, TestCase> = {
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

const specPath = join(__dirname, 'test', 'spec.ts')
writeFileSync(specPath, newTestSpecContent)

console.log(`\n✅ Generated HTML for ${successCount} test cases`)
if (errorCount > 0) {
  console.log(`❌ Failed to generate HTML for ${errorCount} test cases`)
}
console.log(`📄 Updated ${specPath}`)
