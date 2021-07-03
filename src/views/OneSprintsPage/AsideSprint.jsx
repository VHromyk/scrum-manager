import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../components/IconButton';
import SvgComponent from '../../components/SvgComponent';
import AddButton from '../../components/AddButton';

import styles from './AsideSprint.module.scss';

const AsideSprint = () => {
  return (
    <div clssName={styles.aside}>
      <div className={styles.showSprintsWrapper}>
        <IconButton classes={styles.arrowBtn} aria-label="show projects button">
          <SvgComponent name="arrow" classes={styles.arrowIcon} />
        </IconButton>
        <span className={styles.showSprintsTitle}>Show Sprints</span>
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
        <p className={styles.createButtonText}>Create Sprint</p>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default AsideSprint;
