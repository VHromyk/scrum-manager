import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tasksOperations } from '../../redux/tasks';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './TaskCard.module.scss';
import { toast } from 'react-toastify';

const TaskCard = ({
  id,
  name,
  scheduledHours,
  hoursSpent,
  spentTime,
  handleDeleteTask,
}) => {
  const [time, setTime] = useState(spentTime);

  const dispatch = useDispatch();
  const { projectId, sprintId } = useParams();

  const handleInputChange = e => setTime(e.target.value);

  const handleSubmit = (e, projectId, sprintId, taskId) => {
    e.preventDefault();

    if (time <= 0 || time > 24) {
      toast.warning('Enter a number greater than 0 and less than 24');
    } else {
      dispatch(tasksOperations.changeTask(projectId, sprintId, taskId, time));
    }
  };

  return (
    // <div className={styles.sprintCard}>
    <ul className={styles.sprintCardList}>
      <li className={styles.sprintTitle}>
        {name}
        {/* <input className={styles.sprintNameInput}>{nameTask}</input> */}
      </li>
      <li className={styles.sprintItem}>
        <span className={styles.sprintSpan}>Sheduled hours</span>
        <span>{scheduledHours}</span>
      </li>
      <li className={styles.sprintItem}>
        <span className={styles.sprintSpan}>Spent hour/day</span>
        <form
          onSubmit={e => {
            handleSubmit(e, projectId, sprintId, id);
          }}
          onBlur={e => {
            handleSubmit(e, projectId, sprintId, id);
          }}
        >
          <input
            className={styles.sprintRowInput}
            type="text"
            name="time"
            value={time}
            onChange={handleInputChange}
          />
        </form>
      </li>
      <li className={styles.sprintItem}>
        <span className={styles.sprintSpan}>Hours spent</span>
        <span>{hoursSpent}</span>
      </li>
      <li className={styles.sprintItem}>
        <IconButton
          classes={styles.deleteSprintBtn}
          onClick={handleDeleteTask}
          aria-label="delete sprint button"
        >
          <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
        </IconButton>
      </li>
    </ul>
    // </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scheduledHours: PropTypes.number.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default TaskCard;
