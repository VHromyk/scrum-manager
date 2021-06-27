import React from 'react';
import Icons from '../../images/sprite.svg'; // Path to your icons.svg
import PropTypes from 'prop-types';
import styles from './SvgComponent.module.scss';

const SvgComponent = ({ name, width, height }) => (
  <svg className={styles.name} width={width} height={height}>
    <use xlinkHref={`${Icons}#icon-${name} `} />
  </svg>
);

SvgComponent.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default SvgComponent;
