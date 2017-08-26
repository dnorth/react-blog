import React from 'react'
import { StickyContainer } from 'react-sticky'

import NavigationBar from '../nav-bar'
import NavItem from '../nav-item'

import css from './index.css'

function ChromeLayout(props)
{
  return (
    <div>
      <NavigationBar>
        <div className={css.powerContent}>
          <div className={css.content}>
            <div className={css.navItems}>
              <NavItem>Blog</NavItem>
              <NavItem>About</NavItem>
            </div>
            <div className={css.socialItems}>
              <NavItem>Github</NavItem>
              <NavItem>Twitter</NavItem>
              <NavItem>LinkedIn</NavItem>
            </div>
          </div>
        </div>
      </NavigationBar>
        {props.children}
    </div>
  )
}

export default function StickyChromeLayout(props)
{
  return (
    <StickyContainer>
      <ChromeLayout {...props} />
    </StickyContainer>
  )
}