import { useSelector } from 'react-redux';
import { tasksSelectors } from '../../redux/tasks';
import TasksList from '../TasksList';
import Spinner from '../../components/Spinner';
import styles from './SprintTable.module.scss';

const SprintTable = ({ currentDate }) => {
  const isLoadingTasks = useSelector(tasksSelectors.getIsLoading);
  const tasks = useSelector(tasksSelectors.getTasks);

  return (
    <div className={styles.sprintNameContainer}>
      <ul className={styles.sprintHeader}>
        <li className={styles.sprintHeaderTask}>Task</li>
        <li className={styles.sprintFieldName}>Sheduled hours</li>
        <li className={styles.sprintFieldName}>Spent hour/day</li>
        <li className={styles.sprintFieldName}>Hours spent</li>
        <li className={styles.sprintSearchHeaderBtn}></li>
      </ul>
      <div className={styles.headerLineWrapper}>
        <hr className={styles.headerLine} />
      </div>

      {isLoadingTasks && <Spinner />}
      {!isLoadingTasks && tasks.length === 0 && (
        <p className={styles.warningMessage}>
          This sprint has no tasks yet. To create a task, use the button above
        </p>
      )}
      {!isLoadingTasks && tasks.length !== 0 && (
        <TasksList currentDate={currentDate} />
      )}
    </div>
  );
};

export default SprintTable;
