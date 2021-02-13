import React from 'react';

import SongList from './songList';
import SongDetail from './songDetail';

const App = () => {
    return (
        <div className="ui container">

            <h1>Song List Application</h1>
            <h3>Simple application demonstrating Redux (react-redux)</h3>

            <div className="ui grid">
                <div className="ui row">

                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className="column eight wide">
                        <SongDetail />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;