import { request, makeRequest } from './request';

class ClassAPI {
    searchRepositories = (email, password) => request({
        url: 'search/repositories',
        method: 'GET',
        data: {
            email,
            password,
        },
    });
}

const API = new ClassAPI();

export default API;