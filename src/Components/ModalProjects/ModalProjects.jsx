import PropTypes from 'prop-types';
import ModalBackdrop from '../ModalBackdrop';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './ModalProjects.module.scss';

const ModalProjects = () => (
  <ModalBackdrop>
    <form className={styles.form}>
      <h2 className={styles.title}>Сreating a project</h2>
      <input
        className={styles.input}
        type="text"
        name="project-name"
        placeholder="Project name"
        required
      ></input>
      <input
        className={styles.input2}
        name="description"
        placeholder="Description"
      ></input>
      <div className={styles.buttons}>
        <button className={styles.button1}>Ready</button>
        <button className={styles.button2}>Cancel</button>
      </div>
    </form>

    <IconButton classes={styles.closeBtn} aria-label="add people button">
      <SvgComponent name="close" classes={styles.closeIcon} />
    </IconButton>
  </ModalBackdrop>
);

ModalProjects.propTypes = {
  children: PropTypes.node,
};

export default ModalProjects;
