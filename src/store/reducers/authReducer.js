import {
  ACCESS_TOKEN,
  IS_AUTH,
  USERNAME,
  FETCH_AUTH,
  FETCH_AUTH_ERROR,
  FETCH_LOGOUT,
} from '../../constants';

const initState = {
  token: localStorage.getItem(ACCESS_TOKEN) || '',
  username: localStorage.getItem(USERNAME) || '',
  isAuth: localStorage.getItem(IS_AUTH) || false,
  error: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        token: action.payload.accessToken,
        username: action.payload.user.username,
        isAuth: true,
        error: null,
      };
    case FETCH_AUTH_ERROR:
      return {
        token: '',
        username: '',
        isAuth: false,
        error: action.payload,
      };
    case FETCH_LOGOUT:
      return {
        token: '',
        username: '',
        isAuth: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
