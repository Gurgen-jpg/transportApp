import React from "react";
import s from "./app.module.css";
import "antd/dist/antd.css";
import {ResizableReactEl} from "./components/resizable/ResizableReactEl";
import MapComponent from "./components/MapComponent/MapComponent";
import {OrderList} from "./components/OrderList/OrderList";


export const App = () => {
    return (
        <div className={s.App}>

                <ResizableReactEl>
                            <OrderList/>
                </ResizableReactEl>

            <MapComponent/>
        </div>
    );
};

