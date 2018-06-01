import fetch from "cross-fetch";
import actions from "./actions";

const searchHotels = (name, stars, star) => dispatch => {
    const method = stars.has(star) ? 'delete' : 'add';
    const newStart = star ? stars[method](star) : stars;

    return fetch(`http://localhost:3001/api/hotels?name=${name}&stars=${newStart.join(',')}`)
        .then(
            response => response.json(),
        )
        .then(hotels => dispatch(actions.getHotelsSuccess(hotels, name, newStart)));
};

export default {
  searchHotels
};
