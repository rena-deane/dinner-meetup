import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { toJS } from 'immutable'

import reducer from './app/reducer.js'
import App from './app/components/app'

const logger = createLogger({
  collapsed: true,
  stateTransformer: state => state.toJS()
})

const Store = createStore (
  reducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
)

render((
  <Provider store = { Store }>
    <App name='dinner-meetup' />
  </Provider>
), document.querySelector('main'))

console.log('welcome to dinner-meetup')
