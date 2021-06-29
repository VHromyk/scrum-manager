import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ type, text }) => {
  return (
    <button type={type} className={s.btn}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
