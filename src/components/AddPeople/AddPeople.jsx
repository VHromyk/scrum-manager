import React, { useState } from 'react';
import ModalBackdrop from '../ModalBackdrop';
import AddPeopleList from '../AddPeopleList';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './AddPeople.module.scss';

const users = [
  { id: 'id-1', email: 'vitaly@gmail.com' },
  { id: 'id-2', email: 'lena@gmail.com' },
  { id: 'id-3', email: 'nataly@gmail.com' },
  { id: 'id-4', email: 'halyna@gmail.com' },
  { id: 'id-5', email: 'dima@gmail.com' },
];

// const users = [];

function AddPeople({ onClick }) {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState('valid');

  const handleInputChange = event => {
    setEmail(event.currentTarget.value);
  };

  const isInProject = users.find(
    newUser => newUser.email.toLowerCase() === email.toLowerCase(),
  );

  const handleSubmit = event => {
    event.preventDefault();
    if (!email) {
      setValidEmail('invalid');
    } else {
      setValidEmail('valid');
    }
    if (isInProject) {
      alert(`User (${email}) is already in project`);
      return;
    }
    reset();
  };

  const reset = () => {
    setEmail('');
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
        </div>
        <div>
          <p className={styles.addedUsersTitle}>Added users:</p>
          {!users || users.length === 0 ? (
            <p className={styles.noUsers}>You have not added any users yet</p>
          ) : (
            <AddPeopleList users={users} />
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
