import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import bcgColors from '../../projectCardBcgColors';
import styles from './AsideListProject.module.scss';

const colorsNumber = bcgColors.length;

const getRandomInt = max => Math.floor(Math.random() * max);

const AsideListProject = () => {
  const projects = useSelector(projectsSelectors.getAllProjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectsOperations.fetchProjects());
  }, [dispatch]);

  return (
    <div className={styles.asideListContainer}>
      <div className={styles.scroll}>
        <ul className={styles.asideList}>
          {projects.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={`/projects/${id}`}
                className={styles.current}
                activeClassName={styles.selected}
              >
                <div className={styles.squareName}>
                  <div
                    className={styles.square}
                    style={{
                      backgroundColor:
                        bcgColors[`${getRandomInt(colorsNumber - 1)}`],
                    }}
                  ></div>
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

export default AsideListProject;
