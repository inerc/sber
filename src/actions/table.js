import {
    TABLE_GET_REQUEST,
    TABLE_GET_SUCCESS,
    TABLE_GET_FAILURE,
} from '../constants';

export const tableGetRequest = (table, payload) => ({
    type: TABLE_GET_REQUEST, table, payload,
});

export const tableGetSuccess = (payload) => ({
    type: TABLE_GET_SUCCESS, payload
});

export const tableGetFailure = (table, payload) => ({
    type: TABLE_GET_FAILURE, table, payload,
});