import { GET_TOURS_SUCCESS, GET_TOUR_SUCCESS } from "../actionTypes";

const initialState = {
  tours: [],
  tour: {},
};

const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURS_SUCCESS:
      return { ...state, tours: action.tours };
    case GET_TOUR_SUCCESS:
      return { ...state, tour: action.tour };
    default:
      return state;
  }
};

export default toursReducer;
