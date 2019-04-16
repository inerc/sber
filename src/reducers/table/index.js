import { TABLE_GET_REQUEST, TABLE_GET_FAILURE, TABLE_GET_SUCCESS} from '../../constants'

export default (state = { }, action) => {
    switch(action.type){
        case TABLE_GET_REQUEST:
            return {};

        case TABLE_GET_FAILURE:
            return {};

        case TABLE_GET_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}