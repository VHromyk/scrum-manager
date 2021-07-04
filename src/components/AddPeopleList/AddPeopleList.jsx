import { useSelector } from 'react-redux';
import projectsSelectors from '../../redux/projects/projects-selectors';
import styles from './AddPeopleList.module.scss';

const AddPeopleList = () => {
    const people = useSelector(projectsSelectors.getAllPeople)
    return (
        <ul className={styles.addPeopleList}>
            {people.map(user => (
                <li
                    key={new Date.now()}
                    className={styles.addPeopleListItem}
                >
                    {user.email}
                </li>
            ))}
        </ul>
    );
};

export default AddPeopleList;