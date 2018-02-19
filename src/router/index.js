import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dash from '../main/dash'
import ExperimentalRouter from '../experimental/router'

const MasterRouter = () => (
  <Switch>
    <Route exact path='/' component={Dash} />
    <Route path='/main' component={Dash}/>
    <Route path='/experimental' component={ExperimentalRouter}/>
  </Switch>
)

export default MasterRouter