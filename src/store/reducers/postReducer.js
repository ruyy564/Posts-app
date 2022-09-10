import {
  FETCH_POST,
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
} from '../../constants';

const initState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { posts: [], loading: true, error: null };
    case FETCH_POST_SUCCESS:
      return { posts: action.payload, loading: false, error: null };
    case FETCH_POST_ERROR:
      return { posts: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
