import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import EventDetails from '../EventDetails/EventDetails';
import { useDbData } from '../../utilities/firebase';
import './Main.css';
import { uId } from '../../App';

const Main = ({eventId}) => {
    const [data, error] = useDbData("/events/" + eventId);

    if (error) return <h1>Error loading data: {error.toString()}</h1>;
	if (data === undefined) return <h1>Loading data...</h1>;
	if (!data) return <h1>No data found</h1>;
        
    //if user id == host id => render host page 
    //else render attendee page
    return (
        <div>
            <EventDetails details={data.details}></EventDetails>
            <ItemList initItems={data.needed} ></ItemList>
        </div>
    )    
}

export default Main;