import { useSelector } from 'react-redux';
import Container from '../Container';
import SvgComponent from '../SvgComponent';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import styles from './Header.module.scss';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Container classes={styles.headerContainer}>
      <a href="/" className={styles.logoLink}>
        <SvgComponent name="logo" classes={styles.logo} />
      </a>

      {isLoggedIn && <UserMenu />}
    </Container>
  );
};

export default Header;
