import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName, getCountry } from '../redux/actions'
import s from './SearchBar.module.css'

export default function SearchBar(){
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    if(name !== ""){
      dispatch(getCountryByName(name))
      setName("")
    } else {
      alert('No estas buscando nada, ingrese un pais')
    }
  }

  function handleBack(e){
      dispatch(getCountry())
      setName("")
  }


  return(
    <div className={s.containerSearchBar}>
      <input className={s.searchBar}
      type = 'text'
      value = {name}
      placeholder = 'Buscar...'
      onChange={(e) => handleInputChange(e)}
      />
      <button className={s.butSearch} type = 'submit' onClick = {(e) => handleSubmit(e)}>Buscar</button>
     
      <Link to="/countries">
        <button className={s.butSearchAll} onClick = {(e) => handleBack(e)}>Restablecer todos los paises</button>
      </Link>

    </div>
  )
}