import {
  GET_PARKS_SUCCESS,
  GET_PARKS_FAILURE,
  REQUEST_PARKS
} from './../../actions/actions'

const parksReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PARKS_FAILURE:
    case GET_PARKS_SUCCESS:
    case REQUEST_PARKS:
    default:
      return state;
  }
}

export default parksReducer
