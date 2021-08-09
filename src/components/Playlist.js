import React from 'react';

const Playlist = ({ list }) => {
    console.log('list:', Object.keys(list).length);
    return (
        <div className="shadow stats w-full max-w-sm">
            <div className="stat">
                <div className="stat-title">Your Movie Playlist</div>
                <div className="stat-value">{Object.keys(list).length}</div>
            </div>
        </div>
    )
}

export default Playlist;