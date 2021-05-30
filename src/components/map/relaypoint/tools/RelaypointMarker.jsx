import React from 'react';
import { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';

const RelaypointMarker = ({ position, relaypoint, setTooltip, setPopup }) => {

    const handleClick = e => {
        console.log("done");
        setTooltip(undefined);
    };

    return position === null ? null : (
        <Marker key={ relaypoint.id } latitude={ position[0] } longitude={ position[1] } offsetLeft={10} offsetTop={-35}>
            <a href="#" onClick={ handleClick }>
            <Link to={process.env.PUBLIC_URL + "/blog-post/" + relaypoint.id } onClick={ handleClick }>
                <img 
                    alt="Relaypoint" 
                    src={"/images/icons/relaypoint-marker.png" }
                    onMouseEnter={ () => setTooltip(relaypoint)} 
                    onMouseLeave={ () => setTooltip(undefined) }
                />
            </Link>
            </a>
        </Marker>
    );
}
 
export default RelaypointMarker;