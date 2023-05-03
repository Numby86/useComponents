import React from 'react';
import styles from './CheckboxSimple.module.scss';

const CheckboxSimple = () => {
  return (
<label className={styles.container}>
  <input className={styles.ipt} type="checkbox" />
  <div className={styles.checkmark}></div>
</label>
  )
}

export default CheckboxSimple;