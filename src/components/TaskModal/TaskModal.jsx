// TaskModal.jsx;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tasksOperations } from '../../redux/tasks';
import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './TaskModal.module.scss';
import Button from '../Button';

function TaskModal({ onCloseModal, taskDate }) {
  const [nameTask, setNameTask] = useState('');
  const [durationTask, setDuration] = useState('');

  const [validTask, setValidTask] = useState('valid');
  const [validDuration, setValidDuration] = useState('valid');

  const { projectId, sprintId } = useParams();

  const dispatch = useDispatch();

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
    const nameLengthLimits = nameTask.length > 3 && nameTask.length < 41;
    let durationNumber = Number(durationTask);
    let expression = /^\d+/;

    if (!nameTask) {
      setValidTask('invalid');
      return;
    } else if (!nameLengthLimits) {
      setValidTask('invalidLength');
      return;
    } else {
      setValidTask('valid');
    }

    if (!durationTask) {
      setValidDuration('invalid');
      return;
    } else if (
      durationNumber === 0 ||
      durationNumber >= 24 ||
      expression.test(durationNumber) === false
    ) {
      setValidDuration('invalidNumber');
      return;
    } else {
      setValidDuration('valid');
    }

    const name = nameTask;
    const scheduledHours = durationTask;
    const task = { name, scheduledHours, taskDate };

    dispatch(tasksOperations.addTask(task, projectId, sprintId));
    onCloseModal();
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
          {validTask === 'invalidLength' && (
            <p
              className={styles.helper}
            >{`*Enter name between 4 and 40 characters long. Current length is ${nameTask.length} characters`}</p>
          )}
        </div>
        <div className={styles.containerInput2}>
          <input
            className={[`${styles.input2}`, `${styles[validDuration]}`].join(
              ' ',
            )}
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
          {validDuration === 'invalidNumber' && (
            <p
              className={styles.helperText}
            >{`*Please enter a number from 1 to 24`}</p>
          )}
        </div>
        <div className={styles.buttons}>
          <Button type="submit" text="Ready" />
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
