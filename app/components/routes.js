import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Login from './containers/LoginContainer'

import EventList from './containers/EventListContainer'

export default (
  <Router history = { browserHistory }>
    <Route path="/" component = { EventList } />
    <Route path="/events" component = { Login } />
  </Router>
)
