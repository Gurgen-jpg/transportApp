import React from 'react';
import {Checkbox} from "antd";

export const CheckboxContainer = ({isChecked, setChecked}) => {
    const onChangeHandler = (event) => {
        setChecked(!event.target.checked)
    }
    return (
        <Checkbox
            value={isChecked}
            onChange={onChangeHandler}
        >
        Показать
        </Checkbox>
    );
};

