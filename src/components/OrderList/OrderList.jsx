import React from 'react';
import s from './orderList.module.css';
import Order from "../Order/Order";
import {useSelector} from "react-redux";


export const OrderList = () => {
    const orders = useSelector(store => store.app.orders)

    return (
        <div className={s.wrapper}>
            <h4>Список заказов</h4>
            <div className={s.orderContainer}>
                {
                    orders.map(({id, endPoint, startPoint, showRout}) => {
                        return <Order key={id}
                                      id={id}
                                      endObj={endPoint}
                                      startObj={startPoint}
                                      showRout={showRout}
                        />
                    })
                }
            </div>
        </div>
    );
};

