import React from 'react'
import { render } from 'react-dom'
import App from './app/components/app'

render(<App name='dinner-meetup' />, document.querySelector('main'))
console.log('welcome to dinner-meetup')
