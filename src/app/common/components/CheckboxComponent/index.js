import React from 'react';

import styles from './styles.scss';

const CheckboxComponent = ({
    value, 
    checked,
    onChange,
    className,
    children
}) => (
    <div className={`${styles.checkbox_container} ${className}`}>
        <div
            className={`${styles.checkbox} ${checked ? styles.selected : ''} `}
            onClick={() => onChange({ value, checked: !checked })}
            tabIndex="0">
        </div>
        {children}        
    </div>
);

export default CheckboxComponent;