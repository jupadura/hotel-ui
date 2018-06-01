import types from "./types";

export const toggleStar = star => ({
  type: types.TOGGLE_STAR,
  payload: {
    star
  }
});

export const selectAllStars = () => ({
  type: types.SELECT_ALL_STARS
});


export const setHoteslName = hotelsName => ({
  type: types.SET_HOTELS_NAME,
  payload: {
    hotelsName
  }
});

export default {
    toggleStar,
    selectAllStars,
    setHoteslName
};
