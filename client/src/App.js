import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/Home"
import Parks from "./pages/Parks"
import Park from "./pages/Park"

import Footer from './components/Footer'
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
          <Route path='/parks'>
            <Parks />
          </Route>
          <Route path='/park/:id'>
            <Park />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
