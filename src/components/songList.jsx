import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';

class SongList extends Component {

    isSelected(song) {

        if (this.props.selectedSong === null) return false;
        if (!this.props.selectedSong.title) return false;

        if (this.props.selectedSong.title === song.title) {
            return true;
        }

        return false;
    }

    renderList() {

        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            disabled={this.isSelected(song)}
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })

    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs,
        selectedSong: state.selectSong
    };

}

// The Connect() Function Explained
// the first argument is a custom function defined above were we map redux state to this components props
// the second argument is an object of dispatch functions (store.dispatch()) which also get's passed into our component as properties
// the second argument is an object where we can pass our Actions (currently only selectSong is being passed in). These are used to update the state when an event is fired.
// finally the SongsList component is passed as a callback function to the connect function
// this means the SongsList component is rendered through a connect component where these properties get added to the components props
export default connect(mapStateToProps, { selectSong })(SongList);