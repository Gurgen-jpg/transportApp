import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    createNewOrderAC,
    deleteOrderAC,
    mapResizeAC,
    setEndPointAC,
    setInitializeAC,
    setShowRoutingAC,
    setStartPointAC,
    startAppAC
} from "../store/actions/actions";



const allActions = {
    setStartPointAC,
    setEndPointAC,
    setShowRoutingAC,
    deleteOrderAC,
    mapResizeAC,
    createNewOrderAC,
    setInitializeAC,
    startAppAC
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};