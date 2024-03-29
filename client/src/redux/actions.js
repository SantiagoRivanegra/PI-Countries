//Creo las acciones
import axios from "axios"

export function getCountry(){
  return async (dispatch) => {
    const res = await axios("/countries")
    return dispatch({type: 'GET_COUNTRY', payload: res.data})
  }
}

export function getCountryByName(name){
  return async (dispatch) => {
    try {
          // return axios(`http://localhost:3001/countries?name=${name}`)
          const res = await axios("/countries?name=" + name)
          return dispatch({ type: 'GET_COUNTRY_BY_NAME', payload: res.data })
    } catch (error) {
      alert("El pais ingresado:  '" + name + "'  no fue encontrado")
    }

  }
}

export function getCountryDetail(id){
  return async (dispatch) => {
    const res = await axios("/countries/" + id)
    return dispatch({ type: GET_COUNTRY_ID, payload: res.data })
  }
}

export function orderCountryAlpha(payload){
  return{
    type: 'ORDER_COUNTRY_ALPHA',
    payload
  }
}

export function orderCountryPopulation(payload){
  return{
    type: 'ORDER_COUNTRY_POPULATION',
    payload
  }
}

//Una accion para cada Select
export function filterCountryByContinent(payload){
  return{
    type: 'FILTER_BY_CONTINENT',
    payload
  }
}

export function filterCountryByActivity(payload){
  return{
    type: 'FILTER_COUNTRY_BY_ACTIVITY',
    payload
  }
}

export function getActivity(){
  return async (dispatch) => {
    const res = await axios("/activity")
    return dispatch({ type: GET_ACTIVITY, payload: res.data })
    
  }
}

export function postActivity(payload){
  return async (dispatch) => {
    const res = await axios.post("/activity", payload)
    return res
  }
}

export function filterHabitantes(payload){
  return {
    type: 'FILTER_HABITANTES',
    payload
  }  
}

// export function getActivityByCountryId(){
//   return async (dispatch) => {
//     const res = await axios("http://localhost:3001/activity/country")
//     return dispatch({ type: GET_ACTIVITY_BY_COUNTRY_ID, payload: res.data })
    
//   }
// }

//export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID'
export const GET_ACTIVITY = 'GET_ACTIVITY'
//export const GET_ACTIVITY_BY_COUNTRY_ID = 'GET_ACTIVITY_BY_COUNTRY_ID'