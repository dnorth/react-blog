import React from 'react'
import { bool } from 'prop-types'

function Show(props) {
  return props.if
    ? <div> {props.children} </div>
    : null
}

Show.propTypes = {
  if: bool.isRequired
}

export default Show