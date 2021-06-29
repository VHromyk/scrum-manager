import styles from './Sprint.module.scss';
import { useState } from 'react';

const Container = () => {
  const [sprintName, setSprintName] = useState('');
  return (
    <div className={styles.modal}>
      <form>
        <h2 className={styles.heading}>Creating a sprint</h2>
        <label>
          <input
            className={styles.sprintName}
            type="text"
            name="sprintName"
            onChange={e => setSprintName(e.target.value)}
            value={sprintName}
            required
          />
          <div className={styles.labelText}>The name of the sprint</div>
        </label>
        <input type="checkbox" />
      </form>
    </div>
  );
};

export default Container;
