import React, { Component } from 'react'
import EventCard from './containers/EventCardContainer'
import {Link} from 'react-router'
import {fromJS, toJS} from 'immutable'
import Header from './containers/HeaderContainer'

class EventList extends Component {
  render () {

    const users = this.props.users.toJS()
    const type = this.props.params.filter
    const eventList = users.events
    var events =[]

    if(type === 'all'){
      events = eventList.map( event => {
        return <EventCard key={event.id} event={event}/>
      })
    }
    else if (type === 'attending'){
      const attending = eventList.filter( event =>{
        return event.attend === true
      })
      events = attending.map( event => {
        return <EventCard key={event.id} event={event}/>
      })
    }
    else if (type === 'hosting'){
      const hosting = eventList.filter( event =>{
        return event.hosting === true
      })
      events = hosting.map( event => {
        return <EventCard key={event.id} event={event}/>
      })
    }
    console.log(events)

    return (
      <div>
        <Header />
        <h1>This is EventList Page</h1>
        <div className="all-cards"> { events } </div>
      </div>
    )

  }
}

export default EventList
