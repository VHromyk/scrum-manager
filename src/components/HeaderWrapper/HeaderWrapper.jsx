import styles from './HeaderWrapper.module.scss';

const HeaderWrapper = ({ children }) => (
  <header className={styles.wrapper}>{children}</header>
);

export default HeaderWrapper;
