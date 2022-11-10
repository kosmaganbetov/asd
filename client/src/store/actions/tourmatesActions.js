import axios from "../../axiosTravella";
import { FETCH_TOURMATES_SUCCESS } from "../actionTypes";

const fetchTourmatesSuccess = (tourmates) => {
  return { type: FETCH_TOURMATES_SUCCESS, tourmates };
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
