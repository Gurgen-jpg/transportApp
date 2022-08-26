import { Alert } from 'antd';
import React from 'react';
import {select} from "redux-saga/effects";

export const AlertContainer = () => {
    const message = select(store => store.app.error)
    return (
        <Alert
            closable
            message={message ? message : ''}
            type="error"/>
    )
}
