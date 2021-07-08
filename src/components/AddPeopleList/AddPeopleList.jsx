import styles from './AddPeopleList.module.scss';
// import { uuid } from 'uuidv4';

const AddPeopleList = ({ subscribers }) => {
  return (
    <ul className={styles.addPeopleList}>
      {subscribers.map(user => (
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
