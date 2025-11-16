export function createDebug(subject: string, enabled: boolean) {
  return function (value: string, extra?: any, options?: { trace?: boolean }) {
    if (!enabled) {
      return
    }
    console[options?.trace ? 'trace' : 'log'](
      `%c[${subject}]`,
      `color: grey;`,
      value,
      ...[extra].filter(Boolean),
    )
  }
}

// Helper function to get computed style
function getComputedStyle(node: HTMLElement): string {
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
export function compareNodes(received: Node, expected: Node, path: string = '') {
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

  // // Compare computed styles
  if (received instanceof HTMLElement && expected instanceof HTMLElement) {
    const receivedStyle = getComputedStyle(received)
    const expectedStyle = getComputedStyle(expected)

    if (receivedStyle !== expectedStyle) {
      throw new Error(
        `Style mismatch at ${path}. Received ${receivedStyle}, expected ${expectedStyle}`,
      )
    }
  }

  // Compare attributes
  if (received instanceof Element && expected instanceof Element) {
    // return Array.from(node.attributes).sort((a, b) => a.name.localeCompare(b.name))
    // Get and sort attributes for consistent comparison.
    const receivedAttributes = Array.from(received.attributes).sort((a, b) =>
      a.name.localeCompare(b.name),
    )
    const expectedAttributes = Array.from(expected.attributes).sort((a, b) =>
      a.name.localeCompare(b.name),
    )

    if (receivedAttributes.length !== expectedAttributes.length) {
      throw new Error(
        `Attribute count mismatch at ${path}. Received: ${receivedAttributes.length}, Expected: ${expectedAttributes.length}`,
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

      // We handle computed styles
      if (receivedAttribute.name === 'style') {
        continue
      }

      if (receivedAttribute.value !== expectedAttribute.value) {
        throw new Error(
          `Attribute value mismatch for '${receivedAttribute.name}' at ${path}. Received: '${receivedAttribute.value}', Expected: '${expectedAttribute.value}'`,
        )
      }
    }
  }

  // Compare child elements.
  if (received.childNodes.length !== expected.childNodes.length) {
    throw new Error(
      `Child element count mismatch at ${path}. Received: ${received.childNodes.length}, Expected: ${expected.childNodes.length}`,
    )
  }

  for (let i = 0; i < received.childNodes.length; i++) {
    const receivedChild = received.childNodes[i]!
    const expectedChild = expected.childNodes[i]!

    const childPath = `${path} > ${
      receivedChild instanceof HTMLElement ? receivedChild.tagName : 'TextNode'
    }:nth-child(${i + 1})`

    if (
      (receivedChild instanceof HTMLElement && !(expectedChild instanceof HTMLElement)) ||
      (!(receivedChild instanceof HTMLElement) && expectedChild instanceof HTMLElement)
    ) {
      throw new Error(
        `Child type mismatch at ${path}. Received: ${receivedChild}, Expected: ${expectedChild}`,
      )
    }

    if (receivedChild instanceof HTMLElement && expectedChild instanceof HTMLElement) {
      compareNodes(receivedChild, expectedChild, childPath)
    } else if (receivedChild.textContent !== expectedChild.textContent) {
      throw new Error(
        `Text content mismatch at ${path}. Received: '${received.textContent}', Expected: '${expected.textContent}'`,
      )
    }
  }
}
