import '../../assets/css/map.css';
import React, { useContext, useRef, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import ReactMapGL, { AttributionControl, NavigationControl, FlyToInterpolator } from 'react-map-gl';
import mapboxgl from "mapbox-gl";
import RelaypointTools from './relaypoint/RelaypointTools';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = ({ displayedRelaypoints }) => {

    const map = useRef(null);
    const { currentUser, settings, selectedCatalog } = useContext(AuthContext);
    const apiToken = "pk.eyJ1Ijoic2ViOTc0IiwiYSI6ImNrb2F6bmJqZDJ1aXMyd2x5M3J3azBwMzMifQ.88lRVN1CFwnIkvQyKDSm7A";
    const defaultView = { latitude: -21.065285, longitude: 55.480270, zoom: 9};
    const [viewport, setViewport] = useState(defaultView);
    const [relayPointTooltip, setRelaypointTooltip] = useState(undefined);
    const mapStyle = { top: 0, left: 0, height: '520px', width: '100', mapStyle: 'mapbox://styles/mapbox/light-v8' };

    return (
        <ReactMapGL ref={ map } {...viewport} {...mapStyle} onViewportChange={view => setViewport(view)} mapboxApiAccessToken={ apiToken } attributionControl={false} scrollZoom={ false }>
            <NavigationControl style={ {left: 10, top: 10} } />
            <RelaypointTools
                displayedRelaypoints={ displayedRelaypoints }
                relayPointTooltip={ relayPointTooltip }
                setRelaypointTooltip={ setRelaypointTooltip }
                setViewport={ setViewport }
            />
            <AttributionControl compact={ true } style={ {right: 0, bottom: 0} } />
        </ReactMapGL>
    );
}

export default Map;