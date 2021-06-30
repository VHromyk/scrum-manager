import React from 'react';
import styles from './Aside.module.scss';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import AddButton from '../AddButton';
import { Link, withRouter } from 'react-router-dom';

const Aside = ({ createName }) => {
  return (
    <div className={styles.aside}>
      <div className={styles.asideArrow}>
        <IconButton classes={styles.arrowBtn} aria-label="show projects button">
          <SvgComponent name="arrow" classes={styles.arrowIcon} />
        </IconButton>
        <h3 className={styles.arrowTitle}>Show projects</h3>
      </div>
      <div className={styles.asideListContainer}>
        <div className={styles.scroll}>
          <ul className={styles.asideList}>
            <li>
              <div className={styles.squareName}>
                <div className={styles.square}></div>
                <p>Project 1</p>
              </div>
            </li>
            <li>
              <div className={styles.squareName}>
                <div className={styles.square}></div>
                <p>Very long project name</p>
              </div>
            </li>
            <li>
              <div className={styles.squareName}>
                <div className={styles.square}></div>
                <p>Project 3</p>
              </div>
            </li>
            <li>
              <div className={styles.squareName}>
                <div className={styles.square}></div>
                <p>Project 1</p>
              </div>
            </li>
            <li>
              <div className={styles.squareName}>
                <div className={styles.square}></div>
                <p>Very long project name</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.createButton}>
        <AddButton />
        <p className={styles.createButtonText}>{createName}</p>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Aside;
