import React from 'react'
import { Link } from 'react-router-dom'
import { string } from 'prop-types'

import css from './index.css'

const NavItem = (props) => (
  <Link to={props.to} className={css.navItem}>{props.children}</Link>
)

NavItem.propTypes = {
  to: string
}

NavItem.defaultProps = {
  to: '/'
}

export default NavItem