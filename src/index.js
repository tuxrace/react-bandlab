import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import Posts from './components/Posts'
import Audios from './components/Audios'
import { main } from './reducers/main'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'

const middlewares = [ReduxThunk]

const reducers = {
  main
}

const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(...middlewares))

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={Posts} />
        <Route path="/audios" component={Audios} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
