import React, { Component } from 'react'
import EventCard from './containers/EventCardContainer'
import {Link} from 'react-router'

class EventList extends Component {
  render () {

    const type = this.params.filter

    if(type === 'all'){
      const events = this.props.events.map( event => {
        return <EventCard key={event.get('id')} event={event}/>
      })
    }
    else if (type === 'attending'){
      const attending = this.props.events.filter( event =>{
        return event.attend = true
      })
      const events = attending.map( event => {
        return <EventCard key={event.get('id')} event={event}/>
      })
    }
    else if (type === 'hosting'){
      const attending = this.props.events.filter( event =>{
        return event.host = true
      })
      const events = attending.map( event => {
        return <EventCard key={event.get('id')} event={event}/>
      })
    }

    return (
      <div>
        <h1>This is EventList Page</h1>
        <div> { events } </div>
      </div>
    )
    
  }
}

export default EventList
