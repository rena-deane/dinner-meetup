import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './containers/HeaderContainer'

class Login extends Component {
  render () {
    return (
      <div id="login-page">
      	<Header />
        <h1>This is Login Page</h1>
        <Link to={'/events'}>Link to Events</Link>
      </div>
    )
  }
}

export default Login
