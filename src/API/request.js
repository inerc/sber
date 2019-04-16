import axios from 'axios';

import { API_HOST } from './constants';

export function makeRequest(options) {
    return axios(options)
        .then(response => {
            if (response.status !== 200) throw response;
            return response.data;
        })
        .catch(error => {
            throw error
        });
}


export function request({ method, url, data, params }) {
    url = `${API_HOST}/${url}`;
    const options = { method, url };
    if (data) options.data = data;
    if (true) options.params = params;
    return makeRequest(options);
}
