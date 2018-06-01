import fetch from "cross-fetch";
import actions from "./actions";

const loadHotelsimages = id => dispatch => {
    return fetch(`http://localhost:3001/api/hotels-images/${id}`)
        .then(
            response => response.json(),
            // error => dispatch(receiveLocationsFail(error))
        )
        .then(image => dispatch(actions.getHotelsmagesSuccess(image)));
};

export default {
    loadHotelsimages
};
