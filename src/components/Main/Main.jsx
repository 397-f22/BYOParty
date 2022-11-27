import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import EventDetails from '../EventDetails/EventDetails';
import AddItems from '../AddItems/AddItems';
import { useDbData } from '../../utilities/firebase';
import { useAuthState } from "../../utilities/firebase";
import './Main.css';

const Main = ({eventId}) => {
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


    return (
        <div>
            <EventDetails details={data.details}></EventDetails>
            <ItemList initItems={data.needed}  ></ItemList>
            { data.hostId.toString() === uid ? <AddItems eventId={eventId}/> : null }
        </div>
    )    
}

export default Main;