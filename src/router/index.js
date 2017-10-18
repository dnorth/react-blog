import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Blog from '../blog'

const MainRouter = () => (
  <Switch>
    <Route exact path='/' component={() => <h3>HI</h3>}/>
    <Route path='/blog' component={Blog}/>
    <Route path='/about' component={() => <h3>BYE</h3>}/>
  </Switch>
)

export default MainRouter