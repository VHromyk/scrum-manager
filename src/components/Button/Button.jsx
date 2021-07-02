import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ type, text, classes, onClick }) => {
  const buttonClasses = [styles.btn];

  if (classes) {
    buttonClasses.push(classes);
  }

  return (
    <button type={type} className={buttonClasses.join(' ')} onClick={onClick}>
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
