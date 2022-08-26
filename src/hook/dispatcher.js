import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    createNewOrderAC,
    deleteOrderAC, mapResizeAC,
    setEndPointAC, setShowRoutingAC,
    setStartPointAC
} from "../store/actions/actions";



const allActions = {
    setStartPointAC,
    setEndPointAC,
    setShowRoutingAC,
    deleteOrderAC,
    mapResizeAC,
    createNewOrderAC
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};