import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import EventDetails from '../EventDetails/EventDetails';
import './Main.css';

let fakeData = {
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
                selected: true
            },
        ]
};

const Main = () => {


    const [items, setItems] = useState(fakeData.needed);

    return (
        <div>
            <EventDetails details={fakeData.details}></EventDetails>
            <ItemList items={items} setItems={setItems}></ItemList>
        </div>
    )
}

export default Main;