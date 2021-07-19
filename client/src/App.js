import React from 'react'
import FadeIn from 'react-fade-in'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Parks from './pages/Parks'
import Park from './pages/Park'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/parks">
          <FadeIn>
            <Parks />
          </FadeIn>
        </Route>
        <Route exact path="/park/:id">
          <Park />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <div>Not Found</div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App
