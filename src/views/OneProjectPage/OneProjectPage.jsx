import React, { useState } from 'react';
import AddButton from '../../components/AddButton';
import styles from './OneProjectPage.module.scss';
import SprintsList from '../../components/SprintsList';
import Container from '../../components/Container';
import SvgComponent from '../../components/SvgComponent';
import IconButton from '../../components/IconButton';
import Aside from '../../components/Aside';
import AsideListProject from '../../components/AsideListProject';
import ModalProjects from '../../components/ModalProjects';
import Sprint from '../../components/Sprint';
import AddPeople from '../../components/AddPeople';

const sprints = [
  {
    id: 1,
    sprintName: 'mama',
    startDate: '02.03.2012',
    endDate: '02.03.2012',
    duration: 5,
    handleDeleteSprint: () => console.log('delete sprint'),
  },
  {
    id: 2,
    sprintName: 'dsfg',
    startDate: '02.03.2012',
    endDate: '02.03.2012',
    duration: 6,
    handleDeleteSprint: () => console.log('delete sprint'),
  },
  {
    id: 3,
    sprintName: 'sdgsg',
    startDate: '02.03.2012',
    endDate: '02.03.2012',
    duration: 7,
    handleDeleteSprint: () => console.log('delete sprint'),
  },
];

const OneProjectPage = () => {
  const [createProject, setCreateProject] = useState(false);
  const [createSprint, setCreateSprint] = useState(false);
  const [addPeople, setAddPeople] = useState(false);

  const buttonHandler = () => {
    setCreateProject(true);
  };
  const buttonCloseHandler = () => {
    setCreateProject(false);
  };

  const btnSprint = () => {
    setCreateSprint(true);
  };
  const btnCloseSprint = () => {
    setCreateSprint(false);
  };

  const btnAddPeople = () => {
    setAddPeople(true);
  };
  const btnCloseAddPeople = () => {
    setAddPeople(false);
  };

  return (
    <Container>
      <div className={styles.container}>
        <Aside
          createName="Create a project"
          showName="Show projects"
          onClick={buttonHandler}
        >
          <AsideListProject />
        </Aside>
        <div className={styles.headerProject}>
          <div className={styles.titleButtons}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>Project 1</h2>
              <IconButton
                classes={styles.projectBtn}
                aria-label="edit name button"
              >
                <SvgComponent name="project" classes={styles.projectIcon} />
              </IconButton>
            </div>

            <div className={styles.createSprint}>
              <AddButton onClick={btnSprint} />
              <h2 className={styles.createTitle}>Create a sprint</h2>
            </div>
          </div>
          <div class={styles.addPeopleContainer}>
            <IconButton
              classes={styles.addPeopleBtn}
              aria-label="add people button"
              onClick={btnAddPeople}
            >
              <SvgComponent name="add-people" classes={styles.addPeopleIcon} />
            </IconButton>
            <h3 class={styles.addPeopleTitle}>Add people</h3>
          </div>
          {sprints.length !== 0 ? (
            <SprintsList array={sprints} />
          ) : (
            <p className={styles.warningMessage}>
              You don't have any sprints yet
            </p>
          )}
        </div>
        {createProject && <ModalProjects onClick={buttonCloseHandler} />}
        {createSprint && <Sprint onClick={btnCloseSprint} />}
        {addPeople && <AddPeople onClick={btnCloseAddPeople} />}
      </div>
    </Container>
  );
};

export default OneProjectPage;
