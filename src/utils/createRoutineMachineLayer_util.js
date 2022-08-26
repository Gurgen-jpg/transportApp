import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";


export const createRoutineMachineLayer = (startPoint, endPoint) => () => {
    return L.Routing.control({
        waypoints: [
            L.latLng(startPoint["Широта"], startPoint["Долгота"]),
            L.latLng(endPoint["Широта"], endPoint["Долгота"])
        ],
        lineOptions: {
            styles: [{color: "blue", weight: 4}]
        },
        // show: false,
        // addWaypoints: false,
        // routeWhileDragging: true,
        // draggableWaypoints: true,
        // fitSelectedRoutes: true,
        // showAlternatives: false
    });
};

