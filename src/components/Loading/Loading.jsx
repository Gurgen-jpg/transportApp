import React from 'react';
import {Spin} from "antd";

const Loading = () => {
    return (
        <Spin size="large"
              style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}/>
    );
};

export default Loading;