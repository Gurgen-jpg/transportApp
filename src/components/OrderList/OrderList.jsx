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
                    orders.map((order, id) => {
                        return <Order key={id}
                                      endObj={order.endPoint}
                                      startObj={order.startPoint}
                                      showRout={order.showRout}
                        />
                    })
                }
            </div>
        </div>
    );
};

