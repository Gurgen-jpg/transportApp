import React, {useState} from 'react';
import s from './orderForm.module.css';
import {SelectContainer} from "./SelectContainer";
import {CheckboxContainer} from "./CheckboxContainer";
import {DeleteFilled}  from "@ant-design/icons";

const Order = ({showRout, id, startObj, endObj}) => {
    const [startCity, setStartCity] = useState(startObj?.["Город"])
    const [endCity, setEndCity] = useState(endObj?.["Город"])
    const [check, setCheck] = useState(false)
    return (
        <div className={s.selectBlock}>
            <CheckboxContainer isChecked={check} setChecked={setCheck}/>
            <SelectContainer
                point={startCity}
                setPoint={setStartCity}
            />
            <SelectContainer
                point={endCity}
                setPoint={setEndCity}
            />
            <div className={s.icon}>
                <DeleteFilled/>
            </div>
        </div>
    );
};

export default Order;