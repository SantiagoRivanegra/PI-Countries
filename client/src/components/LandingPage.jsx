import React from 'react';
import s from './LandingPage.module.css';
import {Link} from 'react-router-dom'

export default function LandingPage(){
  return(
      <div  className = {s.container}>
        <div>
        <div className = {s.pageTitlte}>
          <h1>Countries</h1>
          </div>
            <Link to='/countries'>
              <button className={s.butIngresar}>Ingresar</button>
            </Link>
        </div>
        <div className = {s.copyright}>
          <b>©2022 Santiago Marcos Rivanegra/SoyHenry</b>
        </div>
      </div>
  )
}