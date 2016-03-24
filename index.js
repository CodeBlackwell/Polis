import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from './reducers/index'
import App from './components/App'

// let store = createStore(combineReducers);

render (
  // <Provider store={ store }>
    <App />,
  // </Provider>,
  document.getElementById('app')
)