import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalBackdrop from '../ModalBackdrop';
import AddPeopleList from '../AddPeopleList';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import Button from '../Button';
import { peopleSelectors } from '../../redux/people';
import { peopleOperations } from '../../redux/people';
import styles from './AddPeople.module.scss';
import { useCallback } from 'react';

function AddPeople({ onClick, projectId }) {  
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState('valid');
  
  const handleInputChange = event => {
    setEmail(event.currentTarget.value);
  };
  
  const dispatch = useDispatch();
  const people = useSelector(peopleSelectors.getAllPeople);
  const reset = () => {
    setEmail('');
  };
  
  const isInProject = people.find(
    newUser => newUser.email.toLowerCase() === email.toLowerCase(),
  );
  
  const handleSubmit = useCallback(event => {
    event.preventDefault();
    if (!email) {
      setValidEmail('invalid');
    } else {
      setValidEmail('valid');
    }
    if (isInProject) {
      alert(`User (${email}) is already in project`); //замінити на toast
      return;
    }
    dispatch(peopleOperations.addPeople({ projectId, email }));
    reset();
  }, [dispatch, projectId, email, isInProject]);
  
  useEffect(() => {
    dispatch(peopleOperations.fetchPeople(projectId));
  }, [dispatch, projectId]);
  
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
            <AddPeopleList people={people} />
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
