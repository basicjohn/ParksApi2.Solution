import PropTypes from 'prop-types'

import Header from './../components/Header'
import Search from './../components/Search'
import ParksList from './../components/ParksList'

function Parks(props) {
  return (
    <div className='container'>
      <Header title='Parks' />
      <Search />
      <ParksList parks={props.parks} />
    </div>
  );
}

Parks.propTypes = {
  parks: PropTypes.array.isRequired
}

export default Parks;
