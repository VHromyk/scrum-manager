import React from 'react';
import s from './Form.module.scss';
import PropTypes from 'prop-types';

function Form({ children, onSubmit, classes }) {
  const formClasses = [s.registerForm];

  if (classes) {
    formClasses.push(classes);
  }

  return (
    <form
      className={formClasses.join(' ')}
      onSubmit={onSubmit}
      autoComplete="off"
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default Form;
