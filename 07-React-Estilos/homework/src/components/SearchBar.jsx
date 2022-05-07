import React from 'react';
import styles from './SearchBar.module.css';
import {BsSearch} from 'react-icons/bs'


export default function SearchBar(props) {
  // acá va tu código
  return (
    <form className={styles.barra}>
    <BsSearch className={styles.icon} />
    <input className={styles.place} placeholder='ingrese ciudad...' />
    <button className={styles.but} type='submit' onClick={()=>alert('Buscando ciudad')}>Buscar</button>
    </form>
  )
};
