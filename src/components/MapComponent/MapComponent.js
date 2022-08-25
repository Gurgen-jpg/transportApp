import React from "react";
import { createControlComponent } from "@react-leaflet/core";
import {MapContainer} from "react-leaflet";
import s from './map.module.css'
import {useSelector} from "react-redux";
import {Map} from "./Map";
import {createRoutineMachineLayer} from "./Routing";
// import Routing from "./Routing";



const MapComponent = () => {
    const center = useSelector(store => store.app.map.center)
    const order = useSelector(store => store.app.orders[0])

    let { startPoint, endPoint } = order

    const Routing = createControlComponent(createRoutineMachineLayer(startPoint,endPoint));

    return (
        <MapContainer center={[center.lat, center.lon]}
                      zoom={13}
                      scrollWheelZoom={true}
                      className={s.leafletContainer}
        >
            <Map/>
            <Routing/>
        </MapContainer>
    );
};

export default MapComponent;
