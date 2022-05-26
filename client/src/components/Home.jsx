import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getCountry} from "../redux/actions"

function Home(){
  const dispatch = useDispatch()
  const country = useSelector(state => state.countries)

  useEffect(() => {
    dispatch(getCountry())
  },[dispatch])

  return(
    <div>
      {
        country && country.map(c=>{
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

export default Home