import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './ModalProjects.module.scss';
import React, { useState } from 'react';

function ModalProjects({ onClick }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [validName, setValidName] = useState('valid');
  const [validText, setValidText] = useState('valid');

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
    if (!name) {
      setValidName('invalid');
    } else {
      setValidName('valid');
    }
    if (!description) {
      setValidText('invalid');
    } else {
      setValidText('valid');
    }
  };

  return (
    <ModalBackdrop onClose={onClick}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Сreating a project</h2>
        <div className={styles.containerInput1}>
          <input
            className={[`${styles.input}`, `${styles[validName]}`].join(' ')}
            type="text"
            name="project-name"
            placeholder="Project name"
            value={name}
            onChange={handleInputChange}
            autoComplete="off"
            id="text"
          ></input>
          {validName === 'invalid' && (
            <p className={styles.helper}>*This field is required</p>
          )}
        </div>
        <div className={styles.containerInput2}>
          <textarea
            className={[`${styles.textarea}`, `${styles[validText]}`].join(' ')}
            name="description"
            placeholder="Description"
            type="text"
            value={description}
            onChange={handleInputChange}
            autoComplete="off"
          ></textarea>
          {validText === 'invalid' && (
            <p className={styles.helper2}>*This field is required</p>
          )}
        </div>

        <div className={styles.buttons}>
          <button className={styles.button1} type="submit">
            Ready
          </button>
          <button className={styles.button2} onClick={onClick}>
            Cancel
          </button>
        </div>
        <IconButton
          classes={styles.closeBtn}
          aria-label="close window"
          onClick={onClick}
        >
          <SvgComponent name="close" classes={styles.closeIcon} />
        </IconButton>
      </form>
    </ModalBackdrop>
  );
}

export default ModalProjects;
