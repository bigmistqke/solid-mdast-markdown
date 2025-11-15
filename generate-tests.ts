#!/usr/bin/env tsx

import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { testSpec } from './test/testSpec.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('Generating vitest tests from testSpec...')

// Group tests by category based on title patterns
const categories = {
  Headers: [],
  Paragraphs: [],
  Emphasis: [],
  Strikethrough: [],
  Lists: [],
  Code: [],
  'Links and Images': [],
  Blockquotes: [],
  'Horizontal Rules': [],
  Tables: [],
  'Special syntax': [],
  'Complex nested markdown': [],
  'Nested lists': [],
  'Nested emphasis': [],
  'Links and images in various contexts': [],
  'Code in various contexts': [],
  'Tables with complex content': [],
  'Mixed content scenarios': [],
  'Edge cases and malformed content': [],
  'Task lists and checkboxes': [],
  'Performance with large content': [],
  'Custom renderers': [],
} satisfies Record<string, Array<{ title: string; markdown: string; html: string }>>

// Categorize tests based on title keywords
Object.entries(testSpec).forEach(([title, testCase]) => {
  let categorized = false

  // Try to match against categories
  if (title.includes('heading') || title.includes('header')) {
    categories['Headers'].push({ title, ...testCase })
    categorized = true
  } else if (title.includes('paragraph')) {
    categories['Paragraphs'].push({ title, ...testCase })
    categorized = true
  } else if (title.includes('italic') || title.includes('bold') || title.includes('emphasis')) {
    categories['Emphasis'].push({ title, ...testCase })
    categorized = true
  } else if (title.includes('strikethrough')) {
    categories['Strikethrough'].push({ title, ...testCase })
    categorized = true
  } else if (title.includes('list')) {
    if (title.includes('nested') || title.includes('deeply')) {
      categories['Nested lists'].push({ title, ...testCase })
    } else if (title.includes('task')) {
      categories['Task lists and checkboxes'].push({ title, ...testCase })
    } else {
      categories['Lists'].push({ title, ...testCase })
    }
    categorized = true
  } else if (title.includes('code')) {
    if (title.includes('context') || title.includes('blocks in')) {
      categories['Code in various contexts'].push({ title, ...testCase })
    } else {
      categories['Code'].push({ title, ...testCase })
    }
    categorized = true
  } else if (title.includes('link') || title.includes('image')) {
    if (title.includes('context') || title.includes('lists') || title.includes('within')) {
      categories['Links and images in various contexts'].push({ title, ...testCase })
    } else {
      categories['Links and Images'].push({ title, ...testCase })
    }
    categorized = true
  } else if (title.includes('blockquote')) {
    categories['Blockquotes'].push({ title, ...testCase })
    categorized = true
  } else if (title.includes('horizontal rule')) {
    categories['Horizontal Rules'].push({ title, ...testCase })
    categorized = true
  } else if (title.includes('table')) {
    if (title.includes('complex') || title.includes('emphasis') || title.includes('images')) {
      categories['Tables with complex content'].push({ title, ...testCase })
    } else {
      categories['Tables'].push({ title, ...testCase })
    }
    categorized = true
  } else if (
    title.includes('escape') ||
    title.includes('entities') ||
    title.includes('line break')
  ) {
    categories['Special syntax'].push({ title, ...testCase })
    categorized = true
  } else if (title.includes('custom')) {
    categories['Custom renderers'].push({ title, ...testCase })
    categorized = true
  } else if (title.includes('large') || title.includes('efficiently')) {
    categories['Performance with large content'].push({ title, ...testCase })
    categorized = true
  } else if (
    title.includes('edge case') ||
    title.includes('malformed') ||
    title.includes('handles') ||
    title.includes('unbalanced') ||
    title.includes('empty') ||
    title.includes('consecutive') ||
    title.includes('without')
  ) {
    categories['Edge cases and malformed content'].push({ title, ...testCase })
    categorized = true
  } else if (
    title.includes('nested') &&
    (title.includes('emphasis') || title.includes('bold') || title.includes('italic'))
  ) {
    categories['Nested emphasis'].push({ title, ...testCase })
    categorized = true
  } else if (
    title.includes('complex') ||
    title.includes('mixed') ||
    title.includes('document') ||
    title.includes('features')
  ) {
    if (title.includes('nested')) {
      categories['Complex nested markdown'].push({ title, ...testCase })
    } else {
      categories['Mixed content scenarios'].push({ title, ...testCase })
    }
    categorized = true
  }

  // If not categorized, put in a general category
  if (!categorized) {
    categories['Special syntax'].push({ title, ...testCase })
  }
})

