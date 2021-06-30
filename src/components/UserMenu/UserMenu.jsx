import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMedia } from 'react-use';
import { authSelectors, authOperations } from '../../redux/auth';
import IconButton from '../IconButton';
import SvgComponent from '../SvgComponent';
import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);

  const dispatch = useDispatch();
  const onLogout = useCallback(
    () => dispatch(authOperations.logout()),
    [dispatch],
  );

  const isWide = useMedia('(min-width: 768px)');

  return (
    <div className={styles.userMenuContainer}>
      <p className={styles.userEmail}>{email}</p>

      <IconButton
        onClick={onLogout}
        classes={styles.logoutBtn}
        aria-label="logout button"
      >
        <SvgComponent name="logout" classes={styles.logoutIcon} />
        {isWide && <p className={styles.logoutText}>Logout</p>}
      </IconButton>
    </div>
  );
};

export default UserMenu;
