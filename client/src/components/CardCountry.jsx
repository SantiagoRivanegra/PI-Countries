import React from 'react'
import s from './CardCountry.module.css'
import {Link} from 'react-router-dom'

//Card de cada Pais
export default function CardCountry({flag, name, continent, id}){
  return(
    <div className={s.style}>
      <img src={flag} alt={name}/>
      <h4>{name}</h4>
      <h4>{continent}</h4>
      <Link to={`/countries/${id}`}>
        <button>Detalle Pais</button>
      </Link>
    </div>
  )
}