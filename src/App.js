import React from "react";
import s from "./app.module.css";
import "antd/dist/antd.css";
import {ResizableReactEl} from "./components/resizable/ResizableReactEl";
import MapComponent from "./components/MapComponent/MapComponent";


export const App = () => {
    return (
        <div className={s.App}>
            <div>
                <ResizableReactEl>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{backgroundColor: "#2b16f1", minWidth: "500px", height: "30px"}}>
                        </div>
                        <div style={{backgroundColor: "#ad1616", minWidth: "500px", height: "30px"}}>
                        </div>
                    </div>
                </ResizableReactEl>
            </div>
            <MapComponent/>
        </div>
    );
};

