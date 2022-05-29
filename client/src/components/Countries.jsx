import React from "react"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getCountry, filterCountryByContinent, orderCountryAlpha } from "../redux/actions"
import {Link} from 'react-router-dom'
import Card from './Card'
import Paged from './Paged'
import SearchBar from './SearchBar'

/*
- [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina
*/


function Countries(){
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountry())
  },[dispatch])

  //Paginado
  const country = useSelector(state => state.countries)
  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPage] = useState(10)
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountry = country.slice(indexOfFirstCountry, indexOfLastCountry)
  
  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  function handleSortAlpha(e){
    e.preventDefault()
    dispatch(orderCountryAlpha(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }
  
  function handleFilterContinent(e){
    dispatch(filterCountryByContinent(e.target.value))
  }

  return(
    <div>
      {/* Despues hacer un boton */}
      <Link to='/createActivity'>Crear Actividad</Link>
      <div>
      <select onChange={e => handleFilterContinent(e)}>
        <option value='All'>Todos</option>
        <option value='Africa'>Africa</option>
        <option value='North America'>America del Norte</option>
        <option value='South America'>America del Sur</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europa</option>
        <option value='Oceania'>Oceania</option>
      </select>
      <select>
        <option value='act'>Actividades</option>
        <option value='sky'>Sky</option>
        <option value='pes'>Pesca</option>
      </select>
      <select onChange={e => handleSortAlpha(e)}>
        {/* <option value='inicio'>Todos</option> */}
        <option value='a-z'>A-Z</option>
        <option value='z-a'>Z-A</option>
      </select>
      <select>
        <option value='mpob'>Mayor poblacion</option>
        <option value='lpob'>Menor poblacion</option>
      </select>
    <SearchBar />  
    <Paged 
    countriesPerPage = {countriesPerPage}
    country = {country.length}
    paged = {paged}
    />      
    </div>
      {
        currentCountry && currentCountry.map(c=>{
          return(
          <Card flag={c.flag} name={c.name} continent={c.continent}/>
          )
          //La Card reemplaza esto ↓
          // return(
          //   <div key={c.id}>
          //     <h3>{c.name}</h3>
          //     <img src={c.flag} alt={c.name}/>
          //   </div>
          // )
        })
      }
    </div>
  )
}

export default Countries