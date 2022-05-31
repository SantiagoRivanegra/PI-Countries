import React, {useEffect} from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getCountryDetail } from "../redux/actions"

/*
- [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
- [ ] Código de país de 3 letras (id)
- [ ] Capital
- [ ] Subregión
- [ ] Área (Mostrarla en km2 o millones de km2)
- [ ] Población
- [ ] Actividades turísticas con toda su información asociada
*/

function CountryDetail(props){
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCountryDetail(props.match.params.id))
  },[dispatch])
  
  const countryDetail = useSelector(state => state.countriesID)
  return(
    <div>
      {
        countryDetail.length > 0 ?
          
            <div key={countryDetail.id}>
              <h3>{countryDetail[0].name}</h3>
              <img src={countryDetail[0].flag} alt={countryDetail[0].name}/>
              <h3>{countryDetail[0].id}</h3>
              <h3>{countryDetail[0].capital}</h3>
              <h3>{countryDetail[0].subregion}</h3>
              <h3>{countryDetail[0].area} km2</h3>
              <h3>{countryDetail[0].population}</h3>
            </div> : <p>Loading</p>
          
      }
      <Link to = '/countries'>
        <button>Volver</button>
      </Link>
    </div>
  )
}

export default CountryDetail