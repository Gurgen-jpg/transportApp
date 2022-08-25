import React from 'react';
import cities from './../../data/cities.json';
import {Select} from "antd";
import s from './orderForm.module.css'



const {Option} = Select;
const cityData = cities.data
export const SelectContainer = ({point, setPoint, coordinates}) => {
    const handleSetPointChange = (value) => {
        setPoint(value)
    }
    return (
        <Select
            value={point}
            style={{
                width: 220,
            }}
            className={s.select}
            onChange={handleSetPointChange}
        >
            {cityData.map((city, id) => (
                <Option key={id}>{city["Город"]}</Option>
            ))}
        </Select>
    );
};

