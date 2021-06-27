import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.scss';
import Ellipse from './../../images/desktop/orange-ellipse-desktop.png';

function Section({ children }) {
  return (
    <div className={s.section}>
      {children}
      <div className={s.divForImg}>
        <img src={Ellipse} alt="Ellipse" className={s.img} />
      </div>
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
