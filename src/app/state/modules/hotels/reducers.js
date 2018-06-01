import { combineReducers } from "redux";
import types from "./types";

const hotels = (state = [], action) => {
  switch (action.type) {
    case types.GET_HOTELS_SUCCESS:
      return action.payload.hotels;
    default:
      return state;
  }
};

const hotelsReducer = combineReducers({
  hotels
});

export default hotelsReducer;
