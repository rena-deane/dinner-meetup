import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './containers/HeaderContainer'

class CreateNewEvent extends Component {
  render () {
    return (
      <div id="new-event">
      <Header />
        <h1>New Event</h1>
      </div>
    )
  }
}

export default CreateNewEvent