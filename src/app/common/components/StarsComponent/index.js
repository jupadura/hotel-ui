import React from 'react';
import IconsComponent from '../IconsComponent';
import styles from './styles.scss';

const StarsComponent = ({
  length,
  size = '20px'
}) => (
  <div className={styles.stars_container}>
    {
      Array(length).fill(
        <IconsComponent
          className={styles.star}
          icon="star"
        />
      )
    }
  </div>
);

export default StarsComponent;
