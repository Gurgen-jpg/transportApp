import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import s from './map.module.css'
import {useSelector} from "react-redux";
import {Map} from "./Map";



const MapComponent = () => {
    const center = useSelector(store => store.app.map.center)
    // const resize = useSelector(store => store.app.map.isResize)
    return (
        <MapContainer center={[center.lat, center.lon]} zoom={13} scrollWheelZoom={false} className={s.leafletContainer}>
            <Map/>
            {/*<TileLayer*/}
            {/*    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
            {/*    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
            {/*/>*/}
            <Marker position={[center.lat, center.lon]}>
                {/*<Popup>*/}
                {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
                {/*</Popup>*/}
            </Marker>
        </MapContainer>

    );
};

export default MapComponent;
