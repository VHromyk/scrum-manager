import React from 'react';
import styles from './AsideListProject.module.scss';

const AsideListProject = () => {
  return (
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
  );
};

export default AsideListProject;
