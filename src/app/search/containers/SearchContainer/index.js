import React from 'react';

import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system';

import { filtersOperations } from '../../../state/modules/filters';
import { hotelsOperations } from '../../../state/modules/hotels';

import {
    HeaderComponent,
    LogoComponent
 } from "../../../common/components";

import SearchComponent from "../../components/SearchComponent";

import HotelListContainer from "../HotelListContainer";

const mapStateToProps = ({
    filtersState: { 
        filters: { 
            stars,
            hotelsName
        }
    }
}) => ({ 
    stars,
    hotelsName
});

const mapDispatchToProps = dispatch => ({
    handleToggleStar: (hotelsName, stars, star) => {
        dispatch(filtersOperations.toggleStar(star));
        dispatch(hotelsOperations.searchHotels(hotelsName, stars, star));
    },
    handleHotelsNameChange: hotelsName => (
        dispatch(filtersOperations.setHoteslName(hotelsName))
    ),
    handleSearchHotels: (hotelsName, stars) => (
        dispatch(hotelsOperations.searchHotels(hotelsName, stars))
    ),
    handleSelectAll: (hotelsName, stars) => {
        dispatch(filtersOperations.selectAllStars());
        dispatch(hotelsOperations.searchHotels(hotelsName, stars, null, true));
    }
});

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(({
    handleToggleStar,
    handleHotelsNameChange,
    handleSearchHotels,
    handleSelectAll,
    stars,
    hotelsName
}) => (
    <div>
        <HeaderComponent>
            <LogoComponent/>
        </HeaderComponent>
        <Container fluid>
            <Row>
                <SearchComponent 
                    stars={stars} 
                    hotelsName={hotelsName}
                    onToggleStar={(star) => handleToggleStar(hotelsName, stars, star)}
                    onSelectAll={() => handleSelectAll(hotelsName, stars)}
                    onChangeHotelsName={handleHotelsNameChange}
                    onSearchHotels={handleSearchHotels}
                />
                <Col>
                    <HotelListContainer/>           
                </Col>
            </Row>
        </Container>
    </div>
));

export default SearchContainer;
