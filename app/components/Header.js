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
          <li><button onClick={filterByAll}>All</button></li>
          <li><button onClick={filterByAttending}>Attending</button></li>
          <li><button onClick={filterByHosting}>Hosting</button></li>
          <li><button onClick={createNewEvent} className='create-event'>+ create new</button></li>
      </ul>
    </div>

  )
}