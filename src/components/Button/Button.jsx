import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ type, text, classes }) => {
  const buttonClasses = [styles.btn];

  if (classes) {
    buttonClasses.push(classes);
  }

  return (
    <button type={type} className={buttonClasses.join(' ')}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  classes: '',
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
