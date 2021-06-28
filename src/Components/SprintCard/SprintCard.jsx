import React from 'react';
import PropTypes from 'prop-types';
import SvgComponent from '../SvgComponent';
import styles from './SprintCard.module.scss';

const SprintCard = ({ id, sprintName, startDate, endDate, duration, handleDeleteSprint }) => (
  <li key={id} className={SprintCard}>
    <p className={styles.SprintTitle}>{sprintName}</p>
    <ul className={styles.SprintCardList}>
      <li className={styles.SprintItem}><span>Start date</span><span>{startDate}</span></li>
      <li className={styles.SprintItem}><span>End date</span><span>{endDate}</span></li>
      <li className={styles.SprintItem}><span>Duration</span><span>{duration}</span></li>
    </ul>
    <button className={styles.Btn} onClick={() => handleDeleteSprint(id)}><SvgComponent name='delete-grey' width='20px' height='20px' /></button>
  </li>
)

SprintCard.propTypes = {
  id: PropTypes.string.isRequired,
  sprintName: PropTypes.string.isRequired,
  sprintDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  handleDeleteSprint: PropTypes.func.isRequired,
};

export default SprintCard;