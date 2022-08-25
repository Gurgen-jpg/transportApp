import {combineReducers, compose, createStore, applyMiddleware} from "redux";
import {appReducer} from "./reducers/app-reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

//подключение redux devtools
export const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    app: appReducer
})

export const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);


export const store = configureStore({})
sagaMiddleware.run(rootSaga)