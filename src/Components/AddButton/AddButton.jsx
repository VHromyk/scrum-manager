import SvgComponent from '../SvgComponent';
import styles from './AddButton.module.scss';

const AddButton = () => (
  <button type="button" className={styles.button}>
    <SvgComponent name="create-btn" classes={styles.icon} />
  </button>
);

export default AddButton;
