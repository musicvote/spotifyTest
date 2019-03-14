import React from 'react';
import Player from './Player';
import Playlist from './Playlist';
const Root = () => {
  return (
    <div>
      <h1>Root</h1>
      <p>list of songs will go here from DB</p>
      <Playlist />
      <Player />
    </div>
  );
};

export default Root;
