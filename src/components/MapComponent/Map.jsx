import React from 'react';
import {TileLayer, useMap} from "react-leaflet";
import {useSelector} from "react-redux";

export const Map = () => {
    const resize = useSelector(store => store.app.isResize)
    const map = useMap()

    if (!resize) {
        map.invalidateSize()
    }

    return (
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    );
};

