import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './ProjectsListItem.module.scss';

export default function ProjectsListItem({
  name,
  description,
  onDeleteProject,
}) {
  return (
    <>
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>

      <IconButton
        classes={styles.deleteProjectBtn}
        onClick={onDeleteProject}
        aria-label="delete project button"
      >
        <SvgComponent name="delete" classes={styles.deleteProjectIcon} />
      </IconButton>
    </>
  );
}

ProjectsListItem.defaultProps = {
  description: '',
};

ProjectsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDeleteProject: PropTypes.func.isRequired,
};
