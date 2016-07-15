import React, { Component } from 'react'
import EventCard from './containers/EventCardContainer'
import {Link} from 'react-router'

class EventList extends Component {
  render () {
  	const events = this.props.events.map( event => {
  		return <EventCard key={event.get('id')} event={event}/>
  	})
    return (
    	<div>
    		<h1>This is EventList Page</h1>
     	 	<div> { events } </div>
     	</div>
    )
  }
}

export default EventList
