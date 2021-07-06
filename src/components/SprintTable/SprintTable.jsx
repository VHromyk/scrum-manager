import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { tasksOperations, tasksSelectors } from '../../redux/tasks';
import TasksList from '../TasksList';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './SprintTable.module.scss';

const SprintTable = () => {
  const { sprintId } = useParams();
  const tasks = useSelector(tasksSelectors.getTasks);

  return (
    <div className={styles.sprintNameContainer}>
      <ul className={styles.sprintHeader}>
        <li className={styles.sprintFieldNameTask}>Task</li>
        <li className={styles.sprintFieldName}>Sheduled hours</li>
        <li className={styles.sprintFieldName}>Spent hour/day</li>
        <li className={styles.sprintFieldName}>Hours spent</li>
        <li className={styles.sprintSearcHeaderBtn}>
          <IconButton
            classes={styles.searchBtnHeader}
            aria-label="search task button"
          >
            <SvgComponent
              name="search"
              classes={styles.searchIconHeader}
              type="submit"
            />
          </IconButton>
        </li>
      </ul>
      <div className={styles.headerLineWrapper}>
        <hr className={styles.headerLine} />
      </div>
      <TasksList />
    </div>
  );
};

export default SprintTable;
