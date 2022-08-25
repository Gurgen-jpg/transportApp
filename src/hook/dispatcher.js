import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    deleteOrderAC, mapResizeAC,
    setEndPointAC, setShowRoutingAC,
    setStartPointAC
} from "../store/actions/actions";



const allActions = {
    setStartPointAC,
    setEndPointAC,
    setShowRoutingAC,
    deleteOrderAC,
    mapResizeAC
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};