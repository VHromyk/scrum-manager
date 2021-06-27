import React from 'react';
import styles from './ModalBackdrop.module.scss';
import PropTypes from 'prop-types';

const ModalBackdrop = ({ children }) => (
  <div className={styles.backdrop}>{children}</div>
);

ModalBackdrop.propTypes = {
  children: PropTypes.node,
};

export default ModalBackdrop;
