import React from 'react';
import styles from './AsideListSprint.module.scss';

const sprintsList = [
  { id: 'id-1', name: 'Sprint Burndown Chart' },
  { id: 'id-2', name: 'Sprint Burndown Chart 2' },
  { id: 'id-3', name: 'Sprint Burndown Chart  3' },
  { id: 'id-4', name: 'Sprint Burndown Chart 4' },
  { id: 'id-5', name: 'Sprint Burndown Chart 5' },
  { id: 'id-6', name: 'Sprint Burndown Chart 6' },
];

const AsideListSprint = () => {
  return (
    <div className={styles.asideListContainer}>
      <div className={styles.scroll}>
        <ul className={styles.asideList}>
          {sprintsList.map(({ id, name }) => (
            <li key={id}>
              <div className={styles.squareName}>
                <div className={styles.square}></div>
                <p>{name}</p>
              </div>
            </li>
          ))}
          {/* <li>
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
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AsideListSprint;
