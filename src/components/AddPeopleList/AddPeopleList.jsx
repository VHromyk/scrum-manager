import { useSelector } from 'react-redux';
import { peopleSelectors } from '../../redux/people';
import styles from './AddPeopleList.module.scss';

const AddPeopleList = () => {
    const people = useSelector(peopleSelectors.getAllPeople)
    return (
        <ul className={styles.addPeopleList}>
            {people.map(user => (
                <li
                    key={new Date().getUTCMilliseconds()}
                    className={styles.addPeopleListItem}
                >
                    {user.email}
                </li>
            ))}
        </ul>
    );
};

export default AddPeopleList;