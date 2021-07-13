import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { projectsOperations } from '../../redux/projects';
import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import Button from '../Button';
import styles from './ModalProjects.module.scss';

const ModalProjects = ({ onCloseModal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

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

    const nameLengthLimits = name.length >= 4 && name.length <= 35;
    const descriptionLengthLimits =
      description.length >= 4 && description.length <= 100;

    if (!name) {
      setValidName('invalid');

      return;
    } else if (!nameLengthLimits) {
      setValidName('invalidLength');

      return;
    } else {
      setValidName('valid');
    }

    if (!description) {
      setValidText('invalid');

      return;
    } else if (description && !descriptionLengthLimits) {
      setValidText('invalidLength');

      return;
    } else {
      setValidText('valid');
    }

    dispatch(projectsOperations.addProject({ name, description }));
    onCloseModal();
  };

  return (
    <ModalBackdrop onClose={onCloseModal}>
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
          {validName === 'invalidLength' && (
            <p
              className={styles.helper}
            >{`*Enter name between 4 and 40 characters long. Current length is ${name.length} characters`}</p>
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
          {validText === 'invalidLength' && (
            <p className={styles.helper2}>
              *Description length should be at least 4 characters
            </p>
          )}
        </div>

        <div className={styles.buttons}>
          <Button type="submit" text="Ready" />
          <button className={styles.cancelBtn} onClick={onCloseModal}>
            Cancel
          </button>
        </div>
        <IconButton
          classes={styles.closeBtn}
          aria-label="close window"
          onClick={onCloseModal}
        >
          <SvgComponent name="close" classes={styles.closeIcon} />
        </IconButton>
      </form>
    </ModalBackdrop>
  );
};

export default ModalProjects;
