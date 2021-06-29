import ProjectList from '../ProjectsList';
import styles from './MainPage.module.scss';
import AddButton from '../AddButton';
import ModalProjects from '../ModalProjects';
import React, { useState } from 'react';

function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const buttonHandler = () => {
    setShowModal(true);
  };
  const buttonCloseHandler = () => {
    setShowModal(false);
  };

  return (
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
  );
}

export default MainPage;
