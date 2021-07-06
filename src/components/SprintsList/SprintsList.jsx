import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import SprintCard from '../SprintCard';
import styles from './SprintsList.module.scss';

const SprintsList = () => {
  const sprints = useSelector(sprintsSelectors.getAllSprints);
  const { projectId } = useParams();

  const dispatch = useDispatch();

  const onDeleteSprint = useCallback(
    (projectId, id) => dispatch(sprintsOperations.deleteSprint(projectId, id)),
    [dispatch],
  );

  return (
    <ul className={styles.sprintsList}>
      {sprints.map(({ id, name, startDate, endDate, duration }) => (
        <li className={styles.listItem} key={id}>
          <SprintCard
            id={id}
            name={name}
            startDate={startDate}
            endDate={endDate}
            duration={duration}
            handleDeleteSprint={() => onDeleteSprint(projectId, id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SprintsList;
