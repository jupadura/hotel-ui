import types from "./types";

export const getHotelsmagesSuccess = image => ({
  type: types.GET_HOTELS_IMAGES_SUCCESS,
  payload: {
      image,
  }
});

export default {
    getHotelsmagesSuccess
};
