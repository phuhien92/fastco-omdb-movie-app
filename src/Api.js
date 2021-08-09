import axios from 'axios';
import { API_URL } from './constant';

export const fetch_movie_by = (data) => {
    const queries = Object.entries(data)
        .filter(([, v]) => v !== '')
        .map(([k, v]) => `${k}=${v}`);

    return axios.get(`${API_URL}&${queries.join('&')}`)
}

