import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectsOperations, projectsSelectors } from '../../redux/projects';
import ProjectsListItem from '../ProjectsListItem';
import bcgColors from '../../projectCardBcgColors';
import styles from './ProjectsList.module.scss';

const colorsNumber = bcgColors.length;

const getRandomInt = max => Math.floor(Math.random() * max);

// Генерація випадкового кольору
// const generateColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   console.log(randomColor);
//   return randomColor;
// };

const ProjectsList = () => {
  const projects = useSelector(projectsSelectors.getAllProjects);

  const dispatch = useDispatch();

  const onDeleteProject = useCallback(
    projectId => dispatch(projectsOperations.deleteProject(projectId)),
    [dispatch],
  );

  return (
    <ul className={styles.projectsList}>
      {projects.map(({ _id, name, description }) => (
        <li
          className={styles.listItem}
          key={_id}
          style={{
            backgroundPositionX: `${getRandomInt(100)}%`,

            // варіант 1: випадковий вибір кольору з масиву
            backgroundColor: bcgColors[`${getRandomInt(colorsNumber - 1)}`],

            // варіант 2: випадкова генерація кольору
            // backgroundColor: `#${generateColor()}`,
          }}
        >
          <ProjectsListItem
            name={name}
            description={description}
            onDeleteProject={() => onDeleteProject(_id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
