import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import middlewareApi from './middleware/middleware-api'
import reducer from './reducers/parks-reducer'
import { Provider } from 'react-redux'

const store = createStore(
  reducer,
  applyMiddleware(middlewareApi, thunkMiddleware)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
