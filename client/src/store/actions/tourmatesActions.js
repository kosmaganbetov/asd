import axios from "../../axiosTravella";
import {
  FETCH_TOURMATES_SUCCESS,
  FETCH_TOURMATE_SUCCESS,
} from "../actionTypes";

const fetchTourmatesSuccess = (tourmates) => {
  return { type: FETCH_TOURMATES_SUCCESS, tourmates };
};

const fetchTourmateSuccess = (tourmate) => {
  return { type: FETCH_TOURMATE_SUCCESS, tourmate };
};

export const fetchTourmates = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/tourmates");
      console.log(response);
      dispatch(fetchTourmatesSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchTourmate = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/tourmates/${id}`);
      console.log(response);
      dispatch(fetchTourmateSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
