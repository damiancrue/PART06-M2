import React from 'react';
import cities from '../data';
import Card from './Card';
//import {cities} from './data';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if(!props.cities) return <h1>No hay ciudades dsiponibles</h1>
  return <div>
    {
      props.cities && props.cities.map (city => (
        <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={()=> alert(city.name)}
        />
      ))
    }
  </div>
};