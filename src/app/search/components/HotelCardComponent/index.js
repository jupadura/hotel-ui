import React from "react";
import { 
    Container, 
    Row, 
    Col,
    ScreenClassRender
} from 'react-grid-system';

import {
    AmenitiesComponent,
    ButtonComponent,
    StarsComponent 
} from "../../../common/components";

import styles from './styles.scss';

const HotelCardComponent = ({
    hotel
}) => (
    <Container className={styles.hotel_card}>
        <Row>
            <Col sm={5} md={4} className={styles.image_section}>
                <img 
                    className={styles.image}
                    src={`/assets/images/hotels/${hotel.image}`}
                    alt={hotel.name}
                />
            </Col>
            <Col sm={4} md={5}>
                <h2 className={styles.title}>
                    {hotel.name}
                </h2>
                <StarsComponent
                    className={styles.stars} 
                    length={hotel.stars}
                    size="15px"
                />
                <AmenitiesComponent 
                    className={styles.amenities}                 
                    amenities={hotel.amenities}
                />        
            </Col>
            <ScreenClassRender render={screenClass => (
                <Col 
                    sm={3} 
                    className={`${styles.price_section} ${styles[`border-${screenClass}`]}`}
                >
                    <div className={styles.price_message}>
                        Noche por noche por habitacion
                    </div>

                    <div className={styles.price_container}>
                        <div className={styles.currency}>
                            ARS
                        </div>
                        <div className={styles.price}>
                            {hotel.price}                
                        </div>
                    </div>

                    <ButtonComponent
                        className={styles.button}>
                        Ver hotel
                    </ButtonComponent>  
                </Col>
            )}>
            </ScreenClassRender>
        </Row>
    </Container>
);

export default HotelCardComponent;