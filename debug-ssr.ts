#!/usr/bin/env tsx

import { JSDOM } from 'jsdom'
import { renderToString } from 'solid-js/web'

// Setup DOM environment for SSR
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
global.document = dom.window.document
global.window = dom.window as any
global.HTMLElement = dom.window.HTMLElement
global.Node = dom.window.Node

console.log('Testing renderToString...')

// Test with a simple function
const SimpleComponent = () => 'Hello World'
const result1 = renderToString(() => SimpleComponent())
console.log('Simple component result:', JSON.stringify(result1))

// Test with our MDRenderer
import { MDRenderer } from './dist/index.mjs'
const result2 = renderToString(() => MDRenderer({ content: '# Hello World' }))
console.log('MDRenderer result:', JSON.stringify(result2))

// Let's also test what MDRenderer returns directly
console.log('Direct MDRenderer call:', MDRenderer({ content: '# Hello World' }))