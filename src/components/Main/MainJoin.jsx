import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import EventDetails from '../EventDetails/EventDetails';
import AddItems from '../AddItems/AddItems';
import { useDbData } from '../../utilities/firebase';
import { useAuthState } from "../../utilities/firebase";
import './Main.css';

const MainJoin = ({eventId, user}) => {
    if(!user) { return <h3>Please sign in!</h3>}
    let uid = user.uid;

    const [data, error] = useDbData("/events/" + eventId);

    if (error) return <h1>Error loading data: {error.toString()}</h1>;
	if (data === undefined) return <h1>Loading data...</h1>;
	if (!data) return <h1>No data found</h1>;


    return (
        <div>
            <EventDetails details={data.details}></EventDetails>
            <ItemList user={user} initItems={data.needed}  ></ItemList>
            { data.details.hostId.toString() === uid ?  <AddItems eventId={eventId}/> : null }
        </div>
    )    
}

export default MainJoin;