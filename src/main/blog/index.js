import React from 'react'
import ReactMarkdown from 'react-markdown'

import CodeBlock from '../renderers/code-block'
import helloWorld from '../entries/hello_world.md'

const Blog = () => (
  <ReactMarkdown source={helloWorld}
                 renderers={ { CodeBlock } } />
)

export default Blog
