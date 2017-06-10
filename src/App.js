import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import CodeBlock from './renderers/code-block'
import logo from './logo.svg'
import './App.css'

import helloWorld from './entries/hello_world.md'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ReactMarkdown source={helloWorld}
                       renderers={ {...ReactMarkdown.renderers, CodeBlock} } />
      </div>
    )
  }
}

export default App
