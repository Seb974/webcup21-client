import React from 'react';
import RelaypointMarker from './tools/RelaypointMarker';
import RelaypointTooltip from './tools/RelaypointTooltip';

const RelaypointTools = ({ displayedRelaypoints, relayPointTooltip, setRelaypointTooltip }) => {

    return (
        <>
            { displayedRelaypoints.map(relaypoint => {
                const { id, position } = relaypoint;
                return <RelaypointMarker
                            key={ id }
                            position={ position } 
                            relaypoint={ relaypoint } 
                            setTooltip={ setRelaypointTooltip }
                        />
                })
            }
            <RelaypointTooltip relaypoint={ relayPointTooltip } />
        </>
    );
}
 
export default RelaypointTools;