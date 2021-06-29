import PropTypes from 'prop-types';
import styles from './ModalBackdrop.module.scss';

const ModalBackdrop = ({ children }) => (
  <div className={styles.backdrop}>{children}</div>
);

ModalBackdrop.propTypes = {
  children: PropTypes.node,
};

export default ModalBackdrop;
