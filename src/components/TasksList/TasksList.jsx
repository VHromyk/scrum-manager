import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { tasksOperations, tasksSelectors } from '../../redux/tasks';
import TaskCard from '../TaskCard';
import styles from './TasksList.module.scss';

const TasksList = () => {
  const tasks = useSelector(tasksSelectors.getVisibleTasks);

  const hoursSpent = tasks.reduce(
    (totalHours, task) => totalHours + task.spentTime,
    0,
  );

  const { projectId, sprintId } = useParams();
  const dispatch = useDispatch();

  const onDeleteTask = useCallback(
    (projectId, sprintId, id) =>
      dispatch(tasksOperations.deleteTask(projectId, sprintId, id)),
    [dispatch],
  );

  return (
    <ul className={styles.CardList}>
      {tasks.map(({ id, name, scheduledHours, spentTime }) => (
        <li className={styles.sprintCard} key={id}>
          <TaskCard
            id={id}
            name={name}
            scheduledHours={scheduledHours}
            hoursSpent={hoursSpent}
            spentTime={spentTime}
            handleDeleteTask={() => onDeleteTask(projectId, sprintId, id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
