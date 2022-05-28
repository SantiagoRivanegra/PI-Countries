import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getCountryDetail} from "../redux/actions"

/*
- [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
- [ ] Código de país de 3 letras (id)
- [ ] Capital
- [ ] Subregión
- [ ] Área (Mostrarla en km2 o millones de km2)
- [ ] Población
- [ ] Actividades turísticas con toda su información asociada
*/

function CountryDetail(){
  const dispatch = useDispatch()
  const countryDetail = useSelector(state => state.countriesID)

  useEffect(() => {
    dispatch(getCountryDetail())
  },[dispatch])

  return(
    <div>
      {
        countryDetail && countryDetail.map(c=>{
          return(
            <div key={c.id}>
              <h3>{c.name}</h3>
              <img src={c.flag} alt={c.name}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CountryDetail