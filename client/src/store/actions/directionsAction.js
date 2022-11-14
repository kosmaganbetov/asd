import { GET_DIRECTIONS_SUCCESS, GET_DIRECTION_SUCCESS } from "../actionTypes";
import axios from "../../axiosTravella";
const fetchDirectionsSuccess = (directions) => {
  return { type: GET_DIRECTIONS_SUCCESS, directions };
};

const fetchDirectionSuccess = (direction) => {
  return { type: GET_DIRECTION_SUCCESS, direction };
};

export const fetchDirections = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/directions");
      console.log(response);
      dispatch(fetchDirectionsSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchDirection = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/directions/${id}`);
      console.log(response);
      dispatch(fetchDirectionSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
