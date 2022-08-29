import {combineReducers, compose, createStore, applyMiddleware} from "redux";
import {appReducer} from "./reducers/app-reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'




export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    app: appReducer
})

export const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
);


export const store = configureStore({})
sagaMiddleware.run(rootSaga)
