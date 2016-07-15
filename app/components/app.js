import React, { Component } from 'react'
import Route from './routes'
import Header from './containers/HeaderContainer'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div id='app-wrapper'>
        <div id='main'>{ Route } </div>
        <Footer />
      </div>
    )
  }
}

export default App
