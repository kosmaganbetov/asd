import {
  FETCH_TOURMATES_SUCCESS,
  FETCH_TOURMATE_SUCCESS,
} from "../actionTypes";

const initialState = {
  tourmates: [],
  tourmate: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOURMATES_SUCCESS:
      return { ...state, tourmates: action.tourmates };
    case FETCH_TOURMATE_SUCCESS:
      return { ...state, tourmate: action.tourmate };
    default:
      return state;
  }
};

export default productsReducer;
