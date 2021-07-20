import PropTypes from 'prop-types'
import FadeIn from 'react-fade-in'

import Header from './../components/Header'
import Search from './../components/Search'
import ParksList from './../components/ParksList'

function Parks(props) {
  return (
    <FadeIn>
      <div className='container'>
        <Header title='Parks' />
        <Search />
        <ParksList parks={props.parks} />
      </div>
    </FadeIn>

  );
}

Parks.propTypes = {
  parks: PropTypes.array.isRequired
}

export default Parks;
