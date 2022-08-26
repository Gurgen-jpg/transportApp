import React from 'react';
import {Select} from "antd";
import s from './orderForm.module.css'
import {cityObject_util} from "../../utils/cityObject_util";
import {useSelector} from "react-redux";



const {Option} = Select;

export const SelectContainer = ({city, setCity, setPoint}) => {
    const cityData = useSelector(store => store.app.cityList)
    const handleSetPointChange = (value) => {
        setPoint(cityObject_util(cityData, value))
        setCity(value)
    }
    return (
        <Select
            value={city}
            style={{
                width: 220,
            }}
            className={s.select}
            onChange={handleSetPointChange}
        >
            {
                cityData && cityData.map((city, id) => (
                <Option key={id} value={city["Город"]}
                >{city["Город"]}</Option>
            ))
            }
        </Select>
    );
};

