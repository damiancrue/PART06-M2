import React from 'react';
import s from'./Card.module.css'
//import { Cairns } from '../data';

export default function Card(props) {
  // acá va tu código
  return <div className={s.contenedor}>
    <button onClick={props.onClose} className={s.btn}>X</button>
    <h1>{props.name}</h1>
    <div className={s.tarj}>
    <h2 className={s.ele}>Min <br />{props.min}</h2>
    <h2 className={s.ele}>Max <br />{props.max}</h2>
    <h2 className={s.ele}><img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={props.img} /></h2>
    </div>
    </div>
};
