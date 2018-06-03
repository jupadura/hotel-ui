import { connect } from 'react-redux'

import HotelListComponent from '../../components/HotelListComponent'

const mapStateToProps = ({ hotelsState: { hotels }}) => ({
    hotels
});

const HotelListContainer = connect(
    mapStateToProps
)(HotelListComponent);

export default HotelListContainer;
