import React from 'react';

const Player = props => {
  return (
    <div>
      <h1>Player</h1>
      <iframe
        src="https://open.spotify.com/embed/track/6PCUP3dWmTjcTtXY02oFdT"
        width="300"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
};

export default Player;
