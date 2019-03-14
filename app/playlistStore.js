import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//ACTION TYPES
const GET_SONGS = 'GET_SONGS';

//ACTION CREATORS
const getSongs = playlist => {
  return {
    type: GET_SONGS,
    playlist,
  };
};

//THUNK CREATORS
export const fetchPlaylist = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/songs`);
      const action = getSongs(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

//STATE AND REDUCER
const initialState = {
  songs: [],
};
// eslint-disable-next-line complexity
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS: {
      return {
        ...state,
        songs: [...state.songs, action.playlist],
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
);
export default store;
