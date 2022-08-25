import React from 'react';
import s from './orderList.module.css';
import Order from "../Order/Order";




export const OrderList = () => {


    return (
        <div className={s.wrapper}>
            <h4>Список заказов</h4>
            <div className={s.orderContainer}>
                <Order/>
                <Order/>
                <Order/>
            </div>
        </div>
    );
};

