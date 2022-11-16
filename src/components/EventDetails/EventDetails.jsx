import { useState } from 'react';
import './EventDetails.css';

const EventDetails = ({details}) => {

    return (
        <div className='event-wrapper'>
            <h2>{details.title}</h2>
            <p>{details.host}</p>
            <p>{details.time}</p>
        </div>

    )
}

export default EventDetails;