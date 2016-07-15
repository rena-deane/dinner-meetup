import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './containers/HeaderContainer'

export default (props) => {
	const createEvent = (event) => {
		event.preventDefault()
		props.createNewEvent(
			document.getElementById("event-name"),
			document.getElementById("event-venue"),
			document.getElementById("event-date"),
			document.getElementById("event-description"),
		)
	}
  return (
    <div id="new-event">
    <Header />
      <h1>New Event</h1>
      <form id="create-event-form">
      	<div>Event Name</div><input type="text" name="event-name"/>
      	<div>Venue</div><input type="text" id="event-venue"/>
      	<div>Date</div><input type="text" id="event-date"/>
      	<div>Description</div><input type="text" id="event-description"/>
      	<br/>
      	<br/>
      	<button id="create-event-button" type="submit" onClick={createEvent}>Create Event</button>
      </form>
    </div>
  )
}
