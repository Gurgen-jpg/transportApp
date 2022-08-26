import React from "react";
import {MapContainer} from "react-leaflet";
import s from './map.module.css'
import {useSelector} from "react-redux";
import {Map} from "./Map";
import RoutingContainer from "./RoutingContainer";





const MapComponent = () => {
    const center = useSelector(store => store.app.map.center)
    const orders = useSelector(store => store.app.orders)
    const showOrder = orders.filter(el => el.showRout)

    return (
        <MapContainer center={[center.lat, center.lon]}
                      zoom={13}
                      scrollWheelZoom={true}
                      className={s.leafletContainer}
        >
            <Map/>
            {
                showOrder && showOrder?.map(order =>
                <RoutingContainer key={order.id} order={order}/>
                )
            }

        </MapContainer>
    );
};

export default MapComponent;
