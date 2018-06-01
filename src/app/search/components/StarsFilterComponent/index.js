import React from 'react';

import CheckboxComponent from '../../../common/components/CheckboxComponent'
import StarsComponent from '../../../common/components/StarsComponent'

import styles from './styles.scss';

const StarsFilterComponent = ({
    onToggleStar,
    onSelectAll,    
    starsSelected
}) => (
    <div>
        <CheckboxComponent
            className={styles.line}
            checked={starsSelected.size === 5}
            onChange={onSelectAll}>
            <span className={styles.select_all}>
                Todas las estrellas
            </span>
        </CheckboxComponent>
        {
            [5,4,3,2,1].map(value =>
                <CheckboxComponent
                    key={value}
                    className={styles.line}
                    checked={starsSelected.has(value)}
                    onChange={() => onToggleStar(value)}>
                    <StarsComponent
                        className={styles.star}
                        key={value}
                        length={value}
                        size="15px"
                    /> 
                </CheckboxComponent>
            )   
        }
    </div>
);

export default StarsFilterComponent;