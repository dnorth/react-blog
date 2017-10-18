import React from 'react'
import { Link } from 'react-router-dom'
import { string } from 'prop-types'

import css from './index.css'

const NavItem = (props) => (
  <div className={css.item}>
    <Link to={props.to}>{props.children}</Link>
  </div>
)

NavItem.propTypes = {
  to: string
}

NavItem.defaultProps = {
  to: '/'
}

export default NavItem