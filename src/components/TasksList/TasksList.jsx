import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { tasksOperations, tasksSelectors } from '../../redux/tasks';
import TaskCard from '../TaskCard';
import styles from './TasksList.module.scss';

const TasksList = () => {
  const tasks = useSelector(tasksSelectors.getTasks);

  const { projectId, sprintId } = useParams();

  const dispatch = useDispatch();

  const onDeleteTask = useCallback(
    (projectId, sprintId, id) =>
      dispatch(tasksOperations.deleteTask(projectId, sprintId, id)),
    [dispatch],
  );

  return (
    <ul className={styles.CardList}>
      {tasks.map(({ id, name, scheduledHours }) => (
        <li className={styles.sprintCard} key={id}>
          <TaskCard
            name={name}
            scheduledHours={scheduledHours}
            handleDeleteTask={() => onDeleteTask(projectId, sprintId, id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
