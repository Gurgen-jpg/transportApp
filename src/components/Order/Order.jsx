import React from 'react';
import s from './orderForm.module.css';
import {SelectContainer} from "./SelectContainer";

const Order = ({startObj, endObj}) => {
    return (
        <div className={s.selectBlock}>
           <SelectContainer/>
           <SelectContainer/>
        </div>
    );
};

export default Order;