import React, {useState} from 'react';
import s from './orderForm.module.css';
import {SelectContainer} from "./SelectContainer";
import {CheckboxContainer} from "./CheckboxContainer";
import {DeleteFilled}  from "@ant-design/icons";
import {useActions} from "../../hook/dispatcher";
import ButtonContainer from "../Button/ButtonContainer";






const Order = ({showRout, id, startObj, endObj}) => {

    const [startCity, setStartCity] = useState(startObj?.["Город"])
    const [endCity, setEndCity] = useState(endObj?.["Город"])
    const [check, setCheck] = useState(showRout)


    const {setShowRoutingAC, deleteOrderAC, setStartPointAC, setEndPointAC } = useActions()

    const setShowRout = () => {
        setCheck(!check)
        setShowRoutingAC({id, show: !check})
    }
    const deleteOrder = () => {
        deleteOrderAC(id)
    }
    const setStart = (point) => {
        debugger
      setStartPointAC({id, point})
    }
    const setEnd = (point) => {
        setEndPointAC({id, point})
    }

    return (
        <div className={showRout? `${s.selectBlock} ${s.orderIsChecked}` : s.selectBlock}>
            <CheckboxContainer isChecked={check} setChecked={setShowRout}/>
            <SelectContainer
                city={startCity}
                setCity={setStartCity}
                setPoint={setStart}
            />
            <SelectContainer
                city={endCity}
                setCity={setEndCity}
                setPoint={setEnd}
            />
            <ButtonContainer onButtonClick={deleteOrder}
                             buttonStyle={s.icon} >
                <DeleteFilled/>
            </ButtonContainer>
        </div>
    );
};

export default React.memo(Order);