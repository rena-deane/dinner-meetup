import React, { Component } from 'react'
import { Link } from 'react-router'

class Login extends Component {
  render () {
    return (
      <div>
        <h1>Login</h1>
        <form>
        	<input type="text" /><button>Ok</button>
        </form>

        <Link to={'/events'}>Link to Events</Link>
      </div>
    )
  }
}

export default Login
