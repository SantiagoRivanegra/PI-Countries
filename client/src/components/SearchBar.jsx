import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from '../redux/actions'

export default function SearchBar(){
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e){
    e.preventDefault()
    setName("")
    dispatch(getCountryByName(name))
  }

  return(
    <div>
      <input
      type = 'text'
      value = {name}
      placeholder = 'Buscar...'
      onChange={(e) => handleInputChange(e)}
      />
      <button type = 'submit' onClick = {(e) => handleSubmit(e)}>Buscar</button>
    </div>
  )
}