import React from 'react';
import { fetch_movie_by } from '../Api';

export const Search = ({ classes, children, ...restProps }) => {
    return (
        <div className={classes} {...restProps}>
            {children}
        </div>
    )
}

Search.Result = function SearchResult({
    resultId,
    classes,
    children,
    ...restProps
}) {

    return (
        <div className="">
            {children}
        </div>
    )
}

Search.Input = function SearchInput({ classes, onSubmit, ...restProps }) {
    const [formData, setFormData] = React.useState({ s: '', plot: 'short', y: '' });
    const handleChange = React.useCallback(({ target: { type, name, value } }) => {
        setFormData({ ...formData, [name]: value })
    }, [formData]);
    const handleSubmit = function (e) {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={handleSubmit}>
            <div className="form-control flex-1">
                <label className="label">
                    <span className="label-text">Search</span>
                </label>
                <div className="relative">
                    <input type="text" value={formData.s} onChange={handleChange} name="s" placeholder="Search" className="w-full pr-16 input input-primary input-bordered" />
                    <button type="submit" className="absolute top-0 right-0 rounded-l-none btn btn-primary">go</button>
                </div>
            </div>
            <div className="form-control flex-1">
                <label className="label">
                    <span className="label-text">Year</span>
                </label>
                <input type="text" name="y" value={formData.y} placeholder="" className="input input-bordered" onChange={handleChange} />
            </div>
            <div className="form-control flex-1">
                <label className="label">
                    <span className="label-text">Plot</span>
                </label>
                <select name="plot" onChange={handleChange} className="select select-bordered w-full">
                    <option value="short">Short</option>
                    <option value="full">Full</option>
                </select>
            </div>
        </form>
    )
}