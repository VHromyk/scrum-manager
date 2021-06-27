import React from 'react';
import styles from './Header.module.scss'
import SvgComponent from '../SvgComponent';


const Header = () => (
    <div className={styles.header}>
        <a href="/" className={styles.logo}>
            <SvgComponent name='logo'
                height={styles.logo}
                width={styles.logo}/>
        </a>
    </div>
)


export default Header;