import {
    TABLE_GET_REQUEST,
    TABLE_GET_SUCCESS,
    TABLE_GET_FAILURE,
} from '../constants';

export const tableGetRequest = ({params}) => ({
    type: TABLE_GET_REQUEST, params
});

export const tableGetSuccess = (payload) => ({
    type: TABLE_GET_SUCCESS, payload
});

export const tableGetFailure = (payload) => ({
    type: TABLE_GET_FAILURE, payload,
});