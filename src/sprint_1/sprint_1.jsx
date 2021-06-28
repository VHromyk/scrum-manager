import React from 'react';
import PropTypes from 'prop-types';
import AddButton from '../Components/AddButton';
import IconButton from '../Components/IconButton/IconButton';
import styles from './sprint_1.module.scss'
import Container from '../Components/Container/Container'

import SprintTable from './sprint_table';

const Sprint = () => {
  return (
    <Container>
    <IconButton classes={styles.searchBtn} aria-label="search task button"/>
    <input className={styles.search_sprint}></input>
      <h1 className={styles.sprint_name}>Sprint Burndown Chart 1</h1>
      <button></button>
      <AddButton />
      <h2 className={styles.task_title}>Create a task</h2>
      <SprintTable/>
      <IconButton classes={styles.analyticsBtn} aria-label="open diagram button"/>
    </Container>
  );
};
export default Sprint;
