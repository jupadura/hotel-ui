import React from 'react';
import IconsComponent from '../IconsComponent';
import styles from './styles.scss';

const AmenitiesComponent = ({
  amenities = [],
}) => (
  <div>
      {
          amenities.map(icon => 
            <IconsComponent 
              className={styles.amenity}
              key={icon} 
              icon={icon}
            />
          )
      }
  </div>
);

export default AmenitiesComponent;