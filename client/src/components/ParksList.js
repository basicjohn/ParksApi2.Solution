import PropTypes from 'prop-types'
import ParkListItem from './ParkListItem'

function ParksList(props) {
  return (
    <div>
      <h3>Parks List</h3>
      { props.parks.map(park => <ParkListItem {...park} /> )}
    </div>
  )
}

ParksList.propTypes = {
  parks: PropTypes.array.isRequired
}

export default ParksList
