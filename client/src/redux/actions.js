//Creo las acciones
import axios from "axios"

export function getCountry(){
  return (dispatch) => {
    return axios("http://localhost:3001/countries")
    .then(res=> dispatch({type: "GET_COUNTRY", payload: res.data}))
  }
}