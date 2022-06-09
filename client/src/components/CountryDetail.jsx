import React, {useEffect} from "react"
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getCountryDetail, getActivity } from "../redux/actions"
import PageNotFound from "./PageNotFound"
import CountryActivities from "./CountryActivities"
import s from './CountryDetail.module.css'
import loading from '../images/loading.gif'
import CardActivity from "./CardActivity"


//Detalle de cada Pais por su ID
function CountryDetail(){
  const dispatch = useDispatch()

//Obtengo el ID pasado por parametro
  const { id }  = useParams()

//Cada vez que se ejecuta este componente trae el pais solicitado por parametro
  useEffect(() => {
    dispatch(getCountryDetail(id))
    dispatch(getActivity())
  },[dispatch, id])

  //Traigo el detalle del pais solicitado por parametro
  const idCountry = useSelector(state => state.countriesID)
  const activities = useSelector(state => state.activities)
  const act = []


  if(!idCountry === 'Este pais no Existe'){}
    if(idCountry.id === id.toUpperCase()){    

  return(
    <div className={s.container}>
      {
        <div className={s.containerElements}>
          <h1>Nombre: {idCountry.name}</h1>
          <img src={idCountry.flag} alt={idCountry.name} />
          <h3>Continente: {idCountry.continent}</h3>
          <h3>Subregion: {idCountry.subregion}</h3>
          <span>Capital: {idCountry.capital}</span>
          <h3>Poblacion: {idCountry.population} Habitantes</h3>
          <h3>Area: {idCountry.area} Km²</h3>
        </div>
            }       
      <div className={s.activities}>
        <CountryActivities activities = {idCountry.activities} />
      </div> 
       <Link to = '/countries'>
         <button>Volver</button>
       </Link>     
      <div className = {s.copyright}>
          <b>©2022 Santiago Marcos Rivanegra/SoyHenry</b>
      </div>         
    </div>    
  )} else {
    return(
      <div>
        <img src={loading} alt="Not Found"/>
         {/* <PageNotFound /> */}
      </div>
    )
  }
}

export default CountryDetail