import {all} from 'redux-saga/effects'

import {startSaga} from "./startSaga";
import {addSaga} from "./addSaga";
import {deleteSaga} from "./deleteSaga";
import {editSaga} from "./editSaga";




export default function* rootSaga() {
    yield all([
        startSaga(),
        addSaga(),
        deleteSaga(),
        editSaga(),
    ])
}


