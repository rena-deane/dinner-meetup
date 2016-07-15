import React, { Component } from 'react'


class EventCard extends Component {
  render () {
    console.log(this.props)
  	const id = this.props.event.id
  	const eventName = this.props.event.eventName
    const venue = this.props.event.venue
    const description = this.props.event.description
  	const eventDate = this.props.event.eventDate

    // {id, eventName, venue, description, eventDate} = this.props.event
    console.log(id, eventName, venue, description, eventDate)
    return (
      <div className = "event-card">
        <h1>Event: {id}</h1>
        <div>Why: {eventName}</div>
        <div>Where: {venue} </div>
        <div>When: {eventDate} </div>
        <div>How: {description} </div>
      </div>
    )
  }
}

export default EventCard