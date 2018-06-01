import React from 'react';
import { connect } from 'react-redux'

import { filtersOperations } from '../../../state/modules/filters';
import { hotelsOperations } from '../../../state/modules/hotels';

import SearchComponent from "../../components/SearchComponent";

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
    handleSelectAll: () => (
        dispatch(filtersOperations.selectAllStars())
    )
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
        <SearchComponent 
            stars={stars} 
            hotelsName={hotelsName}
            onToggleStar={(star) => handleToggleStar(hotelsName, stars, star)}
            onSelectAll={handleSelectAll}
            onChangeHotelsName={handleHotelsNameChange}
            onSearchHotels={handleSearchHotels}
        />
    </div>
));

export default SearchContainer;
