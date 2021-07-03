import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import Container from '../../components/Container';
import ProjectList from '../../components/ProjectsList';
import AddButton from '../../components/AddButton';
import ModalProjects from '../../components/ModalProjects';
import styles from './ProjectsPage.module.scss';

const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const buttonHandler = () => {
    setShowModal(true);
  };
  const buttonCloseHandler = () => {
    setShowModal(false);
  };

  const projects = useSelector(projectsSelectors.getAllProjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectsOperations.fetchProjects());
  }, [dispatch]);

  return (
    <Container classes={styles.pageContainer}>
      <div className={styles.containerTitle}>
        <h1>Projects</h1>
        <div className={styles.containerButton}>
          <AddButton onClick={buttonHandler} />
          <p className={styles.buttonName}>Create a project</p>
        </div>
      </div>

      {projects.length !== 0 ? (
        <ProjectList />
      ) : (
        <p className={styles.warningMessage}>You don't have any projects yet</p>
      )}
      {showModal && <ModalProjects onCloseModal={buttonCloseHandler} />}
    </Container>
  );
};

export default ProjectsPage;
