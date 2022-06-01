import React from 'react';
import './PageNotFound.modules.css';
import { Link } from 'react-router-dom'

export default function PageNotFound(){
  return(
    <div>
      <h1>Esta direccion no existe</h1>
      <h3>Vuelve a la ruta principal con este boton</h3>
      <Link to='/countries'><button>Ir a Ruta Principal</button></Link>
    </div>
  )
}