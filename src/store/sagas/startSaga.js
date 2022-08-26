import {call, put, takeEvery} from "redux-saga/effects";
import {appApi} from "../../api/appApi";
import {getOrdersAC, setCitiesStateAC, setErrorAC, setFetchingAC, setInitializeAC} from "../actions/actions";
import {START} from "../../contants";

export function* handleOrders() {
    try {
        yield put(setFetchingAC(true))
        const orders = yield call(appApi.getOrders)
        yield put(getOrdersAC(orders))
        yield put(setFetchingAC(false))
    } catch (e) {
        yield put(setErrorAC(e))
    }
}

export function* handleCities() {
    try {
        yield put(setFetchingAC(true))
        const cities = yield call(appApi.getCities);
        yield put(setCitiesStateAC(cities))
        yield put(setFetchingAC(false))
    } catch (e) {
        yield put(setErrorAC(e))
    }
}

export function* workerSaga() {
    yield call(handleCities)
    yield call(handleOrders)
    yield put(setInitializeAC(true))
}

export function* startSaga() {
    yield takeEvery(START, workerSaga)
}