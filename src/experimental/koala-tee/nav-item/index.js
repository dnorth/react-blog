import React from 'react'
import { string } from 'prop-types'

import css from './index.css'

const NavItem = (props) => (
    <a href={props.to} className={css.navBarItem}>
        {props.children}
    </a>
)

NavItem.propTypes = {
    to: string
  }
  
  NavItem.defaultProps = {
    to: '/'
  }

export default NavItem