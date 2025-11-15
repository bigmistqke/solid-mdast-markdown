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

// Helper function to normalize style attribute strings
function normalizeStyleAttribute(node: HTMLElement): string {
  const properties = []

  for (let i = 0; i < node.style.length; i++) {
    const property = node.style.item(i)
    const value = node.style.getPropertyValue(property)
    properties.push(`${property}: ${value}`)
  }

  // Sort properties alphabetically for consistent comparison.
  return properties.sort().join('; ')
}

// Compare nodes recursively, returning a detailed error message or true.
function compareNodes(received: HTMLElement, expected: HTMLElement, path: string) {
  // Check node types and names.
  if (received.nodeType !== expected.nodeType) {
    throw new Error(
      `Node type mismatch at ${path}. Received: '${received.nodeType}', Expected: '${expected.nodeType}'`,
    )
  }

  if (received.nodeName !== expected.nodeName) {
    throw new Error(
      `Node name mismatch at ${path}. Received: '${received.nodeName}', Expected: '${expected.nodeName}'`,
    )
  }

  // Get and sort attributes for consistent comparison.
  const receivedAttributes = Array.from(received.attributes).sort()
  const expectedAttributes = Array.from(expected.attributes).sort()

  if (receivedAttributes.length !== expectedAttributes.length) {
    throw new Error(
      `Attribute count mismatch at ${path}. Received: ${receivedAttributes.length}, Expected: ${expectedAttributes.length}`,
    )
  }

  const receivedStyle = normalizeStyleAttribute(received)
  const expectedStyle = normalizeStyleAttribute(expected)

  if (receivedStyle !== expectedStyle) {
    throw new Error(
      `Style mismatch at ${path}. Received ${receivedStyle}, expected ${expectedStyle}`,
    )
  }

  for (let i = 0; i < receivedAttributes.length; i++) {
    const receivedAttribute = receivedAttributes[i]!
    const expectedAttribute = expectedAttributes[i]!

    if (receivedAttribute.name !== expectedAttribute.name) {
      throw new Error(
        `Attribute name mismatch at ${path}. Found '${receivedAttribute.name}', expected '${expectedAttribute.name}'`,
      )
    }

    if (receivedAttribute.name === 'style') {
      continue
    }

    if (receivedAttribute.value !== expectedAttribute.value) {
      throw new Error(
        `Attribute value mismatch for '${receivedAttribute.name}' at ${path}. Received: '${receivedAttribute.value}', Expected: '${expectedAttribute.value}'`,
      )
    }
  }

  // Compare child elements.
  if (received.children.length !== expected.children.length) {
    throw new Error(
      `Child element count mismatch at ${path}. Received: ${received.children.length}, Expected: ${expected.children.length}`,
    )
  }

  for (let i = 0; i < received.children.length; i++) {
    const childA = received.children[i]!
    const childB = expected.children[i]!

    const childPath = `${path} > ${childA.tagName}:nth-child(${i + 1})`

    compareNodes(childA as HTMLElement, childB as HTMLElement, childPath)
  }
}

// Set up the custom Vitest matcher.
export function setup() {
  expect.extend({
    toRenderEqual(received: string, expected: string) {
      const domA = new JSDOM(received)
      const domB = new JSDOM(expected)

      const rootA = domA.window.document.body
      const rootB = domB.window.document.body

      try {
        compareNodes(rootA, rootB, 'document.body')
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
