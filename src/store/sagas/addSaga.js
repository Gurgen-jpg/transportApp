import {takeEvery, call, put} from "redux-saga/effects";
import {CREATE_NEW_ORDER} from "../../contants";
import {appApi} from "../../api/appApi";
import {setErrorAC, setFetchingAC} from "../actions/actions";


export function* addWorkerSaga(action) {
    try {
        yield put(setFetchingAC(true))
        yield call(appApi.addOrder, action.newOrder)
        yield put(setFetchingAC(false))
    } catch (e) {
        yield put(setErrorAC(e))

    }
}

    export function* addSaga() {
        yield takeEvery(CREATE_NEW_ORDER, addWorkerSaga)
    }