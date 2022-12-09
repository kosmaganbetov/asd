import { FETCH_CITIES_SUCCESS } from "../actionTypes";

const initialState = {
  cities: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_SUCCESS:
      return { ...state, cities: action.cities };
    default:
      return state;
  }
};

export default citiesReducer;
