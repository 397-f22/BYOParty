import { useState } from 'react';
import EventDetails from '../EventDetails/EventDetails';
import AddItems from '../AddItems/AddItems';
import { useDbData } from '../../utilities/firebase';
import { useAuthState } from "../../utilities/firebase";
import './Main.css';

const MainHost = ({eventId}) => {
    const [user] = useAuthState();
    const uid = user?.uid ? user.uid : "1";

    const [userData, userError] = useDbData(`/users/${uid}`);
    const [data, error] = useDbData("/events/" + eventId);

    if (userError) return <h1>Error loading data: {error.toString()}</h1>;
	if (userData === undefined) return <h1>Loading data...</h1>;
	if (!userData) return <h1>No data found</h1>;

    if (error) return <h1>Error loading data: {error.toString()}</h1>;
	if (data === undefined) return <h1>Loading data...</h1>;
	if (!data) return <h1>No data found</h1>;

    return data.hostId.toString() === uid ? 
    (
        <div>
            <EventDetails details={data.details}></EventDetails>
            <AddItems eventId={eventId}/>
        </div>
    )    
    : (
        <h3>Sorry! You're not the host of this event!</h3>
    )
}

export default MainHost;