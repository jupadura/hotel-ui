import React from 'react';

import HotelCardComponent from '../HotelCardComponent';

const HotelListComponent = ({
    hotels
}) => (     
    hotels.map(hotel =>
        <HotelCardComponent 
            key={hotel.id} 
            hotel={hotel}
        />  
    )
);

export default HotelListComponent;
