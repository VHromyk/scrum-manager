import SvgComponent from '../SvgComponent';
import styles from './AddButton.module.scss';

const AddButton = ({ onClick }) => (
  <button
    type="button"
    aria-label="create new element"
    className={styles.button}
    onClick={onClick}
  >
    <SvgComponent name="create-btn" classes={styles.icon} />
  </button>
);

export default AddButton;
