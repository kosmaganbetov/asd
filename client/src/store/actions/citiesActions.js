import { FETCH_CITIES_SUCCESS } from "../actionTypes";
import axios from "../../axiosTravella";

const fetchCitiesSuccess = (cities) => {
  return { type: FETCH_CITIES_SUCCESS, cities };
};

export const fetchCities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/cities");
      console.log(response);
      dispatch(fetchCitiesSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
