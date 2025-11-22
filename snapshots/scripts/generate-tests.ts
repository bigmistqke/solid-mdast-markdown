#!/usr/bin/env tsx

import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import snapshots from '../index.ts'
import * as prettier from 'prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Generate the test file content
const generateTestFile = (): string => {
  return [
    `/** 
 * Generated from testSpec.ts - [DO NOT EDIT MANUALLY]
 * Run 'pnpm test:update' to regenerate this file
 **/

import { describe, it, expect } from 'vitest'
import { render } from '@solidjs/testing-library'
import { setup } from "./setup.ts"
import { Markdown } from '../src/index.ts'
import { extensions, mdastExtensions } from "../snapshots/extensions.ts"

setup()

describe('Markdown', () => {`,
    ...Object.entries(snapshots).map(
      ([title, { input: markdown, output: html, extensions, mdastExtensions }]) => `      it('${title}', () => {
    const { asFragment } = render(() => <Markdown 
      markdown={${JSON.stringify(markdown)} }
      ${extensions ? `extensions={[${extensions.map(key => `extensions["${key}"]()`).join(', ')}]}` : ''}
      ${mdastExtensions ? `mdastExtensions={[${mdastExtensions.map(key => `mdastExtensions["${key}"]()`).join(', ')}]}` : ''}
    />)
    expect(asFragment()).toRenderEqual(${JSON.stringify(html)})
  })`,
    ),
    `})`,
  ].join('\n')
}

// Generate and write the test file
const testFileContent = await prettier.format(generateTestFile(), { parser: 'typescript' })
const outputPath = join(__dirname, '..', '..', 'test', 'index.test.tsx')
writeFileSync(outputPath, testFileContent)

const totalTests = Object.values(snapshots).length
console.log(`✅ Generated ${outputPath} with ${totalTests} tests`)
