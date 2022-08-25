import React, {useState} from 'react';
import s from './orderForm.module.css';
import {SelectContainer} from "./SelectContainer";

const Order = ({showRout, id, startObj, endObj}) => {
    const [startCity, setStartCity] = useState(startObj?.["Город"])
    const [endCity, setEndCity] = useState(endObj?.["Город"])

    return (
        <div className={s.selectBlock}>
            <SelectContainer
                point={startCity}
                setPoint={setStartCity}
            />
            <SelectContainer
                point={endCity}
                setPoint={setEndCity}
            />
        </div>
    );
};

export default Order;