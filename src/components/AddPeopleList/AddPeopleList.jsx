import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import projectsSelectors from '../../redux/projects/projects-selectors';
import projectsOperations from '../../redux/projects/projects-operations';
import styles from './AddPeopleList.module.scss';
// import { uuid } from 'uuidv4';

const AddPeopleList = ({ projectId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectsOperations.fetchPeople(projectId));
  }, [dispatch]);
  const people = useSelector(projectsSelectors.getAllPeople);

  return (
    <ul className={styles.addPeopleList}>
      {people.map(user => (
        <li
          // key={uuid()}
          className={styles.addPeopleListItem}
        >
          {user}
        </li>
      ))}
    </ul>
  );
};

export default AddPeopleList;
