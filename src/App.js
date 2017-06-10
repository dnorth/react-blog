import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import logo from './logo.svg'
import './App.css'

const input = "# this is a test"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ReactMarkdown source={input} />
      </div>
    )
  }
}

export default App
