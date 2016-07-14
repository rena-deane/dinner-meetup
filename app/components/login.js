import React, { Component } from 'react'
import {Link } from 'react-router'

class Login extends Component {
  render () {
    return (
      <div>
        <h1>This is Login Page</h1>
        <Link to={'/events'}> Link to events</Link>
      </div>
    )
  }
}

export default Login
