import React, {useEffect} from "react";
import s from "./app.module.css";
import "antd/dist/antd.css";
import {ResizableReactEl} from "./components/resizable/ResizableReactEl";
import MapComponent from "./components/MapComponent/MapComponent";
import {OrderList} from "./components/OrderList/OrderList";
import {useSelector} from "react-redux";
import Loading from "./components/Loading/Loading";
import {useActions} from "./hook/dispatcher";
import {AlertContainer} from "./components/Alert/AlertContainer";


export const App = () => {
    const {startAppAC} = useActions()

    useEffect(() => {
        startAppAC()
    }, [])

    const isInitialize = useSelector(store => store.app.isInitialize)
    const error = useSelector(store => store.app.error)
    if (!isInitialize) {
        return <Loading/>
    }
    return (
        <div className={s.wrapper}>
            {error && <AlertContainer/>}
            <div className={s.App}>
                <ResizableReactEl>
                    <OrderList/>
                </ResizableReactEl>
                <MapComponent/>
            </div>
        </div>
    );
};

