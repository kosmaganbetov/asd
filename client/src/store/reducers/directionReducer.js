import { GET_DIRECTIONS_SUCCESS, GET_DIRECTION_SUCCESS } from "../actionTypes";

const initialState = {
  directions: [],
  direction: {},
};

const directionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIRECTIONS_SUCCESS:
      return { ...state, directions: action.directions };
    case GET_DIRECTION_SUCCESS:
      return { ...state, direction: action.direction };
    default:
      return state;
  }
};

export default directionsReducer;
