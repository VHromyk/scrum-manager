import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './TaskCard.module.scss';

const TaskCard = ({ name, scheduledHours, onDeleteTask }) => {
  return (
    // <div className={styles.sprintCard}>
    <div>
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
          <input className={styles.sprintRowInput}></input>
        </li>
        <li className={styles.sprintItem}>
          <span className={styles.sprintSpan}>Hours spent</span>
          <span>5</span>
        </li>
        <li>
          <IconButton
            classes={styles.deleteSprintBtn}
            onClick={onDeleteTask}
            aria-label="delete sprint button"
          >
            <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  scheduledHours: PropTypes.number.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskCard;
