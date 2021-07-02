import React from 'react';
import styles from './AsideListProject.module.scss';
import bcgColors from '../../projectCardBcgColors';

const colorsNumber = bcgColors.length;

const getRandomInt = max => Math.floor(Math.random() * max);

const projectsList = [
  { id: 'id-1', name: 'Project 1' },
  { id: 'id-2', name: 'Very long project name' },
  { id: 'id-3', name: 'Project 3' },
  { id: 'id-4', name: 'Very long project name' },
  { id: 'id-5', name: 'Project 5' },
  { id: 'id-6', name: 'Project 6' },
  { id: 'id-7', name: 'Very long project name' },
  { id: 'id-8', name: 'Project 8' },
  { id: 'id-9', name: 'Project 9' },
];

const AsideListProject = () => {
  return (
    <div className={styles.asideListContainer}>
      <div className={styles.scroll}>
        <ul className={styles.asideList}>
          {projectsList.map(({ id, name }) => (
            <li key={id}>
              <div className={styles.squareName}>
                <div
                  className={styles.square}
                  style={{
                    backgroundColor:
                      bcgColors[`${getRandomInt(colorsNumber - 1)}`],
                  }}
                ></div>
                <p>{name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AsideListProject;
