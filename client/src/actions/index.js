import axios from "axios";
import { FETCH_USER } from "./types";

// to forward calls to the server, index.js has to have another proxy rule with /api/* in it

// using redux-thunk to dispatch an action
export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};
