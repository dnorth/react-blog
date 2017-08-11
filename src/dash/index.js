import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import ChromeLayout from '../common/chrome'
import CodeBlock from '../renderers/code-block'

import css from './index.css'
import helloWorld from '../entries/hello_world.md'

export default class App extends Component {
  render() {
    return (
      <ChromeLayout>
        <div className={css.content}>
          <ReactMarkdown source={helloWorld}
                        renderers={ { CodeBlock } } />
        </div>
      </ChromeLayout>
    )
  }
}
