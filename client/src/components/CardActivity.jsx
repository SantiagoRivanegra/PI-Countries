import React from 'react'

//Card de cada Actividad
export default function CardActivity({name, duration, difficulty, season, countries}){
  return(
    <div >
      <h3>Tipo: {name}</h3>
      <span> Duracion: {duration} Horas.</span>
      <span> Nivel de Dificultad: {difficulty}.</span>
      <span> Temporada: {season}.</span>
      <span> Pais/es: {countries}.</span>
      <br />
      <hr />
    </div>
  )
}