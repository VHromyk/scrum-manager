import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { projectsSelectors, projectsOperations } from '../../redux/projects';
import ModalBackdrop from '../ModalBackdrop';
import AddPeopleList from '../AddPeopleList';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import Button from '../Button';
import styles from './AddPeople.module.scss';

function AddPeople({ onClick }) {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState('valid');

  const { projectId } = useParams();
  const dispatch = useDispatch();

  const handleInputChange = event => setEmail(event.currentTarget.value);

  const projects = useSelector(projectsSelectors.getAllProjects);
  const currentUser = useSelector(authSelectors.getUserEmail);

  // Витягуємо масив owners поточного проекту
  const owners = projects.find(({ id }) => id === projectId).owners;

  // Фільтруємо масив owners, залишаємо тільки команду (видаляємо поточного користувача)
  const team = owners.filter(owner => owner !== currentUser);

  const reset = () => {
    setEmail('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const alreadyExist = team.includes(email);

    if (!email) {
      setValidEmail('noEmail');

      return;
    } else if (alreadyExist) {
      setValidEmail('alreadyExist');

      return;
    } else {
      setValidEmail('valid');
    }

    dispatch(projectsOperations.addPeople(projectId, { email }));
    reset();
  };

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
          {validEmail === 'alreadyExist' && (
            <p className={styles.helper}>*User is already in project</p>
          )}
        </div>
        <div>
          <p className={styles.addedUsersTitle}>Added users:</p>
          {team.length === 0 ? (
            <p className={styles.noUsers}>You have not added any users yet</p>
          ) : (
            <AddPeopleList subscribers={team} projectId={projectId} />
          )}
        </div>
        <div className={styles.buttons}>
          <Button
            type="submit"
            text="Ready"
            aria-label="add user to the team"
          />
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
