#!/usr/bin/env tsx

import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import * as prettier from 'prettier'
import { NoHydration, renderToString } from 'solid-js/web'
import { fileURLToPath } from 'url'
import { MDRenderer } from '../dist/index.js'
import { createDebug } from '../src/utils.ts'
import spec from '../test/spec.ts'

const debug = createDebug('MDRenderer/generate-html', true)

const specPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'test', 'spec.ts')

debug('Generating HTML for all test cases...')

const serializedSpec = Object.fromEntries(
  Object.entries(spec).map(([key, testCase]) => {
    if ('manual' in testCase) {
      return [key, testCase] as const
    }

    const snapshot = renderToString(() =>
      NoHydration({ children: MDRenderer({ content: testCase.input }) }),
    ).replaceAll('<!--!$-->', '')

    return [
      key,
      {
        input: testCase.input,
        snapshot,
      },
    ] as const
  }),
)

// Write the updated file
const formattedspec = await prettier.format(
  `/**
 * Test specifications - Source of truth for all markdown tests
 * This file drives test generation and the test viewer 
 */

import type { Spec } from "./types.ts"

export default ${JSON.stringify(serializedSpec, null, 2)} satisfies Spec
`,
  { parser: 'typescript' },
)

writeFileSync(specPath, formattedspec)
