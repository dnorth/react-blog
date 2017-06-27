import React from 'react'
import { StickyContainer } from 'react-sticky'

import NavigationBar from '../nav-bar'

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