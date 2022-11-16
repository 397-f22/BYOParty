import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './Main.css';

let fakeData = [
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

const Main = () => {

	const [data, setData] = useState(fakeData);

    return (
        <div>
            <ItemList items={data} setItems={setData}></ItemList>
        </div>
    )
}

export default Main;