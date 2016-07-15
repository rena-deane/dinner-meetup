import React, { Component } from 'react'
import EventCard from './containers/EventCardContainer'
import {Link} from 'react-router'
import {fromJS, toJS} from 'immutable'


class EventList extends Component {
  render () {
    const users = this.props.users.toJS()
  	const events = users.events.map( event => {
  		return <EventCard key={event.id} event={event}/>
  	})
    return (
    	<div>
    		<h1>This is EventList Page</h1>
     	 	<div className="all-cards"> { events } </div>
     	</div>
    )
  }
}

export default EventList
