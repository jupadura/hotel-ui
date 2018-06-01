import types from "./types";

export const getHotelsSuccess = (hotels, name, stars) => ({
  type: types.GET_HOTELS_SUCCESS,
  payload: {
      hotels,
      name,
      stars
  }
});

export default {
    getHotelsSuccess
};
