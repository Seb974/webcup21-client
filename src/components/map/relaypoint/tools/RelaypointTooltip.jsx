import React, { useEffect, useState } from 'react';
import { Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';
import { isDefined } from '../../../../helpers/utils';

const RelaypointTooltip = ({ relaypoint }) => {

    return !isDefined(relaypoint) ? <></> : (
        <Popup latitude={relaypoint.position[0]} longitude={relaypoint.position[1]} offsetLeft={10} offsetTop={-35}>
            <div className="text-center">
                <p className="mb-0">{ relaypoint.name }</p>
                <p className="mb-0 mt-0">{ relaypoint.city }</p>
                <small className="mt-0">cliquez pour visiter</small>
            </div>
        </Popup>
    );
}
 
export default RelaypointTooltip;