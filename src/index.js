import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import MasterRouter from './router'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
    <MasterRouter />
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker()
