import { combineReducers } from "redux";
import types from "./types";

const hotelsImages = (state = [], action) => {
  switch (action.type) {
    case types.GET_HOTELS_IMAGES_SUCCESS:
      return [
        ...state,
        action.payload.image
      ];
    default:
      return state;
  }
};

const hotelsImagesReducer = combineReducers({
  hotelsImages
});

export default hotelsImagesReducer;
