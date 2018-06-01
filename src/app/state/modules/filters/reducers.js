import { combineReducers } from "redux";
import { Set } from "immutable";
import types from "./types";

const initialState = {
  stars: Set(),
  hotelsName: ''
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_STAR:      
      const { stars } = state;
      const { payload: { star }} = action;
      const newStars = stars.has(star) ? stars.delete(star) : stars.add(star);

      return {
        ...state,
        stars: newStars
      };
    case types.SELECT_ALL_STARS:
      return {
        ...state,
        stars: Set(state.stars.size < 5 ? [1,2,3,4,5] : null)
      };
    case types.SET_HOTELS_NAME:
      const { payload: { hotelsName }} = action;      
      return {
        ...state,
        hotelsName
      };
    default:
      return state;
  }
};

const filtersReducer = combineReducers({
  filters
});

export default filtersReducer;
