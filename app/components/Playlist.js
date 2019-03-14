import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../playlistStore';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: {},
    };
  }

  componentDidMount() {
    this.props.fetchPlaylist();
  }

  render() {
    return (
      <div>
        {this.props.playlist.map(song => {
          return <Song key={song.songSpotifyId} song={song} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist,
});

const mapDispatchToProps = dispatch => ({
  fetchedPlaylist: () => dispatch(fetchPlaylist()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
