import { useMedia } from 'react-use';
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import AddButton from '../AddButton';
import ModalProjects from '../../components/ModalProjects';
import styles from './Aside.module.scss';

const Aside = ({ createName, showName, children }) => {
  const [showModal, setShowModal] = useState(false);

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
        <div className={styles.asideArrow}>
          <IconButton
            classes={styles.arrowBtn}
            aria-label="show projects button"
          >
            <SvgComponent name="arrow" classes={styles.arrowIcon} />
          </IconButton>
          <p className={styles.arrowText}>{showName}</p>
        </div>
        {children}
        {isWide && (
          <div className={styles.createButton}>
            <AddButton onClick={buttonHandler} />

            <p className={styles.createButtonText}>{createName}</p>
          </div>
        )}

        {showModal && <ModalProjects onCloseModal={buttonCloseHandler} />}
      </div>
    </div>
  );
};

export default Aside;
