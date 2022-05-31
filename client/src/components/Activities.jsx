import React from "react"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getActivity} from "../redux/actions"
import ActivityCreate from './ActivityCreate'

function Activities(){
  const dispatch = useDispatch()
  const activity = useSelector(state => state.activities)

  useEffect(() => {
    dispatch(getActivity())
  },[dispatch])

  return(
    <div>
      <ActivityCreate />
      {
        activity && activity.map(a=>{
          return(
            <div key={a.id}>
              <h3>{a.name}</h3>
              <h3>{a.duration}</h3>
              <h3>{a.difficulty}</h3>
              <h3>{a.season}</h3>              
              <h3>{a.country}</h3>
            </div>

          )
        })
      }
    </div>
  )
}

export default Activities