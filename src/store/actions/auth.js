import axios from 'axios';
import {
  SERVER_URL,
  ACCESS_TOKEN,
  IS_AUTH,
  USERNAME,
  FETCH_AUTH,
  FETCH_AUTH_ERROR,
  FETCH_LOGOUT,
} from '../../constants';

export const fetchAuth = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(`${SERVER_URL}login`, payload);

    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
    localStorage.setItem(IS_AUTH, true);
    localStorage.setItem(USERNAME, response.data.user.username);

    dispatch({ type: FETCH_AUTH, payload: response.data });
  } catch (e) {
    dispatch({ type: FETCH_AUTH_ERROR, payload: e.response.data });
  }
};

export const fetchLogout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(IS_AUTH);
  localStorage.removeItem(USERNAME);

  return {
    type: FETCH_LOGOUT,
  };
};
