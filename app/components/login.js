import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './containers/HeaderContainer'

class Login extends Component {

	handleClick() {
		let loginName = document.getElementById('loginTextBox').value
		console.log('aaa', loginName)
		return loginName
	}

  render () {
    return (
      <div id="login-page">
      	<Header />
        <h1>Login</h1>
        	<input id="loginTextBox" type="text" /><button onClick={() => {this.handleClick()}}>Ok</button>
        <br /><br /><br />
        <Link to={'/events/all'}>Link to Events</Link>
      </div>
    )
  }
}

export default Login
