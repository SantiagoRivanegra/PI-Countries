//Llevo al store
import {GET_COUNTRY, GET_COUNTRY_ID, GET_ACTIVITY, GET_ACTIVITY_BY_COUNTRY_ID } from './actions'

const initialState = {
  countries: [],
  allCountries: [],
  countriesID: [],
  activities: [],
  allActivities: [],
  activitiesByCountryID: []
}

function reducer(state=initialState, {type, payload}) {
  switch (type) {
    case GET_COUNTRY:
    return {
      ...state,
      countries: payload,
      allCountries: payload,
    }

    case 'ORDER_COUNTRY_ALPHA':
      let sortedArr = payload === 'a-z' ? state.countries.sort(function(a,b){
        if(a.name > b.name){
          return 1
        }
        if(a.name < b.name){
          return -1
        }
        return 0
      }) : 
      state.countries.sort(function(a,b){
        if(a.name > b.name){
          return -1
        }
        if(a.name < b.name){
          return 1
        }
        return 0
      })
      return {
        ...state,
        countries: sortedArr
      }

    case 'FILTER_BY_CONTINENT':
      const allCountries = state.allCountries
      const continentFilter = payload === 'all' ? allCountries : allCountries.filter(c => c.continent === payload)
      return {
        ...state,
        countries: continentFilter
      }
//filtros por tipo de actividad
      case 'FILTER_ACTIVITY_BY_NAME':
      const allActivities = state.allActivities
      const nameFilter = payload === 'all' ? allCountries : allCountries.filter(c => c.continent === payload)
      return {
        ...state,
        countries: continentFilter
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