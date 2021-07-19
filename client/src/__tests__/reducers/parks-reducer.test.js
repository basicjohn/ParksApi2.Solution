import parksReducer from "./../../reducers/parks-reducer"
import {
  GET_PARKS_SUCCESS,
  GET_PARKS_FAILURE,
  REQUEST_PARKS,
} from "./../../actions/actions"

describe('parksReducer', () => {
  let action

  const defaultState = {
    isLoading: false,
    parks: [],
    error: null
  }

  test('Should return default state if there is no action type passed in the reducer', () => {
    action = { type: null }
    const newState = parksReducer(defaultState, action)
    expect(newState).toEqual(defaultState)
  })

  test('requesting parks should successfully change isLoading from false to true', () => {
    action = { type: REQUEST_PARKS }
    const newState = parksReducer(defaultState, action)
    expect(newState.isLoading).toBe(true)
  })

  test('GET_PARKS_SUCCESS should set isloading to false and return data array', () => {
    action = { type: GET_PARKS_SUCCESS }
    const newState = parksReducer(defaultState, action)
    expect(newState.isLoading).toBe(false)
  })

  test('GET PARKS FAILURE should set isLoading to false and return an error', () => {
    action = { type: GET_PARKS_FAILURE }
    const newState = parksReducer(defaultState, action)
    expect(newState.error).not.toBe(null)
  })
})
