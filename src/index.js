import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home/Home'
import NotFound from './containers/NotFound/NotFound'

import 'ress/dist/ress.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
