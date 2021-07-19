import React from 'react'
import FadeIn from 'react-fade-in'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Parks from './pages/Parks'
import Park from './pages/Park'
import NotFound from './pages/NotFound'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <FadeIn>
        <Switch>
          <Route exact path="/parks">
            <Parks />
          </Route>
          <Route exact path="/park/:id">
            <Park />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </FadeIn>
      <Footer />
    </Router>
  );
}

export default App
