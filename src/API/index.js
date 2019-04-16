import { request } from './request';

class ClassAPI {
    searchRepositories = (params) => request({
        url: 'search/repositories',
        method: 'GET',
        params
    });
}

const API = new ClassAPI();

export default API;