// Generate the test file content
const generateTestFile = (): string => {
  let output = `import { describe, it, expect } from 'vitest'
import { render } from 'solid-js/web'
import { MDRenderer } from '../src'

// Generated from testSpec.ts - DO NOT EDIT MANUALLY
// Run 'tsx generate-tests.ts' to regenerate this file

describe('MDRenderer', () => {
`

  // Add a basic markdown features section
  output += `  describe('Basic markdown features', () => {
`

  // Add each category with non-empty entries
  Object.entries(categories).forEach(([categoryName, entries]) => {
    if (entries.length === 0) return

    // Skip nested categories for basic section
    if (
      [
        'Nested lists',
        'Nested emphasis',
        'Links and images in various contexts',
        'Code in various contexts',
        'Tables with complex content',
        'Mixed content scenarios',
        'Edge cases and malformed content',
        'Task lists and checkboxes',
        'Performance with large content',
      ].includes(categoryName)
    ) {
      return
    }

    output += `    describe('${categoryName}', () => {
`
    entries.forEach(({ title, markdown, html }) => {
      output += `      it('${title}', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: ${JSON.stringify(markdown)} }), div)
        expect(div.innerHTML).toBe(${JSON.stringify(html)})
      })

`
    })
    output += `    })

`
  })

  output += `  })

`

  // Add nested and complex scenarios section
  output += `  describe('Nested and complex scenarios', () => {
`

  const complexCategories = [
    'Nested lists',
    'Nested emphasis',
    'Links and images in various contexts',
    'Code in various contexts',
    'Tables with complex content',
    'Mixed content scenarios',
    'Edge cases and malformed content',
    'Task lists and checkboxes',
  ]

  complexCategories.forEach(categoryName => {
    const entries = categories[categoryName]
    if (entries.length === 0) return

    output += `    describe('${categoryName}', () => {
`
    entries.forEach(({ title, markdown, html }) => {
      output += `      it('${title}', () => {
        const div = document.createElement('div')
        render(() => MDRenderer({ content: ${JSON.stringify(markdown)} }), div)
        expect(div.innerHTML).toBe(${JSON.stringify(html)})
      })

`
    })
    output += `    })

`
  })

  output += `  })

`

  // Add special sections
  const specialCategories = ['Special syntax', 'Performance with large content', 'Custom renderers']

  specialCategories.forEach(categoryName => {
    const entries = categories[categoryName]
    if (entries.length === 0) return

    output += `  describe('${categoryName}', () => {
`
    entries.forEach(({ title, markdown, html }) => {
      output += `    it('${title}', () => {
      const div = document.createElement('div')
      render(() => MDRenderer({ content: ${JSON.stringify(markdown)} }), div)
      expect(div.innerHTML).toBe(${JSON.stringify(html)})
    })

`
    })
    output += `  })

`
  })

  output += `})
`

  return output
}

// Generate and write the test file
const testFileContent = generateTestFile()
const outputPath = join(__dirname, 'test', 'index.test.tsx')
writeFileSync(outputPath, testFileContent)

const totalTests = Object.values(testSpec).length
console.log(`✅ Generated ${outputPath} with ${totalTests} tests`)
console.log(`📊 Test breakdown:`)
Object.entries(categories).forEach(([category, entries]) => {
  if (entries.length > 0) {
    console.log(`   ${category}: ${entries.length} tests`)
  }
})
