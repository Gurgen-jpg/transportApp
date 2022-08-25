export const SET_START_POINT = 'SET-START-POINT';
export const SET_END_POINT = 'SET-END-POINT';
export const SHOW_ROUTING = 'SHOW-ROUTING';
export const CREATE_NEW_ORDER = 'CREATE-NEW-ORDER';
export const DELETE_ORDER = 'DELETE-ORDER';
export const MAP_RESIZE = 'MAP-RESIZE';

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
