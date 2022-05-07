import React from 'react';
//import { Cairns } from '../data';

export default function Card(props) {
  // acá va tu código
  return <div>
    <button onClick={props.onClose}>X</button>
    <h1>{props.name}</h1>
    <div className='tarj'>
    <h2>Min <br />{props.min}</h2>
    <h2>Max <br />{props.max}</h2>
    <h2><img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={props.img} /></h2>
    </div>
    </div>
};
