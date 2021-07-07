import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { useLocation } from '@reach/router';
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

const OneProjectPage = () => {
  const [createProject, setCreateProject] = useState(false);
  const [createSprint, setCreateSprint] = useState(false);
  const [addPeople, setAddPeople] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [showIcon, setShowIcon] = useState(true);
  const [newName, setNewName] = useState('');

  const { projectId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sprintsOperations.fetchSprints(projectId));
  }, [dispatch, projectId]);

  const sprints = useSelector(sprintsSelectors.getAllSprints);
  const projects = useSelector(projectsSelectors.getAllProjects);

  const currentProject = projects.find(({ id }) => id === projectId);
  console.log(currentProject.name);
  console.log(newName);
  const onRenameProject = (projectId, name) =>
    dispatch(projectsOperations.renameProject({ projectId, name }));

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
    setNewName(newName);
  };

  const onChangeName = name => {
    setNewName(name);
  };

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
          <AsideListProject onClick={onChangeName} />
        </Aside>
        <div className={styles.headerProject}>
          <div className={styles.titleButtons}>
            <div className={styles.titleContainer}>
              {showInput ? (
                <h2 className={styles.title}>
                  {newName || currentProject.name}
                </h2>
              ) : (
                <form
                  onSubmit={onSubmitRenameNAme}
                  className={styles.formChangeName}
                >
                  <input
                    autoFocus
                    className={styles.inputTitle}
                    value={newName === '' ? currentProject.name : newName}
                    name="name"
                    id="name"
                    type="name"
                    onChange={changeInputName}
                  ></input>
                  <IconButton
                    classes={styles.doneBtn}
                    aria-label="confirm changes"
                    type="submit"
                    onSubmit={onSubmitRenameNAme}
                  >
                    <SvgComponent name="done" classes={styles.doneIcon} />
                  </IconButton>
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
          <p className={styles.descriptionProject}>
            {currentProject.description}
          </p>

          <div className={styles.addPeopleContainer}>
            <IconButton
              classes={styles.addPeopleBtn}
              aria-label="add people button"
              onClick={btnAddPeople}
            >
              <SvgComponent name="add-people" classes={styles.addPeopleIcon} />
              <h3 className={styles.addPeopleTitle}>Add people</h3>
            </IconButton>
          </div>
          {sprints.length !== 0 ? (
            <SprintsList />
          ) : (
            <p className={styles.warningMessage}>Please, add some sprints</p>
          )}
        </div>

        {createProject && <ModalProjects onClick={buttonCloseHandler} />}
        {createSprint && (
          <SprintModal onCloseModal={btnCloseSprint} projectId={projectId} />
        )}
        {addPeople && <AddPeople onClick={btnCloseAddPeople} />}
      </div>
    </Container>
  );
};

export default OneProjectPage;
