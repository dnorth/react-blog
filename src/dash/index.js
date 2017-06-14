import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import CodeBlock from '../renderers/code-block'
import logo from '../logo.svg'
import './index.css'

import helloWorld from '../entries/hello_world.md'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-body">
          <div className="App-content">
            <ReactMarkdown source={helloWorld}
                          renderers={ { CodeBlock} } />
          </div>
        </div>
      </div>
    )
  }
}

export default App
