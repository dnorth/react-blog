import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Dash from './dash'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
    <Dash />
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker()
