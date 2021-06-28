import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../Components/IconButton/IconButton';
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
            <ul className={styles.table_filling}>
              <li className={styles.sprintTitle} ><span >Sprint Name</span></li>
              <li className={styles.table_row}><span className={styles.table_row_text}>Sheduled hours</span><span>5</span></li>
              <li className={styles.table_row}><span className={styles.table_row_text}>Spent hour/day</span><input className={styles.table_row_input}></input></li>
              <li className={styles.table_row}><span className={styles.table_row_text}>Hours spent</span><span>5</span></li>
             <IconButton classes={styles.deleteSprintBtn} aria-label="delete sprint button"/>
             </ul>
          {/* )) */}
      {/* } */}
    </>
  );
};

export default SprintTable;
