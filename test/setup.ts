// vitest.d.ts
import 'vitest'

declare module 'vitest' {
  interface CustomMatchers<R = unknown> {
    toRenderEqual(expected: string): R
  }
  interface Matchers<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

// setup.ts
import { JSDOM } from 'jsdom'
import { expect } from 'vitest'
import { compareElements } from '../src/utils'

// Set up the custom Vitest matcher.
export function setup() {
  expect.extend({
    toRenderEqual(received: string, expected: string) {
      const domA = new JSDOM(received)
      const domB = new JSDOM(expected)

      const rootA = domA.window.document.body
      const rootB = domB.window.document.body

      try {
        compareElements(rootA, rootB, 'document.body')
        return { pass: true, message: () => 'Success!' }
      } catch (error) {
        return {
          pass: false,
          message: () => (error instanceof Error ? error.message : `Error: ${error}`),
        }
      }
    },
  })
}
