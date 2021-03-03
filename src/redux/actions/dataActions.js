import { FETCH_POSTS, POSTS_LOADING } from './types';
import axios from 'axios';

export const fetchData = () => (dispatch) => {
  fetch(`https://www.breakingbadapi.com/api/characters`)
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );

  // const fetchItems = async () => {
  //   const result = await axios(`https://www.breakingbadapi.com/api/characters`);
  //   dispatch({
  //     type: FETCH_POSTS,
  //     payload: result.data,
  //   });
  // };
  // fetchItems();
};

{
}
