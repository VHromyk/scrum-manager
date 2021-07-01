import React from 'react';
import styles from './Aside.module.scss';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import AddButton from '../AddButton';
import { Link, withRouter } from 'react-router-dom';

const Aside = ({ createName, children }) => {
  return (
    <div className={styles.aside}>
      <div className={styles.asideArrow}>
        <IconButton classes={styles.arrowBtn} aria-label="show projects button">
          <SvgComponent name="arrow" classes={styles.arrowIcon} />
        </IconButton>
        <h3 className={styles.arrowTitle}>Show projects</h3>
      </div>
      {children}
      <div className={styles.createButton}>
        <AddButton />
        <p className={styles.createButtonText}>{createName}</p>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Aside;
