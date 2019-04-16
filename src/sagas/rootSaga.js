import { all, fork } from 'redux-saga/effects';
import table from './table'

function* Saga() {
    yield all([
        fork(table),
    ]);
}

export default Saga;

