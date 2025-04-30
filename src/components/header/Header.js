import React from 'react';
import styles from './Header.module.css';

// TODO - create a header that changes after login

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <p className={styles["welcome-message"]}>jammming</p>
            </div>
        </header>
    )
}


export default Header;

