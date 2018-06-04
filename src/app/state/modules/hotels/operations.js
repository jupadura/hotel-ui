import fetch from "cross-fetch";
import actions from "./actions";

const searchHotels = (name, stars, star, allStars) => dispatch => {
    let newStars;
    if (allStars) {
        newStars = stars.size === 5 ? [] : [1, 2, 3, 4, 5];
    } else {
        const method = stars.has(star) ? 'delete' : 'add';
        newStars = star ? stars[method](star) : stars;
    }

    return fetch(`${process.env.REACT_APP_API}/hotels?name=${name}&stars=${newStars.join(',')}`)
        .then(
            response => response.json(),
        )
        .then(hotels => dispatch(actions.getHotelsSuccess(hotels, name, newStars)));
};

export default {
  searchHotels
};
