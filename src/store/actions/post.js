import axios from 'axios';
import {
  SERVER_POSTS,
  FETCH_POST,
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
  POST_ERROR,
} from '../../constants';

export const fetchPost = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POST });

    const posts = await axios.get(`${SERVER_POSTS}posts`);
    const result = [];

    for (const post of posts.data) {
      const userData = await axios.get(
        `${SERVER_POSTS}users?id=${post.userId}`
      );
      const photoData = await axios.get(
        `${SERVER_POSTS}photos?albumId=${post.userId}`
      );
      const [user] = await userData.data;
      const [photo] = await photoData.data;

      result.push({
        id: post.id,
        author: user.name,
        company: user.company.name,
        title: post.title,
        body: post.body,
        img: photo.url,
      });
    }

    dispatch({ type: FETCH_POST_SUCCESS, payload: result });
  } catch (e) {
    dispatch({ type: FETCH_POST_ERROR, payload: POST_ERROR });
  }
};
