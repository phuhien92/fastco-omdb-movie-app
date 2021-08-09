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
        <>
            {state === 'initial' && <button className='btn btn-primary' onClick={add}>ADD TO PLAYLIST</button>}
            {state === 'added' && <button className='btn btn-success'>✓ ADDED</button>}
            {state === 'loading' && <button className='btn btn-primary loading'>ADDING</button>}
        </>
    )
}

export default PlaylistButton;