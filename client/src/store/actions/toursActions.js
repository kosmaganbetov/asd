import { GET_TOURS_SUCCESS, GET_TOUR_SUCCESS } from "../actionTypes";
import axios from "../../axiosTravella";
const fetchToursSuccess = (tours) => {
  return { type: GET_TOURS_SUCCESS, tours };
};

const fetchTourSuccess = (tour) => {
  return { type: GET_TOUR_SUCCESS, tour };
};

export const fetchTours = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/tours");
      console.log(response);
      dispatch(fetchToursSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchTour = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/tours/${id}`);
      console.log(response);
      dispatch(fetchTourSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
