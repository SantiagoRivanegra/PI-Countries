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

    /*OBTENGO TODOS LOS PAISES*/
    case GET_COUNTRY:
    return {
      ...state,
      countries: payload,
      allCountries: payload,
    }

    /*OBTENGO UN PAIS POR NOMBRE*/
    case 'GET_COUNTRY_BY_NAME':
      const filterName = payload ? payload : alert('Este pais ' + payload + ' no existe')
    return {
      ...state,
      countries: filterName
    }

    /*OBTENGO UN PAIS POR ID*/
    case GET_COUNTRY_ID:
      return {
        ...state,
        countriesID: payload
      }


    /* ORDENAMIENTO POR ALFABETO */
    case 'ORDER_COUNTRY_ALPHA':
      let sortedAlpha =  state.countries;
      let random = state.allCountries;

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
    } else if(payload === 'random'){
      sortedAlpha = random.sort(()=> Math.random() - 0.5)
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

    /*OBTENGO TODAS LAS ACTIVIDADES*/
    case GET_ACTIVITY:
      return {
        ...state,
        activities: payload,
        allActivities: payload
      }

    /*POST ACTIVITY*/  
    case 'POST_ACTIVITY':
      return {
        ...state
      } 

    /*FILTRO POR CONTINENTE*/  
    case 'FILTER_BY_CONTINENT':
      const allCountries = state.allCountries
      const continentFilter = payload === 'All' ? allCountries : allCountries.filter(c => c.continent === payload)
      return {
        ...state,
        countries: continentFilter
      }

      /*FILTRO POR TIPO DE ACTIVIDAD*/
      case 'FILTER_COUNTRY_BY_ACTIVITY':
        console.log(payload)
      const allCountryActivity = state.allCountries

      const activityFilter = payload === 'nada' ? allCountryActivity : allCountryActivity.filter(c => c.activities && c.activities.map(a => a.name).includes(payload))
      return {
        ...state,
        countries: activityFilter
      }

      case 'FILTER_HABITANTES':
        const allCountry = state.allCountries.filter(c => c.population > 100000000)
        
        return {
          ...state,
          countries: allCountry
        }

    // case GET_ACTIVITY_BY_COUNTRY_ID:
    // return {
    //   ...state,
    //   activitiesByCountryID: payload
    // }
    default: return state;
  }
}

export default reducer;