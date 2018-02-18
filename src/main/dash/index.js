import React, { Component } from 'react'

import ChromeLayout from '../common/chrome'
import MainRouter from '../router'

export default class App extends Component {
  render() {
    return (
      <ChromeLayout>
        <MainRouter />
      </ChromeLayout>
    )
  }
}
