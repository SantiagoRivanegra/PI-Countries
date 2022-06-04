import React from 'react';
import s from './LandingPage.module.css';
import {Link} from 'react-router-dom'

export default function LandingPage(){
  return(
    <div className = {s.back}>
      <h1>Countries</h1>
      <Link to='/countries'>
        <button>Ingresar</button>
      </Link>
    </div>
  )
}