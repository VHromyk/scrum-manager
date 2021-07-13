import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMedia } from 'react-use';
import { authOperations } from '../../redux/auth';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import AddButton from '../../components/AddButton';
import SprintsList from '../../components/SprintsList';
import Container from '../../components/Container';
import SvgComponent from '../../components/SvgComponent';
import IconButton from '../../components/IconButton';
import Aside from '../../components/Aside';
import AsideListProject from '../../components/AsideListProject';
import EditNameForm from '../../components/EditNameForm';
import SprintModal from '../../components/SprintModal';
import ModalProjects from '../../components/ModalProjects';
import AddPeople from '../../components/AddPeople';
import Spinner from '../../components/Spinner';
import styles from './OneProjectPage.module.scss';

const OneProjectPage = () => {
  const [createProject, setCreateProject] = useState(false);
  const [createSprint, setCreateSprint] = useState(false);
  const [addPeople, setAddPeople] = useState(false);

  const { projectId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    dispatch(sprintsOperations.fetchSprints(projectId));
  }, [dispatch, projectId]);

  const isLoadingSprints = useSelector(sprintsSelectors.getIsLoading);
  const sprints = useSelector(sprintsSelectors.getAllSprints);

  const projects = useSelector(projectsSelectors.getAllProjects);
  const currentProject = projects.find(({ id }) => id === projectId);

  // Зміна назви проекту
  const onRenameProject = newName =>
    dispatch(projectsOperations.renameProject({ projectId, newName }));

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

  const isWide = useMedia('(min-width: 768px)');

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
          <div className={styles.titleContainer}>
            <EditNameForm
              currentName={currentProject.name}
              onChangeName={onRenameProject}
            />
            <div className={styles.createSprintBtn}>
              <AddButton onClick={btnSprint} />
              {isWide && (
                <p className={styles.createSprintTitle}>Create a sprint</p>
              )}
            </div>
          </div>

          <p className={styles.projectDescription}>
            {currentProject.description}
          </p>

          <div className={styles.addPeopleContainer}>
            <IconButton
              classes={styles.addPeopleBtn}
              aria-label="add people button"
              onClick={btnAddPeople}
            >
              <SvgComponent name="add-people" classes={styles.addPeopleIcon} />
              <p className={styles.addPeopleTitle}>Add people</p>
            </IconButton>
          </div>

          {isLoadingSprints && <Spinner />}
          {!isLoadingSprints && sprints.length === 0 && (
            <p className={styles.warningMessage}>
              This project has no sprints yet. To create a sprint, use the
              button above
            </p>
          )}
          {!isLoadingSprints && sprints.length !== 0 && <SprintsList />}
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
