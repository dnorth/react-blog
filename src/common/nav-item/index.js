import React from 'react'
import css from './index.css'

const NavItem = (props) => (
  <div className={css.item}>{props.children}</div>
)

export default NavItem