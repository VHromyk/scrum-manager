import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../Components/IconButton/IconButton';
import SvgComponent from  '../Components/SvgComponent/SvgComponent';
import styles from './sprint_1.module.scss'

const SprintTable = ({sprintName}) => {
    // const deleteTask = ()=> {
    //      dispatch(deteteTask(value, userToken, tasks));
    // }
  return (
    <>
      <ul className={styles.table_header}>
        <li className={styles.table_colums}>{sprintName}</li>
        <li className={styles.table_colums}>Sheduled hours</li>
        <li className={styles.table_colums}>Spent hour/day</li>
        <li className={styles.table_colums}>Hours spent</li>
          </ul>
          {/* {newTask.map((task) => ( */}
            <li className={styles.SprintCard}>
            <ul className={styles.SprintCardList}>
              <li className={styles.SprintTitle}>
              <input className={styles.SprintNameInput}></input>
              </li>
              <li className={styles.SprintItem}>
              <span >Sheduled hours</span>
              <span>5</span>
              </li>
              <li className={styles.SprintItem}>
              <span >Spent hour/day</span>
              <input className={styles.SprintRowInput}></input>
              </li>
              <li className={styles.SprintItem}>
              <span >Hours spent</span>
              <span>5</span>
              </li>
              </ul>
               <IconButton
      classes={styles.deleteSprintBtn}
      
      aria-label="delete sprint button"
    >
      <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
    </IconButton>
    </li>
    </>
  );
};

export default SprintTable;