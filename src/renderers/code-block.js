import React from 'react'
import Highlight from 'react-highlight'

export default class CodeBlock extends React.Component {
  render()
  {
    return(
      <Highlight className={this.props.language}>
        {this.props.literal}
      </Highlight>
    )
  }
}
