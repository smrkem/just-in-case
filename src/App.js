import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Header from './containers/Header'
import Routes from 'react-static-routes'

import './app.scss'

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="container main-content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
