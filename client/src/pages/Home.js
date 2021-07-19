import React, { Component } from 'react'
import { connect } from 'react-redux'
import middlewareApi from './../middleware/middleware-api'

import Header from './../components/Header'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(middlewareApi())
  }

  render() {
    const { error, isLoading, parks } = this.props

    if (error) {
      return <>{JSON.stringify(error)}</>
    } else if (isLoading) {
      return <>Loading...</>
    } else {
      return (
        <div className="container">
          <Header title="Home" />
          {JSON.stringify(parks)}
        </div>
      )
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

export default connect(mapStateToProps)(Home)