import React from 'react';
import styles from './styles/SearchBar.module.css'
export default function SearchBar(props) {
  // acá va tu código
  return <form className={styles.form}>
    <input className={styles.place} type="text" placeholder={'Ciudad...'} />
    <input className={styles.button}type="submit" img={'https://css.gg/search.css'}/>

  </form>
};
