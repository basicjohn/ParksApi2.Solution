import React, { Component } from 'react'
import { connect } from 'react-redux'
import FadeIn from 'react-fade-in'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import makeApiGetCall from './actions/index.js'

import Home from './pages/Home'
import Parks from './pages/Parks'
import Park from './pages/Park'
import NotFound from './pages/NotFound'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featuredParkIndex: 0
    }
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(makeApiGetCall())
    this.assignFeaturedPark()
  }

  assignFeaturedPark() {
    // set a number between 0 and parks.length
    this.setState({ featuredParkIndex: this.getRandomParkIndex() })
  }

  getRandomParkIndex() {
    return Math.floor(Math.random() * this.props.parks.length);
  }

  render() {
    console.log("APP RENDER", this.props)
    const { error, isLoading, parks } = this.props
    if (error) {
      return <>{JSON.stringify(error)}</>
    } else if (isLoading) {
      return <>Loading...</>
    } else {
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
                <Home park={parks[this.state.featuredParkIndex]} />
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
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    isLoading: state.isLoading,
    parks: state.parks
  }
}

export default connect(mapStateToProps)(App)