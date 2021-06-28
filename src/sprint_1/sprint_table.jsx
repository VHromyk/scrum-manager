import React from 'react';
import PropTypes from 'prop-types';

const SprintTable = () => {
    const deleteTask = ()=> {
         dispatch(deteteTask(value, userToken, tasks));
    }
  return (
    <>
      <ul className={styles.table_header}>
        <li className={styles.table_colums}>Task</li>
        <li className={styles.table_colums}>Sheduled hours</li>
        <li className={styles.table_colums}>Spent hour/day</li>
        <li className={styles.table_colums}>Hours spent</li>
          </ul>
          <ul className={styles.table_filling}>
          {newTask.map((task) => (
              <li className={styles.table_row}><input className={styles.table_row_input}></input></li>
              <li className={styles.table_row}></li>
              <li className={styles.table_row}><input className={styles.table_row_input}></input></li>
              <li className={styles.table_row}></li>
              <button onClick={deleteTask}></button>
          ))
      }</ul>
    </>
  );
};

module.exports = SprintTable;
