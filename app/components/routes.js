import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Login from './containers/LoginContainer'

export default (
  <Router history = { browserHistory }>
    <Route path="/" component = { Login } />
  </Router>
)
