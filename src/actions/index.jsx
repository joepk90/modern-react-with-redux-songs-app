// Select Song Action Creator
export const selectSong = song => {

    // teturn an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};