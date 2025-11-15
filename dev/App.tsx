import type { Component } from 'solid-js'
import { MDRenderer } from '../src'
import { TestViewer } from './TestViewer'

const App: Component = () => {
  return <TestViewer />
  return <MDRenderer content="# hallo world" />
}

export default App
