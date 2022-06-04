import React from "react"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getActivity} from "../redux/actions"
import { Link } from 'react-router-dom'
import CardActivity from "./CardActivity"

//Muestro todas las actividades de la Base de Datos
function Activities(){
  const dispatch = useDispatch()
  const activity = useSelector(state => state.activities)

  useEffect(() => {
    dispatch(getActivity())
  },[dispatch])

  return(
    <div>
      <div>
      <Link to='/countries'><button>Volver</button></Link>
      <Link to='/activity/create'><button>Crear Actividad</button></Link>
      </div>
      {
        activity && activity.map(a=>{
          return(
            <CardActivity name={a.name} duration={a.duration} difficulty={a.difficulty} season={a.season} countries={a.countries.map(c => c.name + ', ')}/>

        //La Card reemplaza esto ↓    
            // <div key={a.id}>
            //   <h3>Tipo: {a.name}</h3>
            //   <h3>Duracion: {a.duration} Horas</h3>
            //   <h3>Nivel de Dificultad: {a.difficulty}</h3>
            //   <h3>Temporada: {a.season}</h3>              
            //   <h3>{a.countries.map(c => c.name + ' ')}</h3>
            //   <p></p>
            // </div>

          )
        })
      }
    </div>
  )
}

export default Activities