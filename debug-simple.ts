#!/usr/bin/env tsx

import { JSDOM } from 'jsdom'
import { renderToString } from 'solid-js/web'

// Setup DOM environment for SSR
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
global.document = dom.window.document
global.window = dom.window as any
global.HTMLElement = dom.window.HTMLElement
global.Node = dom.window.Node

console.log('Testing simple markdown...')

// Test just one simple case to see what happens
import { MDRenderer } from './dist/index.mjs'

// Let's try with the simplest possible markdown
const simpleTest = '# Hello'
console.log('Input:', JSON.stringify(simpleTest))

try {
  const result = renderToString(() => MDRenderer({ content: simpleTest }))
  console.log('SSR Result:', JSON.stringify(result))
  console.log('SSR Result type:', typeof result)
  console.log('SSR Result length:', result?.length)
} catch (error) {
  console.error('SSR Error:', error)
}

// Let's also check what the component returns when called directly
const directResult = MDRenderer({ content: simpleTest })
console.log('Direct result:', directResult)
console.log('Direct result type:', typeof directResult)