import styles from './AddPeopleList.module.scss';

const AddPeopleList = ({ subscribers }) => {
  return (
    <ul className={styles.addPeopleList}>
      {subscribers.map(user => (
        <li key={user} className={styles.addPeopleListItem}>
          {user}
        </li>
      ))}
    </ul>
  );
};

export default AddPeopleList;
