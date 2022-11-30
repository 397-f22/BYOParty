import { useState } from 'react';
import { useAuthState } from "../../utilities/firebase";
import './EventDetails.css';

const EventDetails = ({details}) => {
    const [user] = useAuthState();
    const uid = user?.uid ? user.uid : "1";

    return (
        <div className={details.hostId == uid? "event-wrapper-host" : "event-wrapper"}>
            
            <h2>{details.title}</h2>
            {details.hostId == uid? <h3>Hosted by you</h3> : <h3>Hosted by {details.host}</h3>}
            <p>{details.time}</p>
        </div>

    )
}

export default EventDetails;