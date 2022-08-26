import {
    CREATE_NEW_ORDER,
    DELETE_ORDER,
    MAP_RESIZE,
    SET_END_POINT,
    SET_INITIALIZE,
    SET_START_POINT,
    SHOW_ROUTING, START,
    GET_CITIES,
    GET_ORDERS, SET_ERROR, SET_FETCHING
} from "../../contants";


export const setStartPointAC = ({id, point}) => ({
    type: SET_START_POINT,
    payload: {
        id,
        point,
    }
})
export const setEndPointAC = ({id, point}) => ({
    type: SET_END_POINT,
    payload: {
        id,
        point,
    }
})
export const setShowRoutingAC = ({id, show}) => ({
    type: SHOW_ROUTING,
    payload: {
        show,
        id
    }
})
export const deleteOrderAC = (id) => ({
    type: DELETE_ORDER,
    id
})
export const mapResizeAC = (isResize) => ({
    type: MAP_RESIZE,
    isResize
})
export const createNewOrderAC = (newOrder) => ({
    type: CREATE_NEW_ORDER,
    newOrder
})
export const setInitializeAC = (isInit) => ({
    type: SET_INITIALIZE,
    isInit
})
export const startAppAC = () => ({
    type: START
})
export const setCitiesStateAC = (cityList) => ({
    type: GET_CITIES,
    cityList
})
export const getOrdersAC = (orders) => ({
    type: GET_ORDERS,
    orders
})
export const setErrorAC = (error) => ({
    type: SET_ERROR,
    error
})
export const setFetchingAC = (isFetching) => ({
    type: SET_FETCHING,
    isFetching
})