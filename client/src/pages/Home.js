import PropTypes from 'prop-types'
import Header from './../components/Header'

function Home (props) {
  return (
    <div className="container">
      <Header title="Home" />
      {JSON.stringify(props.park)}
    </div>
  )
}

Home.propTypes = { park: PropTypes.object.isRequired }

export default Home
