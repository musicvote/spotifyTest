import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../playlistStore';
import SongCard from './SongCard';

export class Playlist extends React.Component {
  componentDidMount() {
    this.props.fetchedPlaylist();
  }

  render() {
    return (
      <div>
        <h1>test</h1>
        {this.props.playlist.map(song => {
          return <SongCard key={song.songSpotifyId} song={song} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.songs,
});

const mapDispatchToProps = dispatch => ({
  fetchedPlaylist: () => dispatch(fetchPlaylist()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
