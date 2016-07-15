import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Login from './containers/LoginContainer'
import Header from './containers/HeaderContainer'
import CreateNewEvent from './containers/CreateNewEventContainer'

import EventList from './containers/EventListContainer'

export default (
  <Router history = { browserHistory }>
    <Route path="/" component = { Login } />
    <Route path="/events" component = { EventList } />
    <Route path="/new" component = { CreateNewEvent } />
    <Route path="/events/:filter" component = { EventList } />

  </Router>
)
