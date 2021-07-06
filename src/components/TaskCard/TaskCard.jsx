import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './TaskCard.module.scss';

const TaskCard = ({ name, scheduledHours, onDeleteTask }) => {
  return (
    <li className={styles.sprintCard}>
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
    </li>
  );
};

TaskCard.defaultProps = {
  description: '',
};

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDeleteProject: PropTypes.func.isRequired,
};

export default TaskCard;
