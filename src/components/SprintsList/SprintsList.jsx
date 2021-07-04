import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import SprintCard from '../SprintCard';
import styles from './SprintsList.module.scss';

const SprintsList = () => {
  const sprints = useSelector(sprintsSelectors.getAllSprints);

  const dispatch = useDispatch();

  const onDeleteSprint = useCallback(
    sprintId => dispatch(sprintsOperations.deleteSprint(sprintId)),
    [dispatch],
  );

  return (
    <ul className={styles.sprintsList}>
      {sprints.map(({ id, name, startDate, endDate, duration }) => (
        <li className={styles.listItem} key={id}>
          <SprintCard
            id={id}
            startDate={startDate}
            endDate={endDate}
            name={name}
            duration={duration}
            handleDeleteSprint={() => onDeleteSprint(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SprintsList;
