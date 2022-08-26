import {takeEvery, call, select, put} from "redux-saga/effects";
import {SET_END_POINT, SET_START_POINT} from "../../contants";
import {appApi} from "../../api/appApi";
import {findOrder_util} from "../../utils/findOrder_util";
import {setErrorAC, setFetchingAC} from "../actions/actions";



export function* editStartWorkerSaga({ payload }) {
    const orders = yield select()
    try {
        yield put(setFetchingAC(true))
        yield call(appApi.editOrder, payload.id, findOrder_util(orders.app.orders, payload.id))
        yield put(setFetchingAC(false))
    } catch (e) {
        yield put(setErrorAC(e))
    }
 }


export function* editSaga() {
    yield takeEvery(SET_START_POINT, editStartWorkerSaga)
    yield takeEvery(SET_END_POINT, editStartWorkerSaga)
}