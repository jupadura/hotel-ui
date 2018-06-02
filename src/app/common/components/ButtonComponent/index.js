import React from 'react';

import styles from './styles.scss';

const ButtonComponent = ({
    children,
    onClick,
    type = "primary",
    className
}) => (
    <div
        tabIndex="0"
        onClick={onClick}
        className={`${styles[type]} ${className}`}
    >
        {children}
    </div>
);

export default ButtonComponent;