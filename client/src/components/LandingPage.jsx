/*
Imagen representativa del proyecto
y boton de acceso a la home(Ruta principal)
*/

import React from 'react';
import {Link} from 'react-router-dom'

export default function LandingPage(){
  return(
    <div>
      <h1>Countries</h1>
      <Link to='/countries'>
        <button>Ingresar</button>
      </Link>
    </div>
  )
}