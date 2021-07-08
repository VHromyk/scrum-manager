import React from 'react';

import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.title}>
        &#169; 2021 | All Rights Reserved | Developed with &#129505; by{' '}
        <span>GoIT Students</span>
      </p>
    </div>
  );
};

export default Footer;
