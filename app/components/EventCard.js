import React, { Component } from 'react'

class EventCard extends Component {
  render () {
  	const id = this.props.event.get('eventId')
  	const eventName = this.props.event.get('eventName')
  	const venue = this.props.event.get('venue')
    return (
      <div className = "eventCard">
        <h1>Event: {id}</h1>
        <div>{eventName}</div>
        <div>venue: {venue} </div>
      </div>
    )
  }
}

export default EventCard