import ProjectList from '../ProjectsList';
import styles from './MainPage.module.scss';
import AddButton from '../AddButton';

const MainPage = ({ name, classes }) => {
  return (
    <div className={styles.containerPage}>
      <div className={styles.containerTitle}>
        <h1>Projects</h1>
        <div className={styles.containerButton}>
          <AddButton />
          <p className={styles.buttonName}>Create a project</p>
        </div>
      </div>

      <ProjectList />
    </div>
  );
};

export default MainPage;
