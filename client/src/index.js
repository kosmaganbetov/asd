/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/merriweather";
import { configureStore } from "@reduxjs/toolkit";
import tourmatesReducer from "./store/reducers/tourmatesReducer";
import { Provider } from "react-redux";
import directionsReducer from "./store/reducers/directionReducer";
import toursReducer from "./store/reducers/toursReducer";
import axios from "./axiosTravella";
import userReducer from "./store/reducers/userReducer";
const localStorageMiddleware =
  ({ getState }) =>
    (next) =>
      (action) => {
        const result = next(action);
        localStorage.setItem("user", JSON.stringify(getState().users.user));
        return result;
      };

const loadFromLocalStorage = () => {
  if (localStorage.getItem("user") !== null) {
    return { users: { user: JSON.parse(localStorage.getItem("user")) } };
  }
  return undefined;
};

const store = configureStore({
  reducer: {
    tourmates: tourmatesReducer,
    directions: directionsReducer,
    tours: toursReducer,
    users: userReducer,
  },
  preloadedState: loadFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
axios.interceptors.request.use((config) => {
  try {
    config.headers["Authorization"] = store.getState().users.user.token;
  } catch (e) {
    // do nothing, no token exists;
  }
  return config;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
