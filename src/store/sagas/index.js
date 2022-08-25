import {takeEvery} from 'redux-saga/effects'
import {SHOW_ROUTING} from "../actions/actions";


export function* workerSaga() {

 yield
}
export function* watchSaga() {
    yield takeEvery(SHOW_ROUTING, workerSaga)
}

export default function* rootSaga() {
    yield watchSaga()
}