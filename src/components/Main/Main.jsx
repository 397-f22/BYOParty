import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import EventDetails from '../EventDetails/EventDetails';
import './Main.css';
import { uId } from '../../App';

let fakeData = {
    "1234": {
        details: {
            title: "Housewarming",
            host: "Susan Saroza",
            time: "November 23, 2022 at 8:00"
        },
        needed:
            [
                {
                    item: "milk",
                    quantity: 2,
                    units: "gallons",
                    selected: false
                },
                {
                    item: "cups",
                    quantity: 20,
                    units: null,
                    selected: false
                },
                {
                    item: "forks",
                    quantity: 30,
                    units: null,
                    selected: false
                },
            ]
    }
};

const Main = ({eventId}) => {

    const fakeEvent = fakeData[eventId];
    const [items, setItems] = useState(fakeEvent.needed);

    return (
        <div>
            <EventDetails details={fakeEvent.details}></EventDetails>
            <ItemList items={items} setItems={setItems}></ItemList>
        </div>
    )
}

export default Main;