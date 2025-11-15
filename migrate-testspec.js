#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createRoot, dispose } from 'solid-js'
import { render } from 'solid-js/web'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Dynamic import to handle ESM
const { MDRenderer } = await import('./src/index.tsx')

const testSpecPath = join(__dirname, 'test', 'testSpec.ts')
const testSpecContent = readFileSync(testSpecPath, 'utf-8')

// Function to render markdown to HTML using our component
function renderMarkdownToHTML(markdown) {
  return new Promise((resolve, reject) => {
    try {
      const div = document.createElement('div')
      document.body.appendChild(div)
      
      createRoot((dispose) => {
        try {
          render(() => MDRenderer({ content: markdown }), div)
          const html = div.innerHTML
          dispose()
          document.body.removeChild(div)
          resolve(html)
        } catch (error) {
          dispose()
          if (document.body.contains(div)) {
            document.body.removeChild(div)
          }
          reject(error)
        }
      })
    } catch (error) {
      reject(error)
    }
  })
}

// Parse current testSpec and convert to new format
async function migrateTestSpec() {
  // Extract existing entries that are already in new format
  const newFormatEntries = []
  const oldFormatEntries = []
  
  // Extract all entries from the file
  const lines = testSpecContent.split('\n')
  let inTestSpec = false
  let currentEntry = ''
  let braceCount = 0
  
  for (const line of lines) {
    if (line.includes('export const testSpec')) {
      inTestSpec = true
      continue
    }
    
    if (inTestSpec) {
      currentEntry += line + '\n'
      braceCount += (line.match(/\{/g) || []).length
      braceCount -= (line.match(/\}/g) || []).length
      
      if (braceCount === 0 && line.trim() === '}') {
        break
      }
    }
  }
  
  // Parse entries
  const entryRegex = /^\s*'([^']+)':\s*(?:\{\s*markdown:\s*'([^']*(?:\\'[^']*)*)',\s*html:\s*'([^']*(?:\\'[^']*)*)'\s*\}|'([^']*(?:\\'[^']*)*)')/gm
  let match
  
  while ((match = entryRegex.exec(currentEntry)) !== null) {
    const [, title, markdown, html, oldMarkdown] = match
    
    if (markdown !== undefined) {
      // Already in new format
      newFormatEntries.push({
        title,
        markdown: markdown.replace(/\\'/g, "'").replace(/\\n/g, '\n'),
        html: html.replace(/\\'/g, "'")
      })
    } else if (oldMarkdown !== undefined) {
      // Old format, needs conversion
      const unescapedMarkdown = oldMarkdown.replace(/\\'/g, "'").replace(/\\n/g, '\n')
      oldFormatEntries.push({
        title,
        markdown: unescapedMarkdown
      })
    }
  }
  
  // Handle Array.fill entries
  const arrayFillRegex = /^\s*'([^']+)':\s*Array\((\d+)\)\.fill\(0\)\.map\([^)]+\)\.join\('\\n'\)/gm
  while ((match = arrayFillRegex.exec(currentEntry)) !== null) {
    const [, title, size] = match
    const sections = []
    for (let i = 0; i < parseInt(size); i++) {
      sections.push(`## Section ${i + 1}\n\nThis is paragraph ${i + 1} with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n`)
    }
    oldFormatEntries.push({
      title,
      markdown: sections.join('\n')
    })
  }
  
  console.log(`Found ${newFormatEntries.length} entries already in new format`)
  console.log(`Found ${oldFormatEntries.length} entries to convert`)
  
  // Generate HTML for old format entries
  console.log('Generating HTML for old format entries...')
  for (const entry of oldFormatEntries) {
    try {
      const html = await renderMarkdownToHTML(entry.markdown)
      entry.html = html
      console.log(`✓ Generated HTML for: ${entry.title}`)
    } catch (error) {
      console.error(`✗ Failed to generate HTML for ${entry.title}:`, error)
      entry.html = `Error: ${error.message}`
    }
  }
  
  // Combine all entries
  const allEntries = [...newFormatEntries, ...oldFormatEntries]
  
  // Generate new testSpec content
  const newTestSpecContent = `// Test specifications - Source of truth for all markdown tests
// This file drives test generation and the test viewer

export interface TestCase {
  markdown: string
  html: string
}

export const testSpec: Record<string, TestCase> = {
${allEntries.map(entry => {
  const escapedMarkdown = entry.markdown.replace(/'/g, "\\'").replace(/\n/g, '\\n')
  const escapedHtml = entry.html.replace(/'/g, "\\'").replace(/\n/g, '\\n')
  return `  '${entry.title}': { markdown: '${escapedMarkdown}', html: '${escapedHtml}' }`
}).join(',\n')}
}
`
  
  // Write back to file
  writeFileSync(testSpecPath, newTestSpecContent)
  console.log(`✅ Successfully migrated testSpec with ${allEntries.length} total entries`)
}

// Check if we're in a browser-like environment for DOM operations
if (typeof document === 'undefined') {
  // Node.js environment - use jsdom
  const { JSDOM } = await import('jsdom')
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
  global.document = dom.window.document
  global.window = dom.window
  global.HTMLElement = dom.window.HTMLElement
}

migrateTestSpec().catch(console.error)