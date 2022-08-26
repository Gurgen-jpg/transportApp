import React from 'react';
import s from './orderList.module.css';
import Order from "../Order/Order";
import {useSelector} from "react-redux";
import ButtonContainer from "../Button/ButtonContainer";
import {useActions} from "../../hook/dispatcher";
import {uuid} from "../../utils/uuid";


export const OrderList = () => {
    const orders = useSelector(store => store.app.orders)
    const {createNewOrderAC} = useActions()

    const createNewOrder = () => {
        createNewOrderAC({id: uuid(), showRout: false, startPoint: {}, endPoint: {}})
    }

    return (
        <div className={s.wrapper}>
            <h2>Список заказов</h2>
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
            <ButtonContainer title="Создать новый заказ"
                             onButtonClick={createNewOrder}
            />
        </div>
    );
};

