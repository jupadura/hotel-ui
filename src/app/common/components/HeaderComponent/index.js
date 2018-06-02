import React from 'react';

import styles from './styles.scss';

const HeaderComponent = ({
    children
}) => (
    <header className={styles.header}>
        {children}
    </header>
)

export default HeaderComponent;
