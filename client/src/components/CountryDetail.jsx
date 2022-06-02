import React, {useEffect} from "react"
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getCountryDetail, getActivity } from "../redux/actions"
import PageNotFound from "./PageNotFound"
import CountryActivities from "./CountryActivities"
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

  // activity && activity.map(a=>{
  //   return(
  //     <CardActivity name={a.name} duration={a.duration} difficulty={a.difficulty} season={a.season} countries={a.countries.map(c => c.name + ' ')}/>)})
  
  if(!idCountry === 'Este pais no Existe'){}
    if(idCountry.id === id.toUpperCase()){

      

  return(
    <div>
      {
        <div>
          <h1>Nombre: {idCountry.name}</h1>
          <img src={idCountry.flag} alt={idCountry.name} />
          <h3>Continente: {idCountry.continent}</h3>
          <h3>Subregion: {idCountry.subregion}</h3>
          <span>Capital: {idCountry.capital}</span>
          <h3>Poblacion: {idCountry.population} Habitantes</h3>
          <h3>Area: {idCountry.area} Km²</h3>

          {/* <div>
          {activities && activities.filter(act => {idCountry.name === act.countries.map(c => {c.name})
          return (
            <CardActivity name={act.name}/>
          )})
          }
          </div> */}
        </div>
        }       
       <Link to = '/countries'>
         <button>Volver</button>
       </Link>             
    </div>
  )} else {
    return(
      <div>
         <PageNotFound />
      </div>
    )
  }
}

export default CountryDetail

// llamo  a card activity en detail
// comparo c.name con el mapeo de las acti con lo que me da a.countries.map
// igualo el nombre de los paises y muestro todo
// si no iguala no muestra el componente 