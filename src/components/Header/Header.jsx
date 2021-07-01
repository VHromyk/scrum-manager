import SvgComponent from '../SvgComponent';
import styles from './Header.module.scss';
import stylesContainer from '../Container/Container.module.scss';

const Header = () => (
  <div className={stylesContainer.container}>
    <a href="/" className={styles.logoLink}>
      <SvgComponent name="logo" classes={styles.logo} />
    </a>
  </div>
);

export default Header;
