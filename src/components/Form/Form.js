import React from 'react';
import s from './Form.module.scss';
import PropTypes from 'prop-types';

function Form({ children, onSubmit }) {
  return (
    <form className={s.registerForm} onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default Form;
