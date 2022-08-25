import React from 'react';
import {Checkbox} from "antd";



export const CheckboxContainer = ({isChecked, setChecked}) => {

    const onChangeHandler = () => {
        setChecked()

    }
    return (
        <Checkbox
            checked={isChecked}
            onChange={onChangeHandler}
        >
        Показать
        </Checkbox>
    );
};

