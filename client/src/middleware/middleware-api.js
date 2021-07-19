import { REQUEST_PARKS, GET_PARKS_FAILURE, GET_PARKS_SUCCESS } from './../actions/actions'

const middlewareApi = store => next => action => {
  console.log('api call made', store, next, action)
  const { parkType, parkName, established } = action
  let url = 'http://localhost:5000/api/Parks?'
  if (parkType) url += 'parkType=' + parkType + '&'
  if (parkName) url += 'parkName=' + parkName + '&'
  if (established) url += 'established=' + established

  return dispatch => {
    dispatch({ type: REQUEST_PARKS })
    return fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({ type: GET_PARKS_SUCCESS, parks: jsonResponse })
      })
      .catch(err => {
        dispatch({ type: GET_PARKS_FAILURE, error: err })
      })
    }
  }

export default middlewareApi
