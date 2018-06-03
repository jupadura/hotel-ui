import React from 'react';

import {
    ButtonComponent,
    CollapsableComponent,
    IconsComponent
} from '../../../common/components';

import styles from './styles.scss';

const NameFilterComponent = ({
    hotelsName,
    onChangeHotelsName,
    onSearchHotels,
    stars,
    className
}) => (
    <CollapsableComponent
        className={className}
        header={
            <h5 className={styles.title}>
              <IconsComponent 
                className={styles.icon}
                icon="search" 
                width="16px" 
                height="16px"/>
              Nombre del hotel            
            </h5>
        }
    >
        <div className={styles.input_container}>
            <input 
                className={styles.input}
                key="hotelName"
                type="text"
                placeholder="Ingrese el nombre del hotel" 
                value={hotelsName}
                onChange={({ target: { value }}) => onChangeHotelsName(value)}
            />
            <ButtonComponent onClick={() => onSearchHotels(hotelsName, stars)}>
                Aceptar
            </ButtonComponent>
        </div>
  </CollapsableComponent>
);

export default NameFilterComponent;