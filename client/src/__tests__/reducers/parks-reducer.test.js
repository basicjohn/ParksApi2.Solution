import parksReducer from "./../../reducers/parks-reducer"
import {
  GET_PARKS_SUCCESS,
  GET_PARKS_FAILURE,
  REQUEST_PARKS,
} from "./../../actions/actions"

describe('parksReducer', () => {
  let action
  const parkData = {
    ParkId: 1,
    AreaInSquareKm: 8983,
    Established: 1872,
    NearestTown: "West Yellowstone, Montana",
    ParkDescription: "Yellowstone National Park is an American national park located in the western United States, largely in the northwest corner of Wyoming and extending into Montana and Idaho. It was established by the U.S. Congress and signed into law by President Ulysses S. Grant on March 1, 1872. Yellowstone was the first national park in the U.S. and is also widely held to be the first national park in the world. The park is known for its wildlife and its many geothermal features, especially Old Faithful geyser, one of its most popular. While it represents many types of biomes, the subalpine forest is the most abundant. It is part of the South Central Rockies forests ecoregion.",
    ParkName: "Yosemite",
    ParkType:"National",
    VisitorCountInPreviousYear: 3806306
  }

  test('Should return default state if there is no action type passed in the reducer', () => {
    const state = {
      data: [],
      error: null,
      loading: false
    }
    action = { type: null }
    const newState = parksReducer(state, action)
    expect(newState).toEqual(state)
  })
})
