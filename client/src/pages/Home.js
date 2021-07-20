import FadeIn from 'react-fade-in'

import PropTypes from 'prop-types'
import Header from './../components/Header'

function Home (props) {
  return (
    <FadeIn>
      <div className="container">
        <Header title="Home" />
        {JSON.stringify(props.park)}
      </div>
    </FadeIn>

  )
}

Home.propTypes = { park: PropTypes.object.isRequired }

export default Home
