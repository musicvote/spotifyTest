// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware } from 'redux';
// import loggingMiddleware from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

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
      const { data } = await axios.get(`/api/songs/`);
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
  currSong: {},
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS: {
      return {
        ...state,
        songs: [...action.playlist],
        currSong: state.songs[0],
      };
    }
    default: {
      return state;
    }
  }
};
export default playlistReducer
