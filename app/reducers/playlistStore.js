// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware } from 'redux';
// import loggingMiddleware from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import SongCard from '../components/SongCard';

//STATE AND REDUCER
const initialState = {
  songs: [],
  currSong: {},
  deckSong: {},
};
//ACTION TYPES
const GET_SONGS = 'GET_SONGS';
const GOT_NEXT = 'GOT_NEXT';
//ACTION CREATORS
const getSongs = playlist => {
  return {
    type: GET_SONGS,
    playlist,
  };
};

const gotNext = spotifyPlaying => {
  return {
    type: GOT_NEXT,
    spotifyPlaying,
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

export const CheckFetchSpotify = () => {
  return async dispatch => {
    try {
      const dataFromSpotify = await axios.get(`/api/spotify/`);
      //The next/on deck song is playing
      if (dataFromSpotify.id !== initialState.currSong.id) {
        const postedSongToSpotify = await axios.post('', {
          songId: initialState.deckSong,
        });
        const action = gotNext(dataFromSpotify);
        dispatch(action);
      } else {
        //Same song is still playing
        //hits reducer's defalt may not be needed but this will just keep the same state.
        dispatch({ type: 'SAME_SONG_PLAYING' });
      }
    } catch (error) {
      console.log(error);
    }
  };
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
    case GOT_NEXT: {
      return {
        ...state,
        currSong: action.spotifyPlaying,
      };
    }
    default: {
      return state;
    }
  }
};
export default playlistReducer;
