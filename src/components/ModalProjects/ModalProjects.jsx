import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { projectsOperations } from '../../redux/projects';
import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import Button from '../Button';
import styles from './ModalProjects.module.scss';

const ModalProjects = ({ onClick }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const [validName, setValidName] = useState('valid');
  const [validText, setValidText] = useState('valid');

  const handleInputChange = event => {
    const valueInput = event.currentTarget.name;
    console.log('name.length:', name.length);
    console.log('description.length:', description.length);

    // const nameLengthLimits = name.length > 3 && name.length < 41;
    // const descriptionLengthLimits = description.length > 3;

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

    // if (name && !nameLengthLimits) {
    //   setValidName('invalidLength');
    //   return;
    // } else {
    //   setValidName('valid');
    // }

    // if (description && !descriptionLengthLimits) {
    //   setValidText('invalidLength');
    //   return;
    // } else {
    //   setValidText('valid');
    // }
  };

  const handleSubmit = event => {
    event.preventDefault();

    //  if (validName === 'invalidLength') {
    //    toast.error('Fill the fields correctly');
    //    return;
    //  }

    //  if (validText === 'invalidLength') {
    //    toast.error('Fill the fields correctly');
    //    return;
    // }

    // if (!name) {
    //   setValidName('invalid');
    //   return;
    // } else {
    //   setValidName('valid');
    // }

    // if (!description) {
    //   setValidText('invalid');
    //   return;
    // } else {
    //   setValidText('valid');
    // }

    const nameLengthLimits = name.length > 3 && name.length < 41;
    const descriptionLengthLimits = description.length > 3;

    if (!name) {
      setValidName('invalid');
      toast.error('Fill the fields correctly');
      return;
    } else if (!nameLengthLimits) {
      setValidName('invalidLength');
      toast.error('Fill the fields correctly');
      return;
    } else {
      setValidName('valid');
    }

    if (!description) {
      setValidText('invalid');
      toast.error('Fill the fields correctly');
      return;
    } else if (description && !descriptionLengthLimits) {
      setValidText('invalidLength');
      toast.error('Fill the fields correctly');
      return;
    } else {
      setValidText('valid');
    }

    dispatch(projectsOperations.addProject({ name, description }));
    onClick();
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
          <button className={styles.cancelBtn} onClick={onClick}>
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
};

export default ModalProjects;
