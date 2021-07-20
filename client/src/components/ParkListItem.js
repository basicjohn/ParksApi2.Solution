import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ParkListItem(props) {
  const { parkId, parkName, parkDescription } = props
  return (
    <div>
      <div>
        <h3><small>{parkId}</small> {parkName}</h3>
        <p>{parkDescription.substring(0,250)}{parkDescription.length > 250 ? '...' : null}</p>
        <Link to={`/park/${parkId}`}><button>View Details</button></Link>
      </div>
    </div>
  )
}

ParkListItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default ParkListItem