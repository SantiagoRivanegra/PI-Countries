import React from "react"
import s from './Countries.module.css'
import loading from '../images/loading.gif'
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getCountry, filterCountryByContinent, filterCountryByActivity, orderCountryAlpha, orderCountryPopulation, getActivity, filterHabitantes } from "../redux/actions"
import {Link} from 'react-router-dom'
import CardCountry from './CardCountry'
import Paged from './Paged'
import SearchBar from './SearchBar'

function Countries(){
  const dispatch = useDispatch()  
  const country = useSelector(state => state.countries)
  const activities = useSelector(state => state.activities)

  useEffect(() => {
    dispatch(getCountry())
    dispatch(getActivity())
  },[dispatch])

  //Paginado
  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPage] = useState(10)
  const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countriesPerPage - 1
  const indexOfFirstCountry = currentPage === 1 ? 0 : indexOfLastCountry - countriesPerPage
  const currentCountry = country.slice(indexOfFirstCountry, indexOfLastCountry)
  /*
  Paginado con 10 por pagina ↓
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage*/
  
  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  function handleSortAlpha(e){
    e.preventDefault()
    dispatch(orderCountryAlpha(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }

  function handleSortPopulation(e){
    e.preventDefault()
    dispatch(orderCountryPopulation(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }
  
  function handleFilterContinent(e){
    dispatch(filterCountryByContinent(e.target.value))
  }

  function handleFilterActivity(e){
    dispatch(filterCountryByActivity(e.target.value))
  }

  function handleFilterHabitantes(){
    dispatch(filterHabitantes())
  }

  return(
    <div className = {s.container}>
      <div className = {s.containerElements}>
        <div className = {s.containerButActivity}>
          <Link to='/activity'><button className={s.butActivity}>Actividades / Crear Actividad</button></Link>
        </div>
      
      {/* Filtro por Continente */}
    <div className = {s.containerFilterOrder}>
      <div className={s.float1}>
      <div className = {s.containerContinent}>  
      <label>Continente: </label>
      <select onChange={e => handleFilterContinent(e)}>
        <option value='All'>Todos</option>
        <option value='Africa'>Africa</option>
        <option value='Antarctica'>Antarctica</option>
        <option value='North America'>America del Norte</option>
        <option value='South America'>America del Sur</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europa</option>
        <option value='Oceania'>Oceania</option>
      </select>
      </div>

      {/* Orden por Alfabeto */}
      <div className={s.containerAlpha} >
      <label>Ordenar alfabeticamente: </label>
      <select onChange={e => handleSortAlpha(e)}>
        <option>Ninguno</option>
        <option value='random'>Aleatorio</option>
        <option value='a-z'>A-Z</option>
        <option value='z-a'>Z-A</option>
      </select>
      </div>
      </div>
      
      {/* Filtro por Actividades */}
      <div className={s.float2}>
      <div className={s.containerTypeActivity}>
      <label>Actividades: </label>
      <select onChange={e => handleFilterActivity(e)}>
        <option key={'activityFilter'} value='nada'>------------------------</option>
        {
          activities && activities.map(a => {
            return(
            <option key={'activityFilter' + a.id} value={a.name}>{a.name}</option>
            )
          })
        }
      </select>
      </div>

      {/* Orden por Poblacion */}
      <div className={s.containerPopulation}>
      <label>Ordenar por poblacion: </label>
      <select onChange={e => handleSortPopulation(e)}>
        {/* <option value='pob'>Poblacion</option> */}
        <option value='mpob'>Mayor poblacion</option>
        <option value='lpob'>Menor poblacion</option>
      </select>
      </div>
      </div>
    </div>

    <div>  
      <label>Filtro Habitantes: </label>
      <button onClick={e => handleFilterHabitantes(e)}>FiltroNuevo
      </button>
      </div>

    {/* Barra de Busqueda */}  
    <SearchBar /> 

    {/* Paginado */} 
    <Paged 
    countriesPerPage = {countriesPerPage}
    country = {country.length}
    paged = {paged}
    />      
    </div>

    {/* Muestro los Paises */}
    <div className={s.containerCountry}>
      {
        currentCountry ? currentCountry.map(c=>{
          return(
          <CardCountry flag={c.flag} name={c.name} continent={c.continent} id={c.id}/>          
          )
          //La Card reemplaza esto ↓
          // return(
          //   <div key={c.id}>
          //     <h3>{c.name}</h3>
          //     <img src={c.flag} alt={c.name}/>
          //   </div>
          // )
        }) : (
          <div>
            <img src={loading} alt="Not Found"/>,
            <h3>No se encontraron paises</h3>
          </div>
        )
      }
    </div>
      <div className = {s.copyright}>
          <b>©2022 Santiago Marcos Rivanegra/SoyHenry</b>
      </div>  
    </div>
  )
}

export default Countries