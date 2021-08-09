import React from 'react';

const PlaylistButton = ({ addToPlaylist, item }) => {
    const [state, setState] = React.useState('initial');
    const add = function (e) {
        e.preventDefault();
        setState('loading');

        addToPlaylist(item)
            .then(function () {
                setState('added');
            })
            .finally(function () {
                setTimeout(() => setState('initial'), 1000);
            })
    }
    return (
        <button className={state === 'added' ? 'btn btn-success' : `btn btn-primary ${state}`} onClick={add}>{state === 'added' ? '✓ Added' : 'Add to Playlist'}</button>
    )
}

export default PlaylistButton;