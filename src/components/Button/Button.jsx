import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ type, text }) => {
  return (
    <button type={type} className={styles.btn}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
