import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {postActivity, getCountry} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

function validate(input){
  let error = {};
  if (!input.name){
    error.name = 'Ingrese un nombre para su actividad'
  } else if (!input.duration){
    error.duration = 'Ingrese la duracion(Hs) de su actividad'
  } else if (!input.season){
    error.season = 'Ingrese la estacion en la se realizara su actividad'
  } else if (!input.difficulty){
    error.difficulty = 'Ingrese la dificultad de su actividad'
  } else if (!input.countries){
    error.countries = 'Ingrese un pais/es donde se desarrollara su actividad'
  }
  return error
}

export default function ActivityCreate(){
  const dispatch = useDispatch()
  const history = useHistory()
  const countries = useSelector(state => state.countries)
  const [error, setError] = useState({})

  const [input, setInput] = useState({
    name: "",
    duration: "",
    season: "",
    difficulty: "",
    countries: []
  })

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setError(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
  }

  function handleCheck(e){
    if(e.target.checked){
      setInput({
        ...input,
        difficulty: e.target.value
      })
    }
  }

  function handleSelect(e){
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
  }

  function handleSeason(e){
    setInput({
      ...input,
      season: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    setError(validate({
      ...input,
      [e.target.name] : e.target.value
    }))

    dispatch(postActivity(input))
    alert("Actividad creada con exito, felicidades")
    setInput({
      name: "",
      duration: "",
      season: "",
      difficulty: "",
      countries: []
    })
    history.push('/activity')
  }

  useEffect(() => {
    dispatch(getCountry())
  }, [])

  return(
    <div>
      <Link to='/activity'><button>Volver</button></Link>
      <h2>Crea tu actividad</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
{/*  */}
          <label>Nombre: </label>
          <input type='text'
          value= {input.name}
          name= 'name'
          onChange={e => handleChange(e)}
          />
          {error.name && (<p className="error">{error.name}</p>)}
        </div>
        <div>
{/*  */}        
          <label>Duracion(Hs): </label>
          <input type='number'
          value= {input.duration}
          name= 'duration'
          onChange={e => handleChange(e)}
          />
          {error.duration && (<p className="error">{error.duration}</p>)}
        </div>
{/*  */}        
        <label>Estacion: </label>
        <select onChange={e => handleSeason(e)}>
                <option >Seleccionar estacion</option>
                <option value='Invierno'>Invierno</option>
                <option value='Otoño'>Otoño</option>
                <option value='Primavera'>Primavera</option>
                <option value='Verano'>Verano</option>
          </select>
          {error.season && (<p className="error">{error.season}</p>)}
        <div>
{/*  */}          
          <label>Dificultad: </label>
          
            <input type='radio'
            id='onedif'
            value= '1'
            name= 'difficulty'
            onChange={e => handleCheck(e)}
            defaultChecked={true}
          />
          <label>1</label>

           <input type='radio'
            id='twodif'
            value= '2'
            name= 'difficulty'
            onChange={e => handleCheck(e)}
          />
          <label>2</label>
          
           <input type='radio'
            id='threedif'
            value= '3'
            name= 'difficulty'
            onChange={e => handleCheck(e)}
          />
          <label>3</label>
          
            <input type='radio'
            id='fourdif'
            value= '4'
            name= 'difficulty'
            onChange={e => handleCheck(e)}
          />
          <label>4</label>
          
           <input type='radio'
            id='fivedif'
            value= '5'
            name= 'difficulty'
           onChange={e => handleCheck(e)}
          />
          <label>5</label>
          {error.difficulty && (<p className="error">{error.difficulty}</p>)}
        </div>
{/*  */}        
        <label>Paises: </label>
          <select onChange={e => handleSelect(e)}>
          <option>Seleccionar</option>
          {countries.sort((a, b) => a.name.localeCompare(b.name))
                .map((country) => {
                  return (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  );
                })}
          </select>
          {error.countries && (<p className="error">{error.countries}</p>)}
        <div>
          <ul><li>{input.countries.map(c => c + ",")}</li></ul>
          <button type='submit'>Crear Actividad</button>
        </div>

      </form>
    </div>
  )
}