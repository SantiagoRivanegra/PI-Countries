import React from 'react';
import s from './PageNotFound.module.css';
import { Link } from 'react-router-dom'

export default function PageNotFound(){
  return(
    <div className={s.container}>
      <div className={s.text}>
      <h1>Esta direccion no existe</h1>
      <h3>Vuelve a la ruta principal con este boton</h3>
    </div>
    <div className={s.containerBut}>
      <Link to='/countries'><button className={s.button}>Ir a Ruta Principal</button></Link>
    </div>    
      <div className = {s.copyright}>
          <b>©2022 Santiago Marcos Rivanegra/SoyHenry</b>
      </div>

    </div>
  )
}