import React from 'react'
import { Switch, Route } from 'react-router-dom'

import KoalaTee from '../koala-tee'

const ExperimentalRouter = () => (
  <Switch>
    <Route exact path='/experimental' component={() => <div> EXPERIMENTS! </div>}/>
    <Route path='/experimental/koalatee' component={KoalaTee}/>
  </Switch>
)

export default ExperimentalRouter