import {takeEvery, call, put} from "redux-saga/effects";
import {DELETE_ORDER} from "../../contants";
import {appApi} from "../../api/appApi";
import {setErrorAC, setFetchingAC} from "../actions/actions";


export function* deleteWatcherSaga(action) {
    try {
        yield put(setFetchingAC(true))
        yield call(appApi.delOrder, action.id)
        yield put(setFetchingAC(false))
    } catch (e) {
        yield put(setErrorAC(e))
    }




}
export function* deleteSaga() {
    yield takeEvery(DELETE_ORDER, deleteWatcherSaga)
}