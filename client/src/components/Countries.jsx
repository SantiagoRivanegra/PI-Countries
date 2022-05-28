import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getCountry} from "../redux/actions"
import {Link} from 'react-router-dom'
import Card from './Card'

/*
- [ ] Input de búsqueda para encontrar países por nombre
- [ ] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /countries` y deberá mostrar su:
  - Imagen de la bandera
  - Nombre
  - Continente
- [ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
- [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina
*/

function Countries(){
  const dispatch = useDispatch()
  const country = useSelector(state => state.countries)

  useEffect(() => {
    dispatch(getCountry())
  },[dispatch])

  return(
    <div>
      {/* Despues hacer un boton */}
      <Link to='/createActivity'>Crear Actividad</Link>
    <div>
      <select>
        <option value='all'>Todos</option>
        <option value='afr'>Africa</option>
        <option value='ame'>America</option>
        <option value='asia'>Asia</option>
        <option value='euro'>Europa</option>
        <option value='oce'>Oceania</option>
      </select>
      <select>
        <option value='act'>Actividades</option>
        <option value='sky'>Sky</option>
        <option value='pes'>Pesca</option>
      </select>
            <select>
        <option value='a-z'>A-Z</option>
        <option value='z-a'>Z-A</option>
      </select>
      <select>
        <option value='mpob'>Mayor poblacion</option>
        <option value='lpob'>Menor poblacion</option>
      </select>
    </div>
    <div>
      {
        country && country.map(c=>{
          return(
          <Card flag={c.flag} name={c.name} continent={c.continent}/>
          )
          //La Card reemplaza esto ↓
          // return(
          //   <div key={c.id}>
          //     <h3>{c.name}</h3>
          //     <img src={c.flag} alt={c.name}/>
          //   </div>
          // )
        })
      }
      </div>
    </div>
  )
}

export default Countries