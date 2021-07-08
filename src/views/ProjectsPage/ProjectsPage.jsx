import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import Container from '../../components/Container';
import ProjectList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';
import ModalProjects from '../../components/ModalProjects';
import Footer from '../../components/Footer';
import styles from './ProjectsPage.module.scss';

const ProjectsPage = () => {
  const isLoading = useSelector(projectsSelectors.getIsLoading);
  const error = useSelector(projectsSelectors.getError);
  const projects = useSelector(projectsSelectors.getAllProjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    dispatch(projectsOperations.fetchProjects());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const buttonHandler = () => {
    setShowModal(true);
  };

  const buttonCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Container classes={styles.pageContainer}>
        <div className={styles.containerTitle}>
          <h1>Projects</h1>
          <div className={styles.containerButton}>
            <AddButton onClick={buttonHandler} />
            <p className={styles.buttonName}>Create a project</p>
          </div>
        </div>
        {!error && !isLoading && projects.length === 0 && (
          <p className={styles.warningMessage}>
            You don't have any projects yet
          </p>
        )}
        {projects.length !== 0 && <ProjectList />}

        {showModal && <ModalProjects onCloseModal={buttonCloseHandler} />}
      </Container>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
