import React from 'react';
import "leaflet-routing-machine";

import {createControlComponent} from "@react-leaflet/core";
import {createRoutineMachineLayer} from "../../utils/createRoutineMachineLayer_util";


const RoutingContainer = ({order}) => {
    let { startPoint, endPoint } = order
    const Routing = createControlComponent(createRoutineMachineLayer(startPoint,endPoint));

    return (<Routing/>);


};
export default RoutingContainer;

