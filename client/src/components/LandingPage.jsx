import React from 'react';
import s from './LandingPage.module.css';
import {Link} from 'react-router-dom'

export default function LandingPage(){
  return(
      <div  className = {s.container}>
        <div>
          <div className = {s.containerTittle}>
            <h3 className={s.letterC}>C</h3>
            <h3 className={s.letterC}>O</h3>
            <h3 className={s.letterC}>U</h3>
            <h3 className={s.letterC}>N</h3>
            <h3 className={s.letterC}>T</h3>
            <h3 className={s.letterC}>R</h3>
            <h3 className={s.letterC}>I</h3>
            <h3 className={s.letterC}>E</h3>
            <h3 className={s.letterC}>S</h3>
            <h3 className={s.letterS}>S</h3>
            <h3 className={s.letterS}>M</h3>
            <h3 className={s.letterS}>R</h3>
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