import React from 'react';
import cities from './../../data/cities.json';
import {Select} from "antd";
import s from './orderForm.module.css'
import {cityObject_util} from "../../utils/cityObject_util";



const {Option} = Select;
const cityData = cities.data
export const SelectContainer = ({city, setCity, setPoint}) => {
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
            {cityData.map((city, id) => (
                <Option key={id} value={city["Город"]}
                >{city["Город"]}</Option>
            ))}
        </Select>
    );
};

