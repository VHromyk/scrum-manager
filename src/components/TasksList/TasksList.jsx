import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasksOperations, tasksSelectors } from '../../redux/tasks';
import TaskCard from '../TaskCard';
import styles from './TasksList.module.scss';

const TasksList = () => {
  const tasks = useSelector(tasksSelectors.getTasks);

  const dispatch = useDispatch();

  const onDeleteTask = useCallback(
    projectId => dispatch(tasksOperations.deleteProject(projectId)),
    [dispatch],
  );

  return (
    <ul className={styles.CardList}>
      {tasks.map(({ id, name, scheduledHours }) => (
        <li className={styles.sprintCard} key={id}>
          <TaskCard
            name={name}
            scheduledHours={scheduledHours}
            onDeleteTask={() => onDeleteTask(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
