import { Route, Router } from '@solidjs/router'
import { type Component } from 'solid-js'
import { TestViewer } from './TestViewer'

const App: Component = () => {
  return (
    <Router base={import.meta.env.VITE_BASE ?? './'}>
      <Route path="/" component={TestViewer} />
    </Router>
  )
}

export default App
