import React from 'react';
import IconsComponent from '../IconsComponent';
import styles from './styles.scss';

const StarsComponent = ({
  className,
  length,
  size = '20px'
}) => (
  <div className={styles.stars_container}>
    {
      Array(length).fill(
        <IconsComponent
          className={`${styles.star} ${className}`}
          icon="star"
          heigth={size}
          width={size}
        />
      )
    }
  </div>
);

export default StarsComponent;
