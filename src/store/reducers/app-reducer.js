import {
    DELETE_ORDER,
    SET_END_POINT,
    SET_START_POINT,
    SHOW_ROUTING,
    MAP_RESIZE,
    CREATE_NEW_ORDER,
    SET_INITIALIZE, START, GET_CITIES, GET_ORDERS, SET_FETCHING, SET_ERROR
} from "../../contants";


export const appInitState = {
    orders: [],
    map: {
        center: {lat: 55.7558, lon: 37.6173},
    },
    isResize: false,
    cityList: [],
    isInitialize: false,
    start: false,
    error: '',
    isFetching: false,
}

export const appReducer = (state = appInitState, action) => {
    switch (action.type) {
        case START: {
            return {...state, start: true}
        }
        case SET_INITIALIZE: {
            return {...state, isInitialize: action.isInit}
        }
        case GET_CITIES: {
            return {...state, cityList: action.cityList}
        }
        case GET_ORDERS: {
            return {...state, orders: action.orders}
        }
        case CREATE_NEW_ORDER: {
            return {...state, orders: [...state.orders, action.newOrder]}
        }
        case SET_START_POINT: {
            let {id, point} = action.payload
            return {...state, orders: state.orders.map(or => or.id === id ? {...or, startPoint: point} : {...or})}
        }
        case SET_END_POINT: {
            let {id, point} = action.payload
            return {...state, orders: state.orders.map(or => or.id === id ? {...or, endPoint: point} : {...or})}
        }
        case SHOW_ROUTING: {
            let {id, show} = action.payload
            return {...state, orders: state.orders.map(or => or.id === id ? {...or, showRout: show} : {...or})}
        }
        case DELETE_ORDER: {
            return {...state, orders: state.orders.filter(or => or.id !== action.id)}
        }
        case MAP_RESIZE: {
            return {...state, isResize: action.isResize}
        }
        case SET_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_ERROR: {
            return {...state, error: action.error}
        }
        default:
            return {...state}
    }

}