#!/usr/bin/env tsx

import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import * as prettier from 'prettier'
import { NoHydration, renderToString } from 'solid-js/web'
import { fileURLToPath } from 'url'
import { MdastRenderer } from '../../dist/index.js'
import { createDebug } from '../../src/utils.ts'
import { extensions, mdastExtensions } from "../extensions.ts"
import snapshots from '../index.ts'

const debug = createDebug('MdastRenderer/generate-html', true)

const snapshotPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'index.ts')

debug('Generating HTML for all test cases...')

const serializedSpec = Object.fromEntries(
  Object.entries(snapshots).map(([key, testCase]) => {
    if ('manual' in testCase) {
      return [key, testCase] as const
    }

    const output = renderToString(() =>
      NoHydration({ get children() { return MdastRenderer({ markdown: testCase.input, extensions: testCase.extensions?.map(key => extensions[key]()), mdastExtensions: testCase.mdastExtensions?.map(key => mdastExtensions[key]()) }) } }),
    ).replaceAll('<!--!$-->', '')

    return [
      key,
      {
        ...testCase,
        output,
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

export default ${JSON.stringify(serializedSpec, null, 2)} as Spec
`,
  { parser: 'typescript' },
)

writeFileSync(snapshotPath, formattedspec)
