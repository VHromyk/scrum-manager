import styles from './AddPeopleList.module.scss';

const users = [
    { id: 'id-1', email: 'vitaly@gmail.com' },
    { id: 'id-2', email: 'lena@gmail.com' },
    { id: 'id-3', email: 'nataly@gmail.com' },
    { id: 'id-4', email: 'halyna@gmail.com' },
    { id: 'id-5', email: 'dima@gmail.com' },
]

// const users = [];

const AddPeopleList = () => {
    return (
        <ul className={styles.addPeopleList}>
            {users.map(user => (
                <li
                    key={user.id}
                    className={styles.addPeopleListItem}
                >
                    {user.email}
                </li>
            ))}
        </ul>
    );
};

export default AddPeopleList;