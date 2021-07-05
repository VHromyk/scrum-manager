import { useMedia } from 'react-use';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import AddButton from '../AddButton';
import ModalProjects from '../ModalProjects';
import styles from './Aside.module.scss';

const Aside = ({ createName, showName, children }) => {
  const [showModal, setShowModal] = useState(false);

  const { projectId } = useParams();

  const buttonHandler = () => {
    setShowModal(true);
  };

  const buttonCloseHandler = () => {
    setShowModal(false);
  };

  const isWide = useMedia('(min-width: 768px)');

  return (
    <div className={styles.aside}>
      <div className={styles.asideWrapper}>
        {showName === 'Show projects' ? (
          <Link to="/projects">
            <button className={styles.asideArrow}>
              <IconButton
                classes={styles.arrowBtn}
                aria-label="show projects button"
              >
                <SvgComponent name="arrow" classes={styles.arrowIcon} />
              </IconButton>
              <p className={styles.arrowText}>{showName}</p>
            </button>
          </Link>
        ) : (
          <Link to={`/projects/${projectId}`}>
            <button className={styles.asideArrow}>
              <IconButton
                classes={styles.arrowBtn}
                aria-label="show projects button"
              >
                <SvgComponent name="arrow" classes={styles.arrowIcon} />
              </IconButton>
              <p className={styles.arrowText}>{showName}</p>
            </button>
          </Link>
        )}
        {children}
        {isWide && (
          <div className={styles.createButton}>
            <AddButton onClick={buttonHandler} />

            <p className={styles.createButtonText}>{createName}</p>
          </div>
        )}

        {showModal && <ModalProjects onCloseModal={buttonCloseHandler} />}
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Aside;
