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
      {sprints.map(({ sprintId, name, description }) => (
        <li className={styles.listItem}>
          <SprintCard
            id={sprintId}
            name={name}
            description={description}
            handleDeleteSprint={() => onDeleteSprint(sprintId)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SprintsList;
