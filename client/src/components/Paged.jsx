import React from "react";
import s from './Paged.module.css'

export default function Paged({countriesPerPage, country, paged}){
  const pageNumber = []

  for (let i = 0; i <= Math.ceil(country/countriesPerPage)-1; i++) {
    pageNumber.push(i+1)
  }

  return(
    <nav className={s.este}>
      <ul className={s.paged}>
        {
          pageNumber && pageNumber.map(number => (
              <button className={s.butNumber} onClick={() => paged(number)}>{number}</button>
          ))
        }
      </ul>
    </nav>
  )
}