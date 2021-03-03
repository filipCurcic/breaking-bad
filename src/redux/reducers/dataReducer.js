import { FETCH_POSTS, POSTS_LOADING } from '../actions/types';

const initialState = {
  items: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case POSTS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
