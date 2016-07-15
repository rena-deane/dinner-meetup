import React, { Component } from 'react'
import { Link } from 'react-router'

export default (props) => {
	const filterByAll = (event) => {
		event.preventDefault()
		props.filterByAll()
	}

	const filterByAttending = (event) => {
		event.preventDefault()
		props.filterByAttending()
	}

	const filterByHosting = (event) => {
		event.preventDefault()
		props.filterByHosting()
	}

	const createNewEvent = (event) => {
		event.preventDefault()
		props.createNewEvent()
	}

  return (
    <div className='navbar navbar-default'>
      <ul className='nav navbar-nav'>
        <li><Link to="/events/all">All</Link></li>
        <li><Link to="/events/attending">Attending</Link></li>
        <li><Link to="/events/hosting">Hosting</Link></li>
        <li><Link to="/new">Create new</Link></li>
      </ul>
    </div>
  )
}
