import React from 'react';
import styles from './AsideListSprint.module.scss';

const AsideListSprint = () => {
  return (
    <div className={styles.asideListContainer}>
      <div className={styles.scroll}>
        <ul className={styles.asideList}>
          <li>
            <div className={styles.squareName}>
              <div className={styles.square}></div>
              <p>Sprint Burndown Chart 1</p>
            </div>
          </li>
          <li>
            <div className={styles.squareName}>
              <div className={styles.square}></div>
              <p>Sprint Burndown Chart 2</p>
            </div>
          </li>
          <li>
            <div className={styles.squareName}>
              <div className={styles.square}></div>
              <p>Sprint Burndown Chart 3</p>
            </div>
          </li>
          <li>
            <div className={styles.squareName}>
              <div className={styles.square}></div>
              <p>Sprint Burndown Chart 4</p>
            </div>
          </li>
          <li>
            <div className={styles.squareName}>
              <div className={styles.square}></div>
              <p>Sprint Burndown Chart 5</p>
            </div>
          </li>
          <li>
            <div className={styles.squareName}>
              <div className={styles.square}></div>
              <p>Sprint Burndown Chart 6</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AsideListSprint;
