import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.scss';
import Ellipse from './../../images/desktop/orange-ellipse-desktop.png';
import Ellipse2 from './../../images/desktop/orange-ellipse-desktop@2x.png';
import EllipseTab from './../../images/tablet/orange-ellipse-tablet.png';
import EllipseTab2 from './../../images/tablet/orange-ellipse-tablet@2x.png';

function Section({ children }) {
  return (
    <div className={s.section}>
      {children}
      <picture>
        <source
          srcSet={EllipseTab + ' 1x,' + EllipseTab2 + ' 2x'}
          media="(max-width: 1170px)"
          sizes="(min-width: 480px) 480px, 100vw"
        />
        <source
          srcSet={Ellipse + ' 1x,' + Ellipse2 + ' 2x'}
          media="(min-width: 1200px)"
          sizes="(min-width: 800px) 800px, 100vw"
        />
        <img src={Ellipse} alt="Ellipse" className={s.img} />
      </picture>
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
