//Llevo al store
import {GET_COUNTRY, GET_COUNTRY_ID, GET_ACTIVITY, GET_ACTIVITY_BY_COUNTRY_ID } from './actions'

const initialState = {
  countries: [],
  countriesID: [],
  activities: [],
  activitiesByCountryID: []
}

function reducer(state=initialState, {type, payload}) {
  switch (type) {
    case GET_COUNTRY:
    return {
      ...state,
      countries: payload
    }

    case GET_COUNTRY_ID:
    return {
      ...state,
      countriesID: payload
    }

    case GET_ACTIVITY:
    return {
      ...state,
      activities: payload
    }

    case GET_ACTIVITY_BY_COUNTRY_ID:
    return {
      ...state,
      activitiesByCountryID: payload
    }

    default: return state;
  }
}

export default reducer;