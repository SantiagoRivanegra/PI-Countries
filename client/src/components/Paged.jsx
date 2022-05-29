import React from "react";

export default function Paged({countriesPerPage, country, paged}){
  const pageNumber = []

  for (let i = 0; i <= Math.ceil(country/countriesPerPage)-1; i++) {
    pageNumber.push(i+1)
  }

  return(
    <nav>
      <ul className='paged'>
        {
          pageNumber && pageNumber.map(number => (
            <li className='number' key={number}>
              <button onClick={() => paged(number)}>{number}</button>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}