#!/usr/bin/env tsx

import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import spec from '../test/spec.ts'

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
import { MDRenderer } from '../src'
import { setup } from "./setup"

setup()

describe('MDRenderer', () => {`,
    ...Object.entries(spec).map(
      ([title, { markdown, html }]) => `      it('${title}', () => {
        const { asFragment } = render(() => <MDRenderer content={${JSON.stringify(markdown)} } />)
        expect(asFragment()).toRenderEqual(${JSON.stringify(html)})
      })`,
    ),
    `})`,
  ].join('\n')
}

// Generate and write the test file
const testFileContent = generateTestFile()
const outputPath = join(__dirname, '..', 'test', 'index.test.tsx')
writeFileSync(outputPath, testFileContent)

const totalTests = Object.values(spec).length
console.log(`✅ Generated ${outputPath} with ${totalTests} tests`)
