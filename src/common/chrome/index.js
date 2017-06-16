import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky'

import logo from './logo.svg'
import NavigationBar from '../nav-bar'

import css from './index.css'

function ChromeLayout(props)
{
  return (
    <div>
      <NavigationBar>
        Sticky Sticky
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