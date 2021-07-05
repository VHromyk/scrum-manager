import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './ProjectsListItem.module.scss';

const ProjectsListItem = ({ id, name, description, onDeleteProject }) => {
  return (
    <>
      <Link
        to={`/projects/${id}`}
        className={styles.projectLink}
        label="project-details"
      >
        <h3 className={styles.projectName}>{name}</h3>
        <p className={styles.projectDescription}>{description}</p>
      </Link>
      <IconButton
        classes={styles.deleteProjectBtn}
        onClick={onDeleteProject}
        aria-label="delete project button"
      >
        <SvgComponent name="delete" classes={styles.deleteProjectIcon} />
      </IconButton>
    </>
  );
};

ProjectsListItem.defaultProps = {
  description: '',
};

ProjectsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDeleteProject: PropTypes.func.isRequired,
};

export default ProjectsListItem;
