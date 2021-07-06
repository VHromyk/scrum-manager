import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalBackdrop from '../ModalBackdrop';
import AddPeopleList from '../AddPeopleList';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import Button from '../Button';
import projectsSelectors from '../../redux/projects/projects-selectors';
import projectsOperations from '../../redux/projects/projects-operations';
import styles from './AddPeople.module.scss';
import { useParams } from 'react-router-dom';

function AddPeople({ onClick }) {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState('valid');

  const { projectId } = useParams();

  const handleInputChange = event => {
    setEmail(event.currentTarget.value);
  };

  const dispatch = useDispatch();
  const people = useSelector(projectsSelectors.getAllPeople);

  const reset = () => {
    setEmail('');
  };

  // const isInProject = people.find(
  //   newUser => newUser.email.toLowerCase() === email.toLowerCase(),
  // );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      if (!email) {
        setValidEmail('invalid');
        return;
      } else {
        setValidEmail('valid');
      }
      // if (isInProject) {
      //   alert(`User (${email}) is already in project`); //замінити на toast
      //   return;
      // }
      dispatch(projectsOperations.addPeople(projectId, { email }));
      reset();
    },
    [dispatch, projectId, email],
  );

  // useEffect(() => {
  //   dispatch(projectsOperations.fetchPeople(projectId));
  // }, [dispatch, projectId]);

  return (
    <ModalBackdrop onClose={onClick}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Add people</h2>
        <div className={styles.containerInput1}>
          <input
            className={[`${styles.input}`, `${styles[validEmail]}`].join(' ')}
            type="email"
            name="enter-email"
            placeholder="Enter e-mail"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Invalid email address"
          ></input>
          {validEmail === 'invalid' && (
            <p className={styles.helper}>*This field is required</p>
          )}
        </div>
        <div>
          <p className={styles.addedUsersTitle}>Added users:</p>
          {!people || people.length === 0 ? (
            <p className={styles.noUsers}>You have not added any users yet</p>
          ) : (
            <AddPeopleList people={people} projectId={projectId} />
          )}
        </div>
        <div className={styles.buttons}>
          <Button type="submit" text="Ready" />
          <button className={styles.button2} onClick={onClick}>
            Cancel
          </button>
        </div>
        <IconButton
          classes={styles.closeBtn}
          aria-label="close button"
          onClick={onClick}
        >
          <SvgComponent name="close" classes={styles.closeIcon} />
        </IconButton>
      </form>
    </ModalBackdrop>
  );
}

export default AddPeople;
