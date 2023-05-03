import React from 'react';
import styles from './ToggleMetal.module.scss';

const ToggleMetal = () => {
  return (
    <>
        <input type="checkbox" id="checkboxInput" className={styles.checkboxInput}/>
        <label htmlFor="checkboxInput" className={styles.toggleSwitch}>
        </label>
    </>
  )
}

export default ToggleMetal