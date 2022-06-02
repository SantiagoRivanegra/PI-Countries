import React from "react";

//Filtrar las actividades de cada Pais
const CountryActivities = ({activities}) => {
  
  return (
    <div>
      {activities &&
        activities.map((a) => {
          return (
            <div key={a.id}>
              <span>Actividad: {a.name}</span>
              <span>Dificultad: {a.difficulty}</span>
              <span>Duración: {a.duration} hs.</span>
              <span>Season: {a.season}</span> 
            </div>
          );
        })}
    </div>
  );
};

export default CountryActivities;