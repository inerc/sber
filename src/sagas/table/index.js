import { put, takeLatest, all, call } from 'redux-saga/effects';
import { TABLE_GET_REQUEST } from '../../constants';
import { tableGetSuccess } from '../../actions/table'
import API from '../../API'


function* getTableData(payload) {
    const response = yield call(API.searchRepositories);
    yield put(tableGetSuccess(response));
}

function* Saga() {
    yield all([
        takeLatest(TABLE_GET_REQUEST, getTableData),
    ]);
}

export default Saga;