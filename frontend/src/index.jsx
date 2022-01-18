import React from "react"
import ReactDOM from "react-dom"
import App from "./main/app"

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

// With redux-multi, you can put more 1 action an Action Creator
import multi from 'redux-multi';

import reducers from './main/reducers'

const store = applyMiddleware(multi, promise)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)