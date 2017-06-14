import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import CodeBlock from '../renderers/code-block'
import logo from '../logo.svg'
import css from './index.css'

import helloWorld from '../entries/hello_world.md'

class App extends Component {
  render() {
    return (
      <div>
        <div className={css.header}>
          <img src={logo} className={css.logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className={css.body}>
          <ReactMarkdown source={helloWorld}
                        renderers={ { CodeBlock } } />
        </div>
      </div>
    )
  }
}

export default App
