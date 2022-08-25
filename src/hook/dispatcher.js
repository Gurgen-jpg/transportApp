import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setEndPointAC,
    setStartPointAC
} from "../store/actions/actions";



const allActions = {
    setStartPointAC,
    setEndPointAC,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};