import React, { Component } from 'react';
import { 
  Col,
  Hidden,
  ScreenClassRender,
  Visible
} from 'react-grid-system';

import CollapsableComponent from '../../../common/components/CollapsableComponent';

import StarsFilterComponent from '../StarsFilterComponent';
import NameFilterComponent from '../NameFilterComponent';

import styles from './styles.scss';

class SearchComponent extends Component { 
  getForm() {
    const {
      onToggleStar,
      onChangeHotelsName,
      onSearchHotels,
      onSelectAll,
      stars,
      hotelsName
    } = this.props;

    return <form className={styles.search}>
      <Hidden xs>
        <section className={styles.section}>
          <span className={styles.header}>
            Filtros
          </span>
        </section>
      </Hidden>
      <NameFilterComponent 
        hotelsName={hotelsName}
        onChangeHotelsName={onChangeHotelsName}
        onSearchHotels={onSearchHotels}
        stars={stars}
        className={styles.section}
      />
      <StarsFilterComponent
        onToggleStar={onToggleStar}
        onSelectAll={onSelectAll}
        starsSelected={stars}
        className={styles.section}
      />
    </form>
  }

  render() {
    return <ScreenClassRender render={screenClass => (
      <Col 
        className={styles[`column-${screenClass}`]}
        sm={5} 
        md={4} 
        lg={3} 
      >
        <Hidden xs>
          {this.getForm()}
        </Hidden>
        <Visible xs>
          <CollapsableComponent
            collapsed={true}
            className={styles.header}
            align="center"
            header={
              <h5 className={styles.title_header}>
                Filtrar
              </h5>
            }
          >
            {this.getForm()}   
          </CollapsableComponent>
        </Visible>
      </Col>
    )}>    
    </ScreenClassRender>;
  }
};

export default SearchComponent;