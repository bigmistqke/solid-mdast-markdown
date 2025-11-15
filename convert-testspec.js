#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const testSpecPath = join(__dirname, 'test', 'testSpec.ts')
const content = readFileSync(testSpecPath, 'utf-8')

// Simple regex replacement to convert old format to new format
let newContent = content
  .replace(/: '([^']+)',/g, ": { markdown: '$1', html: '' },")
  .replace(/: `([^`]+)`,/g, ": { markdown: `$1`, html: '' },")
  .replace(/: Array\((\d+)\)\.fill\(0\)\.map\([^)]+\)\.join\('\\n'\),/g, ": { markdown: Array($1).fill(0).map((_, i) => `## Section ${i + 1}\\n\\nThis is paragraph ${i + 1} with **bold** and *italic* text.\\n\\n- Item 1\\n- Item 2\\n- Item 3\\n`).join('\\n'), html: '' },")

writeFileSync(testSpecPath, newContent)
console.log('✅ Converted testSpec to new format')