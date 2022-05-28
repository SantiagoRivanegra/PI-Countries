import React from 'react'

export default function Card({flag, name, continent}){
  return(
    <div>
      <img src={flag} alt={name}/>
      <h4>{name}</h4>
      <h5>{continent}</h5>
    </div>
  )
}