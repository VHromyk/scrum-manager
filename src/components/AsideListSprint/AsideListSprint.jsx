import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import { projectsSelectors } from '../../redux/projects';
import styles from './AsideListSprint.module.scss';
import { useParams } from 'react-router-dom';

const sprintsList = [
  { id: 'id-1', name: 'Sprint Burndown Chart' },
  { id: 'id-2', name: 'Sprint Burndown Chart 2' },
  { id: 'id-3', name: 'Sprint Burndown Chart  3' },
  { id: 'id-4', name: 'Sprint Burndown Chart 4' },
  { id: 'id-5', name: 'Sprint Burndown Chart 5' },
  { id: 'id-6', name: 'Sprint Burndown Chart 6' },
];

const AsideListSprint = () => {
  const sprints = useSelector(sprintsSelectors.getAllSprints);
  const { projectId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sprintsOperations.fetchSprints(projectId));
  }, [dispatch, projectId]);

  return (
    <div className={styles.asideListContainer}>
      <div className={styles.scroll}>
        <ul className={styles.asideList}>
          {sprints.map(({ id, name }) => (
            <li key={id}>
              <div className={styles.squareName}>
                <div className={styles.square}></div>
                <p>{name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AsideListSprint;
