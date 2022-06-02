//Llevo al store
import {GET_COUNTRY, GET_COUNTRY_ID, GET_ACTIVITY} from './actions' 
  //GET_ACTIVITY_BY_COUNTRY_ID 

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

    case 'GET_COUNTRY_BY_NAME':
    return {
      ...state,
      countries: payload
    }

    case GET_COUNTRY_ID:
      return {
        ...state,
        countriesID: payload
      }


/* ORDENAMIENTO POR ALFABETO */
    case 'ORDER_COUNTRY_ALPHA':
      let sortedAlpha =  state.countries;

      if(payload === 'a-z' ){
        sortedAlpha = state.countries.sort(function(a,b){
            if(a.name > b.name){
              return 1
            }
            if(a.name < b.name){
              return -1
            }
            return 0
          })
      } else if(payload === 'z-a'){
        sortedAlpha = state.countries.sort(function(a,b){
            if(a.name > b.name){
              return -1
            }
            if(a.name < b.name){
              return 1
            }
            return 0
      })
    } else if(payload === 'defecto'){
      sortedAlpha = state.allCountries.map(country => {
        let res
        state.countries.map(c => {
          if(c.name === country.name) res = c
        })
        return res
      })
    }
    return {
      ...state,
      countries: sortedAlpha
    }


      // let sortedAlpha = payload === 'a-z' ? state.countries.sort(function(a,b){
      //   if(a.name > b.name){
      //     return 1
      //   }
      //   if(a.name < b.name){
      //     return -1
      //   }
      //   return 0
      // }) : 
      // state.countries.sort(function(a,b){
      //   if(a.name > b.name){
      //     return -1
      //   }
      //   if(a.name < b.name){
      //     return 1
      //   }
      //   return 0
      // })
      // return {
      //   ...state,
      //   allCountries: sortedAlpha
      // }


/* ORDENAMIENTO POR POBLACION */
      case 'ORDER_COUNTRY_POPULATION':
      let popuArr = payload === 'mpob' ? state.countries.sort(function(a,b){
        if(a.population < b.population){
          return 1
        }
        if(a.population > b.population){
          return -1
        }
        return 0
      }) : 
      state.countries.sort(function(a,b){
        if(a.population < b.population){
          return -1
        }
        if(a.population > b.population){
          return 1
        }
        return 0
      })
      return {
        ...state,
        countries: popuArr
      }

    case GET_ACTIVITY:
      return {
        ...state,
        activities: payload
      }

    case 'POST_ACTIVITY':
      return {
        ...state
      } 

    case 'FILTER_BY_CONTINENT':
      const allCountries = state.allCountries
      const continentFilter = payload === 'All' ? allCountries : allCountries.filter(c => c.continent === payload)
      return {
        ...state,
        countries: continentFilter
      }
//filtros por tipo de actividad
      // case 'FILTER_ACTIVITY_BY_NAME':
      // const allActivities = state.allActivities
      // const nameFilter = payload === 'all' ? allCountries : allCountries.filter(c => c.continent === payload)
      // return {
      //   ...state,
      //   countries: continentFilter
      // }

    // case GET_ACTIVITY_BY_COUNTRY_ID:
    // return {
    //   ...state,
    //   activitiesByCountryID: payload
    // }

    default: return state;
  }
}

export default reducer;