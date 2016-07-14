import React, { Component } from 'react'
import Route from './routes'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <div id='main'>{ Route } </div>
      </div>
    )
  }
}

export default App
