import ProjectsListItem from '../ProjectsListItem';
import styles from './ProjectsList.module.scss';

// TODO: Обмежити довжину назви проекту під час його створення
const projects = [
  { id: 'id-1', name: 'Project 1', description: 'Project 1 description' },
  { id: 'id-2', name: 'Project 2', description: 'Project 2 description' },
  { id: 'id-3', name: 'Project 3', description: 'Project 3 description' },
  {
    id: 'id-4',
    name: 'Project 4. Very long project name. Very very long project name',
    description:
      'Project 4 description. Very long description of the project. Very very long description of the project',
  },
  {
    id: 'id-5',
    name: 'Project 5',
    description:
      'Project 5 description.  Very long description of the project. Very very long description of the project',
  },
  { id: 'id-6', name: 'Project 6', description: 'Project 6 description' },
  { id: 'id-7', name: 'Project 7', description: 'Project 7 description' },
  { id: 'id-8', name: 'Project 8', description: 'Project 8 description' },
  { id: 'id-9', name: 'Project 9', description: 'Project 9 description' },
  { id: 'id-10', name: 'Project 10', description: 'Project 10 description' },
  { id: 'id-11', name: 'Project 11', description: 'Project 11 description' },
  { id: 'id-12', name: 'Project 12', description: 'Project 12 description' },
  { id: 'id-13', name: 'Project 13', description: 'Project 13 description' },
  { id: 'id-14', name: 'Project 14', description: 'Project 14 description' },
  { id: 'id-15', name: 'Project 15', description: 'Project 15 description' },
];

const bcgColors = [
  '#2172f3',
  '#8c72df',
  '#71df87',
  '#bccb23',
  '#ff765f',
  '#63cdd7',
  '#9450b6',
  '#4caf50',
  '#ff6b08',
  '#086e80',
  '#5f1c64',
  '#009688',
  '#bd8f1b',
  '#e04507',
  '#795548',
  '#262490',
];

const colorsNumber = bcgColors.length;

const getRandomInt = max => Math.floor(Math.random() * max);

// const generateColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   console.log(randomColor);
//   return randomColor;
// };

export default function ProjectsList() {
  const onDeleteProject = id => {
    console.log(`Project ${id}`);
  };

  return (
    <ul className={styles.projectsList}>
      {projects.map(({ id, name, description }) => (
        <li
          className={styles.listItem}
          key={id}
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
            onDeleteProject={() => onDeleteProject(id)}
          />
        </li>
      ))}
    </ul>
  );
}
