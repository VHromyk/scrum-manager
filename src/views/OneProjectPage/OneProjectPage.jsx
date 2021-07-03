import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import AddButton from '../../components/AddButton';
import styles from './OneProjectPage.module.scss';
import SprintsList from '../../components/SprintsList';
import Container from '../../components/Container';
import SvgComponent from '../../components/SvgComponent';
import IconButton from '../../components/IconButton';
import Aside from '../../components/Aside';
import AsideListProject from '../../components/AsideListProject';
import SprintModal from '../../components/SprintModal';
import ModalProjects from '../../components/ModalProjects';
import AddPeople from '../../components/AddPeople';
import { useParams } from 'react-router-dom';

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
  const [showInput, setShowInput] = useState(true);
  const [showIcon, setShowIcon] = useState(true);
  const [newName, setNewName] = useState('');

  const { projectId } = useParams();

  // const sprints = useSelector(sprintsSelectors.getAllSprints);
  const projects = useSelector(projectsSelectors.getAllProjects);
  const dispatch = useDispatch();

  const currentProject = projects.find(({ id }) => id === projectId);

  const onRenameProject = ({ projectId, newName }) =>
    dispatch(projectsOperations.renameProject({ projectId, newName }));

  const changeIcon = () => {
    setShowIcon(false);
    setShowInput(false);
  };

  const changeInputName = e => {
    setNewName(e.target.value);
  };

  const onSubmitRenameNAme = e => {
    e.preventDefault();
    onRenameProject(projectId, newName);
    setShowInput(true);
    setShowIcon(true);
  };

  useEffect(() => {
    dispatch(sprintsOperations.fetchSprints(projectId));
  }, [dispatch]);

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
              {showInput ? (
                <h2 className={styles.title}>{currentProject.name}</h2>
              ) : (
                <form onSubmit={onSubmitRenameNAme}>
                  <input
                    value={newName}
                    name="name"
                    id="name"
                    type="name"
                    onChange={changeInputName}
                  ></input>
                  <button onSubmit={onSubmitRenameNAme}></button>
                </form>
              )}
              {showIcon && (
                <>
                  <IconButton
                    classes={styles.projectBtn}
                    aria-label="edit name button"
                    onClick={changeIcon}
                  >
                    <SvgComponent name="project" classes={styles.projectIcon} />
                  </IconButton>
                </>
              )}
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
            <SprintsList />
          ) : (
            <p className={styles.warningMessage}>
              You don't have any sprints yet
            </p>
          )}
        </div>

        {createProject && <ModalProjects onClick={buttonCloseHandler} />}
        {createSprint && (
          <SprintModal onClick={btnCloseSprint} projectID={projectId} />
        )}
        {addPeople && <AddPeople onClick={btnCloseAddPeople} />}
      </div>
    </Container>
  );
};

export default OneProjectPage;
