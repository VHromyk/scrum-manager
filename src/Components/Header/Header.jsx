import SvgComponent from '../SvgComponent';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <a href="/" className={styles.logoLink}>
      <SvgComponent name="logo" classes={styles.logo} />
    </a>
  </div>
);

export default Header;
