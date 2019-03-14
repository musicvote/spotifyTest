import React from 'react';
import Player from './Player';

const Root = () => {
  const songId = '4BdIxxdtdpxaPk3vXYL47G?si=rdmaNQT-ShypeYaXGgGUaA';
  return (
    <div>
      <h1>Root</h1>
      <p>list of songs will go here from DB</p>
      <Player song={songId} />
    </div>
  );
};

export default Root;
