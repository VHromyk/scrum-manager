import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './SprintCard.module.scss';

const SprintCard = ({
  id,
  name,
  startDate,
  endDate,
  duration,
  handleDeleteSprint,
}) => {
  const { projectId } = useParams();

  return (
    <>
      {/* <div className={styles.SprintCard}> */}
      <Link
        to={`/projects/${projectId}/sprints/${id}`}
        className={styles.sprintLink}
        label="sprint-details"
      >
        <h3 className={styles.sprintName}>{name}</h3>
        <ul className={styles.sprintDetailsList}>
          <li className={styles.sprintDetails}>
            <span>Start date</span>
            <span>{startDate}</span>
          </li>
          <li className={styles.sprintDetails}>
            <span>End date</span>
            <span>{endDate}</span>
          </li>
          <li className={styles.sprintDetails}>
            <span>Duration</span>
            <span>{duration}</span>
          </li>
        </ul>
      </Link>

      <IconButton
        classes={styles.deleteSprintBtn}
        onClick={handleDeleteSprint}
        aria-label="delete sprint button"
      >
        <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
      </IconButton>
      {/* </div> */}
    </>
  );
};

SprintCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  handleDeleteSprint: PropTypes.func.isRequired,
};

export default SprintCard;
