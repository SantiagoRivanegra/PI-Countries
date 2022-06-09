import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {postActivity, getCountry} from '../redux/actions'
// import { validate } from './Validate.js'
import s from './ActivityCreate.module.css'

function validate(input){
  let error = {};
  //Name
  if (!input.name){
    error.name = 'Ingrese un nombre para su actividad'
  } 
  if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)){
    error.name = 'Para el nombre ingrese solo letras, por favor'
  } 
  //Duration
  if (!input.duration){
    error.duration = 'Ingrese la duracion(Hs) de su actividad'
  }
  if (input.duration < 1 || input.duration > 5){
    error.duration = 'La duracion(Hs) de su actividad debe ser de entre 1 y 5 Horas'
  }
  if (!/^[\d]$/.test(input.duration)){
    error.duration = 'La duracion(Hs) de su actividad debe ser con numero enteros'
  }
  //Season
  if (!input.season){
    error.season = 'Ingrese la estacion en la que se realizara su actividad'
  } 
  //Difficulty
  if (!input.difficulty){
    error.difficulty = 'Ingrese la dificultad de su actividad'
  }
  //Countries
  if (!input.countries){
    error.countries = 'Ingrese un pais/es donde se desarrollara su actividad'
  }
  return error
}



export default function ActivityCreate(){
  const dispatch = useDispatch()

  //TRAIGO LOS PAISES DEL BACK
  const countries = useSelector(state => state.countries)

  const history = useHistory()
  
  //CREO UN ESTADO PARA GUARDAR LA INFORMACION DEL FORMULARIO  
  const [input, setInput] = useState({
    name: "",
    duration: "",
    season: "",
    difficulty: "",
    countries: []
  })
  
  //CREO UN ESTADO PARA MANEJAR LOS ERRORES  
    const [error, setError] = useState({})

  //CARGO LOS PAISES CADA VEZ QUE ACCEDO AL COMPONENTE
    useEffect(() => {
      dispatch(getCountry())
    }, [])

  //Maneja los campos de  'NAME' y 'DURATION' 
  function handleChange(e){
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name] : e.target.value.trim()
    })
    setError(validate({
      ...input,
      [e.target.name] : e.target.value.trim()
    }))
  }

  function handleCheck(e){
    if(e.target.checked){
      setInput({
        ...input,
        difficulty: e.target.value
      })
    }
    setError(validate({
      ...input,
      difficulty: e.target.value
    }))
  }

  function handleSelectCountry(e){
    setInput({
      ...input,
      countries: input.countries.includes(e.target.value) 
      ? input.countries 
      : [...input.countries, e.target.value]
    })
    setError(validate({
      ...input,
      countries: e.target.value
    }))
  }

  //Seleccion de la Temporada
  function handleSelectSeason(e){
    setInput({
      ...input,
      season: e.target.value
    })
    setError(validate({
      ...input,
      season: e.target.value
    }))
  }


  //Eliminar un pais seleccionado
  function handleDelete(c){
    setInput({
      ...input,
      countries: input.countries.filter(country => country !== c)
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

  return(
    <div className={s.container}>
      <h2>Crea tu actividad</h2>

      <div className={s.containerForm}>
      <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
{/*  */}
        <div>
          <label>Nombre: </label>
          <input className={s.formInputName}
          type='text'
          value= {input.name}
          name= 'name'
          onChange={e => handleChange(e)}
          />
          {error.name && (<p className="error">{error.name}</p>)}
        </div>
{/*  */}        
        <div>
          <label className={s.labelDuration}>Duracion(Hs): </label>
          <input className={s.formInputDuration}
          type='number'
          value= {input.duration}
          name= 'duration'
          onChange={e => handleChange(e)}
          />
          {error.duration && (<p className="error">{error.duration}</p>)}
        </div>
{/*  */}
        <div className={s.divSeason}>        
          <label>Estacion: </label>
          <select className={s.selectSeason} onChange={e => handleSelectSeason(e)}>
                <option hidden selected>Seleccionar estacion</option>
                <option value='Invierno'>Invierno</option>
                <option value='Otoño'>Otoño</option>
                <option value='Primavera'>Primavera</option>
                <option value='Verano'>Verano</option>
          </select>
          {error.season && (<p className="error">{error.season}</p>)}
        </div>
{/*  */}          
        <div className={s.divDifficulty}>
          <label>Dificultad: </label>
          
            <input type='radio'
            id='onedif'
            value= '1'
            name= 'difficulty'
            onChange={e => handleCheck(e)}
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
          <select onChange={e => handleSelectCountry(e)} className={s.selectCountry}>
          <option hidden selected>Seleccionar</option>
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
        {
        input.countries.map(c =>
          <div className={s.divCountryList}>
            <p>{c + ' '}
            <button className={s.butDeleteCountry} onClick={() => handleDelete(c)}>x</button>
            </p>
          </div>
        )
      }
          {/* <ul><li>{input.countries.map(c => c + ",")}<button>x</button></li></ul> */}
        </div>
      

        {/* BOTON DE CREADO DE ACTIVIDAD*/}
      <div className={s.buttonContainer}>
        {!input.name ||
        !input.difficulty ||
        !input.duration ||
        !input.season ||
        input.countries.length === 0 ||
        Object.keys(error).length ? (
          <button className={s.butCreate} disabled type="submit">
            Crear Actividad
          </button>
        ) : (
          <button className={s.butCreate} type="submit">
            Crear Actividad
          </button>
        )}
        </div>
      </form>
      </div>
      

      {/* BOTON ELIMINAR UN PAIS SELECCIONADO */}
      {/* {
        input.countries.map(c =>
          <div className={s.divDeleteCountry}>
            <b>{c}</b>
            <button className={s.botDeleteCountry} onClick={() => handleDelete(c)}>x</button>
          </div>
        )
      } */}

      <Link to='/activity'><button>Volver</button></Link>
    </div>
  )
}