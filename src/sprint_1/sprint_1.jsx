import React from 'react';
import PropTypes from 'prop-types';
import AddButton from '../Components/AddButton';
import IconButton from '../Components/IconButton/IconButton';
import SvgComponent from  '../Components/SvgComponent/SvgComponent';
import styles from './sprint_1.module.scss';
import Container from '../Components/Container/Container'

import SprintTable from './sprint_table';

const Sprint = () => {
  return (
    <>
    <div className={styles.ShowSprintsWrapper}>
     <IconButton classes={styles.arrowBtn} aria-label="show projects button">
      <SvgComponent name="arrow" classes={styles.arrowIcon} />
    </IconButton>
     <p className={styles.ShowSprintsTitle}>Show Sprints</p>
     </div>
    <Container>
    <IconButton classes={styles.searchBtn} aria-label="search task button">
      <SvgComponent name="search" classes={styles.searchIcon} />
    </IconButton>
    <input className={styles.searchSprint}></input>
      <h1 className={styles.sprint_name}>Sprint Burndown Chart 1</h1>
      <IconButton classes={styles.projectBtn} aria-label="edit name button">
      <SvgComponent name="project" classes={styles.projectIcon}/>
    </IconButton>
      <AddButton  />
      {/* <h2 className={styles.taskTitle}>Create a task</h2> */}
      <SprintTable/>
      {/* <IconButton classes={styles.analyticsBtn} aria-label="open diagram button"/> */}
    </Container>
      </>
  );

};
export default Sprint;
