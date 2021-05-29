import React from 'react';
import { Marker } from 'react-map-gl';

const RelaypointMarker = ({ position, relaypoint, setTooltip, setPopup }) => {

    const handleClick = e => {
        e.preventDefault();
        setTooltip(undefined);
    };

    return position === null ? null : (
        <Marker key={ relaypoint.id } latitude={ position[0] } longitude={ position[1] } offsetLeft={10} offsetTop={-35}>
            <a href="#" onClick={ handleClick }>
                <img 
                    alt="Relaypoint" 
                    src={"/images/icons/relaypoint-marker.png" }
                    onMouseEnter={ () => setTooltip(relaypoint)} 
                    onMouseLeave={ () => setTooltip(undefined) }
                />
            </a>
        </Marker>
    );
}
 
export default RelaypointMarker;