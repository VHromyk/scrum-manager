import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { sprintsOperations, sprintstsSelectors } from '../../redux/sprints';
import SprintCard from '../SprintCard';
import styles from './SprintList.module.scss';

const SprintsList = () => {
  //   const sprints = useSelector(projectsSelectors.getAllSprints);

  //   const dispatch = useDispatch();

  //   const onDeleteSprint = useCallback(
  //     sprintId => dispatch(sprintsOperations.deleteProject(sprintId)),
  //     [dispatch],
  //   );

  return (
    <ul className={styles.sprintsList}>
      {sprints.map(({ _id, name, description }) => (
        <li className={styles.listItem}>
          <SprintCard
            name={name}
            description={description}
            handleDeleteSprint={() => onDeleteSprint(_id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SprintsList;
