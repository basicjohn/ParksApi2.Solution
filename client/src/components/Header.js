import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
