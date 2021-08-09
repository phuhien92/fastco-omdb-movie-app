import React from 'react';
import { fetch_movie_by } from '../Api';
import Playlist from '../components/Playlist';
import PlaylistButton from '../components/PlaylistButton';
import { Search } from '../components/Search';

const SearchContainer = () => {
    const [query, setQuery] = React.useState({ s: '' });
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [playlist, setPlaylist] = React.useState({});
    const onSubmit = React.useCallback(function (data) {
        setQuery(data);
    }, [query]);

    const addToPlaylist = function (movie) {
        return new Promise(resolve => {
            setPlaylist((prevPlaylist) => {
                localStorage.setItem('omdb_playlist', JSON.stringify(playlist));
                return { ...prevPlaylist, [movie.imdbID]: movie };
            });

            setTimeout(() => {
                resolve();
            }, 1000);
        })
    }

    React.useEffect(() => {
        let playlistData = localStorage.getItem('omdb_playlist');
        setPlaylist(playlistData ? JSON.parse(playlistData) : {});
    }, [])

    React.useEffect(() => {
        if (query.s === '') return false;

        fetch_movie_by(query)
            .then(function (response) {
                const { data: { Search } } = response;
                setResults(Search)
            })
            .catch(err => {
                throw (err);
            })
            .finally(function () {
                setLoading(false);
            })
    }, [query]);

    return (
        <Search>
            <div className="bg-white rounded-md p-4 mt-4 shadow-sm bordered">
                <Search.Input onSubmit={onSubmit} loading={loading} setLoading={setLoading}></Search.Input>
            </div>

            <div className="my-3 text-left">
                <Playlist list={playlist} />
            </div>

            {results.length > 0 ?
                (<div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {results.map(item => (
                        <Search.Result key={item.imdbID}>
                            <div className="card bordered shadow-xl bg-white">
                                <div
                                    className="h-80 overflow-hidden relative bg-gray-100 bg-center bg-no-repeat bg-cover"
                                    title={item.Title}
                                    style={{ backgroundImage: `url(${item.Poster}), url('http://placehold.it/400x320')` }}
                                ></div>
                                <div className="card-body p-4">
                                    <h4 className="text-left card-title line-clamp-2 h-15">{item.Title}</h4>
                                    <p className="text-left">Year: {item.Year}</p>
                                    <p className="text-left">Type: {item.Type}</p>
                                    <p className="text-left">IMDB ID: {item.imdbID}</p>
                                    <div className="justify-center card-actions">
                                        <PlaylistButton item={item} addToPlaylist={addToPlaylist} />
                                    </div>
                                </div>

                            </div>
                        </Search.Result>
                    ))}
                </div>) : (
                    <div className="text-center font-bold text-3xl py-10">No result</div>
                )}

        </Search>
    )
}

export default SearchContainer;