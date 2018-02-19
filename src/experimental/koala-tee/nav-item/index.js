import React from 'react'
import { string } from 'prop-types'

import css from './index.css'

const NavItem = (props) => (
    <a href={props.to} className={css.navBarItem}>
        {props.children}
    </a>
)

export const NavItemBlue = (props) => (
    <span className={css.blue}>
        <NavItem to={props.to}>{props.children}</NavItem>
    </span>
)

export const NavItemWhite = (props) => (
    <span className={css.white}>
        <NavItem to={props.to}>{props.children}</NavItem>
    </span>
)

NavItem.propTypes = {
    to: string
  }
  
  NavItem.defaultProps = {
    to: '/'
  }
