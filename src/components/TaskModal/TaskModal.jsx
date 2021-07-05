// TaskModal.jsx;

import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './TaskModal.module.scss';
import React, { useState } from 'react';

function TaskModal({ onCloseModal }) {
  const [nameTask, setNameTask] = useState('');
  const [durationTask, setDuration] = useState('');

  const [validTask, setValidTask] = useState('valid');
  const [validDuration, setValidDuration] = useState('valid');

  const handleInputChange = event => {
    const valueInput = event.currentTarget.name;

    switch (valueInput) {
      case 'task-name':
        setNameTask(event.currentTarget.value);

        break;

      case 'duration-task':
        setDuration(event.currentTarget.value);

        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!nameTask) {
      setValidTask('invalid');
    } else {
      setValidTask('valid');
    }
    if (!durationTask) {
      setValidDuration('invalid');
    } else {
      setValidDuration('valid');
    }
  };

  return (
    <ModalBackdrop onClose={onCloseModal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Creating a task</h2>
        <div className={styles.containerInput1}>
          <input
            className={[`${styles.input}`, `${styles[validTask]}`].join(' ')}
            type="text"
            name="task-name"
            placeholder="Task name"
            value={nameTask}
            onChange={handleInputChange}
            autoComplete="off"
          ></input>
          {validTask === 'invalid' && (
            <p className={styles.helper}>*This field is required</p>
          )}
        </div>
        <div className={styles.containerInput2}>
          <input
            className={[`${styles.input2}`, `${styles[validDuration]}`].join(
              ' ',
            )}
            // className={styles.input2}
            name="duration-task"
            placeholder="Scheduled hours"
            type="text"
            value={durationTask}
            onChange={handleInputChange}
            autoComplete="off"
          ></input>
          {validDuration === 'invalid' && (
            <p className={styles.helperText}>*This field is required</p>
          )}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1} type="submit">
            Ready
          </button>
          <button className={styles.button2} onClick={onCloseModal}>
            Cancel
          </button>
        </div>
        <IconButton
          classes={styles.closeBtn}
          aria-label="add people button"
          onClick={onCloseModal}
        >
          <SvgComponent name="close" classes={styles.closeIcon} />
        </IconButton>
      </form>
    </ModalBackdrop>
  );
}

export default TaskModal;
