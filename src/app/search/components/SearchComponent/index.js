import React from 'react';

import styles from './styles.scss';

import IconsComponent from '../../../common/components/IconsComponent'
import CollapsableComponent from '../../../common/components/CollapsableComponent'
import StarsFilterComponent from '../StarsFilterComponent'

const SearchComponent = ({ 
  onToggleStar,
  onChangeHotelsName,
  onSearchHotels,
  onSelectAll,
  stars,
  hotelsName
}) => (
  <form className={styles.search}>
    <section className={styles.section}>
      <h5 className={styles.title}>
        Filtros
      </h5>
    </section>
    <CollapsableComponent
      className={styles.section}
      header={
        <h5 className={styles.title}>
          <IconsComponent 
            className={styles.icon}
            icon="search" 
            width="16px" 
            height="16px"/>
          Nombre del hotel            
        </h5>
    }>
      <input 
        type="text"
        placeholder="Ingrese el nombre del hotel" 
        value={hotelsName}
        onChange={({ target: { value }}) => onChangeHotelsName(value)}/>
        <input type="button" value="Aceptar" onClick={() => onSearchHotels(hotelsName, stars)}/>
    </CollapsableComponent>
    <CollapsableComponent
      className={styles.section}
      header={
      <h5 className={styles.title}>
        <IconsComponent 
          className={styles.icon}
          icon="star" 
          width="16px" 
          height="16px"/>
          Estrellas        
        </h5>
      }
    >
      <StarsFilterComponent
        onToggleStar={onToggleStar}
        onSelectAll={onSelectAll}
        starsSelected={stars}
      />
    </CollapsableComponent>
  </form>
);

export default SearchComponent;