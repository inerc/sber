import axios from 'axios';

import { API_HOST } from './constants';


let repeatCount = 1;
let repeatRequestId = null;
const maxRepeatCount = 3;

export function makeRequest(options) {
    return axios(options)
        .then(response => {
            if (repeatRequestId === options.repeatRequestId) {
                repeatCount = 0;
                repeatRequestId = null;
            }
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
    if (true) options.params = {
        q: 'tetris+language:assembly',
        sort: 'stars',
        order: 'desc'
    };
    return makeRequest(options);
}
