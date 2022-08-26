import React from 'react';
import {Button} from "antd";

const ButtonContainer = ({title, onButtonClick, children, buttonStyle}) => {
    const onClickHandle = () => {
        onButtonClick()
    }
    return (
        <Button onClick={onClickHandle} className={buttonStyle}>
            {children}
            {title}
        </Button>
    );
};

export default React.memo(ButtonContainer);