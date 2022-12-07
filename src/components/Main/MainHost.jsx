import { useState } from 'react';
import EventDetails from '../EventDetails/EventDetails';
import AddItems from '../AddItems/AddItems';
import { useDbData } from '../../utilities/firebase';
import './Main.css';
import ItemListHost from '../ItemList/ItemListHost';


const MainHost = ({eventId, user}) => {
    if(!user) { return <h3>Please sign in!</h3>}
    let uid = user.uid;

    const [data, error] = useDbData("/events/" + eventId);

    if (error) return <h3>Error loading data: {error.toString()}</h3>;
	if (data === undefined) return <h3>Loading data...</h3>;
	if (!data) return <h3>No data found</h3>;

    return data.details.hostId.toString() === uid ? 
    (
        <div>
            <EventDetails details={data.details} eventId={eventId} needed={data.needed}></EventDetails>
            {data.needed? <ItemListHost user={user} initItems={data.needed}/>: null}
            <AddItems eventId={eventId}/>
        </div>
    )    
    : (
        <h3>Sorry! You're not the host of this event!</h3>
    )
}

export default MainHost;