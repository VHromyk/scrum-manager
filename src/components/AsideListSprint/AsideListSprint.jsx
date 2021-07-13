import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import styles from './AsideListSprint.module.scss';

const AsideListSprint = ({ onClick }) => {
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
              <NavLink
                to={`/projects/${projectId}/sprints/${id}`}
                label="sprint-details"
                className={styles.current}
                activeClassName={styles.selected}
              >
                <div className={styles.squareName}>
                  <div className={styles.square}></div>
                  <p>{name}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AsideListSprint;
