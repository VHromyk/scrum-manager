import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  projectId,
}) => {
  return (
    <>
      <Link to={`/projects/${projectId}/sprints/${id}`} key={id}>
        <div className={styles.SprintCard}>
          <p className={styles.SprintTitle}>{name}</p>
          <ul className={styles.SprintCardList}>
            <li className={styles.SprintItem}>
              <span>Start date</span>
              <span>{startDate}</span>
            </li>
            <li className={styles.SprintItem}>
              <span>End date</span>
              <span>{endDate}</span>
            </li>
            <li className={styles.SprintItem}>
              <span>Duration</span>
              <span>{duration}</span>
            </li>
          </ul>
        </div>
      </Link>
      <IconButton
        classes={styles.deleteSprintBtn}
        onClick={handleDeleteSprint}
        aria-label="delete sprint button"
      >
        <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
      </IconButton>
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
