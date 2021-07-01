import styles from './HeaderWrapper.module.scss';

const HeaderWrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default HeaderWrapper;
