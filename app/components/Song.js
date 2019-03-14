import React from 'react';
const Song = props => {
  let { title, artist, songId, voteCount } = props.song;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{artist}</h3>
      <h3>{songId}</h3>
      <h3>{voteCount}</h3>
    </div>
  );
};

export default Song;
