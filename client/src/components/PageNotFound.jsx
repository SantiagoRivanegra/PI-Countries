import React from 'react';
import s from './PageNotFound.module.css';
import { Link } from 'react-router-dom'

export default function PageNotFound(){
  return(
    <div className={s.back}>
      <h1>Esta direccion no existe</h1>
      <h3>Vuelve a la ruta principal con este boton</h3>
      <Link to='/countries'><button>Ir a Ruta Principal</button></Link>
    </div>
  )
}