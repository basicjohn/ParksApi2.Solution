import React, { Component } from 'react'
import Home from './pages/Home'
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
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App
