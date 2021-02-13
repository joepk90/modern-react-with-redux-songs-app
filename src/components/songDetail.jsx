import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ title, duration }) => {

    if (!title || !duration) return 'Select a song';

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {title}
                <br />
                Duration{duration}
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        ...state.selectSong
    }

}

export default connect(mapStateToProps)(SongDetail);