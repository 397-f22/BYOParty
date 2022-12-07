import { useState } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { uId } from '../../App';
import { useDbUpdate } from '../../utilities/firebase';

const ItemList = ({ initItems, user }) => {
    const [items, setItems] = useState(initItems);
    const [displayItems, setDisplayItems] = useState(items)

    const setSelect = (id) => {
        //console.log(items)
        const newState = Object.fromEntries(Object.entries(items).map(([key, obj], num) => {
            if (num == id) {
                return [key, { ...obj, selected: obj.selected == false ? user.uid : false }];
            }
            return [key, obj];
        }))
        setItems(newState);
        filterItems(newState);
    }

    const filterItems = (itemList) => {
        if (document.getElementById("my-list").checked) {
            const newState = Object.fromEntries(Object.entries(itemList).filter(([_, obj]) => obj.selected === user.uid));
            setDisplayItems(newState)
        }
        else {
            setDisplayItems(itemList)
        }
    }
    const ItemDisplay = () => {
        if (Object.keys(displayItems).length > 0) {
            return (
                Object.entries(displayItems).map(([key, data], i) => {
                    if (data.selected == user.uid || data.selected == false) {
                        return (<Item name={key} id={i} data={data} setSelect={setSelect} user={user} />)
                    }
                }
                )
            )
            // add that only if setSelect == false we should display it 
        }
        else {
            return (
                <div className="no-items">
                    <h3>You haven't selected any items</h3>
                </div>
            )
        }
    }
    const SaveSelection = () => {
        const selections = Object.fromEntries(Object.entries(items).filter(([_, obj]) => obj.selected === user.uid));
        Object.entries(selections).map(([key, data], i) => console.log(key))
        console.log(items)
        console.log(user.uid)
        //useDbUpdate(`/events/${eventId}/needed`);
    }
    return (
        <div className="item-wrapper">
            <div className="checkbox-div">
                <div className="round">
                    <input type="checkbox" id="my-list" name="my-list" onClick={() => filterItems(items)} />
                    <label htmlFor="my-list"></label>
                </div>
                <h5>Only Show What I'm Bringing</h5>
            </div>
            <div className="item-list">
                <ItemDisplay />
            </div>
            <button className="save-button" onClick={() => SaveSelection()}>Save Selections</button>
        </div>
    )
}

export default ItemList;