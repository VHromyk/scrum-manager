import { useSelector } from 'react-redux';
import { tasksSelectors } from '../../redux/tasks';
import TasksList from '../TasksList';
import styles from './SprintTable.module.scss';

const SprintTable = ({ currentDate }) => {
  const tasks = useSelector(tasksSelectors.getTasks);

  return (
    <div className={styles.sprintNameContainer}>
      <ul className={styles.sprintHeader}>
        <li className={styles.sprintFieldNameTask}>Task</li>
        <li className={styles.sprintFieldName}>Sheduled hours</li>
        <li className={styles.sprintFieldName}>Spent hour/day</li>
        <li className={styles.sprintFieldName}>Hours spent</li>
        <li className={styles.sprintSearcHeaderBtn}>
          {/* <IconButton
            classes={styles.deleteSprintBtn}
            aria-label="delete sprint button"
          >
            <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
          </IconButton> */}
        </li>
      </ul>
      <div className={styles.headerLineWrapper}>
        <hr className={styles.headerLine} />
      </div>
      {tasks.length !== 0 ? (
        <TasksList currentDate={currentDate} />
      ) : (
        <p className={styles.warningMessage}>
          This sprint has no tasks yet. To create a task, use the button above
        </p>
      )}
    </div>
  );
};

export default SprintTable;
