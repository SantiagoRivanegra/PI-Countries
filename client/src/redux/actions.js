//Creo las acciones
import axios from "axios"

export function getCountry(){
  return async (dispatch) => {
    const res = await axios("http://localhost:3001/countries")
    return dispatch({type: GET_COUNTRY, payload: res.data})
  }
}

export function getCountryDetail(){
  return async (dispatch) => {
    const res = await axios("http://localhost:3001/countries/:id")
    return dispatch({ type: GET_COUNTRY_ID, payload: res.data })
  }
}

export function getActivity(){
  return async (dispatch) => {
    const res = await axios("http://localhost:3001/activity")
    return dispatch({ type: GET_ACTIVITY, payload: res.data })
    
  }
}

export function getActivityByCountryId(){
  return async (dispatch) => {
    const res = await axios("http://localhost:3001/activity/country")
    return dispatch({ type: GET_ACTIVITY_BY_COUNTRY_ID, payload: res.data })
    
  }
}

export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID'
export const GET_ACTIVITY = 'GET_ACTIVITY'
export const GET_ACTIVITY_BY_COUNTRY_ID = 'GET_ACTIVITY_BY_COUNTRY_ID'