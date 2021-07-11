import PropTypes from 'prop-types';
import { useState } from 'react';
import IconButton from '../../components/IconButton';
import SvgComponent from '../../components/SvgComponent';
import styles from './EditNameForm.module.scss';

const EditNameForm = ({ currentName, onChangeName }) => {
  const [editName, setEditName] = useState(false);
  const [newName, setNewName] = useState('');

  const handleInputChange = e => setNewName(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const validName = validateNewName(newName);

    if (validName) {
      onChangeName(newName);
    }

    setEditName(false);
  };

  const minNameLength = 4;
  const maxNameLength = 30;

  const validateNewName = name => {
    const newNameLengthLimits =
      name.length >= minNameLength && name.length <= maxNameLength;

    if (!name) {
      return false;
    }

    if (name === currentName) {
      return false;
    }

    if (!newNameLengthLimits) {
      return false;
    }

    return true;
  };

  const handleEditBtnClick = () => {
    setEditName(true);
    setNewName(currentName);
  };

  return (
    <>
      {!editName ? (
        <>
          <h1 className={styles.currentName}>{currentName}</h1>
          <IconButton
            aria-label="edit name button"
            onClick={handleEditBtnClick}
            classes={styles.editNameBtn}
          >
            <SvgComponent name="project" classes={styles.editNameIcon} />
          </IconButton>
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          onBlur={handleSubmit}
          className={styles.form}
        >
          <input
            id="name"
            name="name"
            type="name"
            value={newName}
            onChange={handleInputChange}
            autoFocus
            autoComplete="off"
            className={styles.currentNameInput}
          ></input>
          <IconButton
            aria-label="confirm changes"
            type="submit"
            classes={styles.doneBtn}
          >
            <SvgComponent name="done" classes={styles.doneIcon} />
          </IconButton>

          {(newName.length < minNameLength ||
            newName.length > maxNameLength) && (
            <p
              className={styles.warningMessage}
            >{`*Enter name between ${minNameLength} and ${maxNameLength} characters long. Current length is ${newName.length} characters`}</p>
          )}
        </form>
      )}
    </>
  );
};

EditNameForm.propTypes = {
  currentName: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
};

export default EditNameForm;
