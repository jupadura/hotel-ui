import React from 'react';

import {
    CollapsableComponent,
    CheckboxComponent,
    StarsComponent,  
    IconsComponent
} from '../../../common/components';

import styles from './styles.scss';

const StarsFilterComponent = ({
    onToggleStar,
    onSelectAll,    
    starsSelected,
    className
}) => (
    <CollapsableComponent
        className={className}
        header={
            <h5 className={styles.title}>
                <IconsComponent 
                    className={styles.icon}
                    icon="star" 
                    width="16px" 
                    height="16px"
                />
                Estrellas        
            </h5>
        }
    >
        <CheckboxComponent
            className={`${styles.line}`}
            checked={starsSelected.size === 5}
            onChange={onSelectAll}
        >
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
                    onChange={() => onToggleStar(value)}
                >
                    <StarsComponent
                        className={styles.star}
                        key={value}
                        length={value}
                        size="14px"
                    /> 
                </CheckboxComponent>
            )   
        }
  </CollapsableComponent>
);

export default StarsFilterComponent;