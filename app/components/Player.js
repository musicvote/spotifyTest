import React from 'react';

const Player = props => {
  return (
    <div>
      <h1>Player</h1>
      <iframe
        src={`https://open.spotify.com/embed/track/${props.song}`}
        width="300"
        height="80"
      />
    </div>
  );
};

export default Player;
