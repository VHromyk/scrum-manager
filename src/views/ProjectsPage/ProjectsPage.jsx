import React, { useState } from 'react';
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

  return (
    <Container>
      <div className={styles.containerPage}>
        <div className={styles.containerTitle}>
          <h1>Projects</h1>
          <div className={styles.containerButton}>
            <AddButton onClick={buttonHandler} />
            <p className={styles.buttonName}>Create a project</p>
          </div>
        </div>
        <ProjectList />
        {showModal && <ModalProjects onClick={buttonCloseHandler} />}
      </div>
    </Container>
  );
};

export default ProjectsPage;
