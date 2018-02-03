import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_SURVEYS } from "./types";

// to forward calls to the server, index.js has to have another proxy rule with /api/* in it

// using redux-thunk to dispatch an action
export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = token => async dispatch => {
  const response = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const response = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchSurveys = () => async dispatch => {
  const response = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: response.data });
};
