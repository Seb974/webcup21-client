import React from 'react';
import RelaypointMarker from './tools/RelaypointMarker';
import RelaypointTooltip from './tools/RelaypointTooltip';

const RelaypointTools = ({ displayedRelaypoints, relayPointTooltip, setRelaypointTooltip }) => {

    return (
        <>
            { displayedRelaypoints.map(relaypoint => {
                const { id, metas } = relaypoint;
                return <RelaypointMarker
                            key={ id }
                            position={ metas.position } 
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