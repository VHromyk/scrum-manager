import React from 'react';
import styles from './ModalProjects.module.scss';
import PropTypes from 'prop-types';
import ModalBackdrop from '../ModalBackdrop';
import Icons from '../../images/sprite.svg';

const ModalProjects = () => (
  <ModalBackdrop>
    <div className={styles.modal}>
      <form className={styles.form}>
        <h2 className={styles.title}>Сreating a project</h2>
        <input
          className={styles.input}
          type="text"
          name="project-name"
          placeholder="Project name"
          required
        ></input>
        <input
          className={styles.input2}
          name="description"
          placeholder="Description"
        ></input>
        <div className={styles.buttons}>
          <button className={styles.button1}>Ready</button>
          <button className={styles.button2}>Cancel</button>
        </div>
      </form>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonSvg}>
          <svg className={styles.svg}>
            <use xlinkHref={`${Icons}#icon-close `} />
          </svg>
        </button>
      </div>
    </div>
  </ModalBackdrop>
);

ModalProjects.propTypes = {
  children: PropTypes.node,
};

export default ModalProjects;
