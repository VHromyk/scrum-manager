import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './SprintCard.module.scss';

const SprintCard = ({
  id,
  sprintName,
  startDate,
  endDate,
  duration,
  handleDeleteSprint,
}) => (
  <li key={id} className={styles.SprintCard}>
    <p className={styles.SprintTitle}>{sprintName}</p>
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
    <IconButton
      classes={styles.deleteSprintBtn}
      onClick={() => handleDeleteSprint(id)}
      aria-label="delete sprint button"
    >
      <SvgComponent name="delete" classes={styles.deleteSprintIcon} />
    </IconButton>
  </li>
);

SprintCard.propTypes = {
  id: PropTypes.string.isRequired,
  sprintName: PropTypes.string.isRequired,
  sprintDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  handleDeleteSprint: PropTypes.func.isRequired,
};

export default SprintCard;
