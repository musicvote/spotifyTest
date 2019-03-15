import React from 'react';
import { connect } from 'react-redux';
import {
  fetchPlaylist,
  CheckFetchSpotify,
  moveTopVoteToDeck,
} from '../reducers/playlistStore';
import SongCard from './SongCard';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   songList: [],
    // };
    this.CheckSpotify = this.CheckSpotify.bind(this);
  }
  componentDidMount() {
    this.props.fetchedPlaylist();
  }

  CheckSpotify() {
    this.props.isSongDone();
    this.props.moveToDeck();
  }

  render() {
    return (
      <div>
        <button type={'button'} onClick={() => CheckSpotify()}>
          Check Spotify
        </button>
        <h1>test</h1>
        <div>
          {this.props.playlist.map(song => {
            return <SongCard key={song.songSpotifyId} song={song} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlistReducer.songs,
});

const mapDispatchToProps = dispatch => ({
  fetchedPlaylist: () => dispatch(fetchPlaylist()),
  isSongDone: () => dispatch(CheckFetchSpotify()),
  moveToDeck: () => dispatch(moveTopVoteToDeck()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
