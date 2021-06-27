import React from 'react';
import SvgComponent from '../SvgComponent';
import styles from './AddButton.module.scss';

const AddButton = () => (
  <button className={styles.button}>
    <SvgComponent name="create-btn" width="44px" height="44px" />
  </button>
);

export default AddButton;
