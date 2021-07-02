import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import SvgComponent from '../SvgComponent/SvgComponent';
import styles from './SprintsCard.module.scss';

const SprintTable = ({ sprintName }) => {
  // const deleteTask = ()=> {
  //      dispatch(deteteTask(value, userToken, tasks));
  // }
  return (
    <div className={styles.sprintNameContainer}>
      <ul className={styles.sprintHeader}>
        <li className={styles.sprintFieldNameTask}>Task</li>
        <li className={styles.sprintFieldName}>Sheduled hours</li>
        <li className={styles.sprintFieldName}>Spent hour/day</li>
        <li className={styles.sprintFieldName}>Hours spent</li>
        <li className={styles.sprintSearcHeaderBtn}>
          <IconButton
            classes={styles.searchBtnHeader}
            aria-label="search task button"
          >
            <SvgComponent
              name="search"
              classes={styles.searchIconHeader}
              type="submit"
            />
          </IconButton>
        </li>
      </ul>
      <div className={styles.headerLineWrapper}>
        <hr className={styles.headerLine} />
      </div>
      {/* {newTask.map((task) => ( */}
      <li className={styles.sprintCard}>
        <ul className={styles.sprintCardList}>
          <li className={styles.sprintTitle}>
            <input className={styles.sprintNameInput}></input>
          </li>
          <li className={styles.sprintItem}>
            <span className={styles.sprintSpan}>Sheduled hours</span>
            <span>5</span>
          </li>
          <li className={styles.sprintItem}>
            <span className={styles.sprintSpan}>Spent hour/day</span>
            <input className={styles.sprintRowInput}></input>
          </li>
          <li className={styles.sprintItem}>
            <span className={styles.sprintSpan}>Hours spent</span>
            <span>5</span>
          </li>
          <li>
            <IconButton
              classes={styles.deleteSprintBtn}
              aria-label="delete sprint button"
            >
              <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
            </IconButton>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default SprintTable;
