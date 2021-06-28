import PropTypes from 'prop-types';
import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './ModalProjects.module.scss';
import React, { useState } from 'react';

function ModalProjects() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleInputChange = event => {
    const valueInput = event.currentTarget.name;

    switch (valueInput) {
      case 'project-name':
        setName(event.currentTarget.value);

        break;

      case 'description':
        setDescription(event.currentTarget.value);

        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!name || !description) {
      console.log('Это поле обязательное для заполнения');
    }
  };

  return (
    <ModalBackdrop>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Сreating a project</h2>
        <input
          className={styles.input}
          type="text"
          name="project-name"
          placeholder="Project name"
          type="text"
          value={name}
          onChange={handleInputChange}
        ></input>
        {/* <p className={styles.helper}>Это поле обязательное для заполнения</p> */}
        <textarea
          className={styles.textarea}
          name="description"
          placeholder="Description"
          type="text"
          value={description}
          onChange={handleInputChange}
        ></textarea>

        <div className={styles.buttons}>
          <button className={styles.button1} type="submit">
            Ready
          </button>
          <button className={styles.button2}>Cancel</button>
        </div>
        <IconButton classes={styles.closeBtn} aria-label="add people button">
          <SvgComponent name="close" classes={styles.closeIcon} />
        </IconButton>
      </form>
    </ModalBackdrop>
  );
}

ModalProjects.propTypes = {
  children: PropTypes.node,
};

export default ModalProjects;
