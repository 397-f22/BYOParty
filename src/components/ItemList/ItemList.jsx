import { useState } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { uId } from '../../App';

const ItemList = ({ initItems }) => {
    const [items, setItems] = useState(initItems);
    const [displayItems, setDisplayItems] = useState(items)

    const setSelect = (id) => {
        console.log(items)
        const newState = Object.fromEntries(Object.entries(items).map(([key, obj], num) => {
            if (num == id) {
                return [ key, {...obj, selected: obj.selected==false? uId: false}  ];
            }
            return [key, obj];
        }))
        setItems(newState);
        filterItems(newState);
    }

    const filterItems = (itemList) =>{
        if (document.getElementById("my-list").checked){
            const newState = Object.fromEntries(Object.entries(itemList).filter(([_, obj]) => obj.selected === uId));
            setDisplayItems(newState)
        }
        else{
            setDisplayItems(itemList)
        }
    }
    const ItemDisplay = () => {
        if (Object.keys(displayItems).length > 0) {
            return(
                Object.entries(displayItems).map(([key, data], i) =>
                    <Item name={key} id={i} data={data} setSelect={setSelect} />
                )
            )
        }
        else{
            return(
                <div className="no-items">
                    <h3>You haven't selected any items</h3>
                </div>
            )
        }
    }

    return (
        <div className="item-wrapper">
            <div className="checkbox-div">
                <div className="round">
                    <input type="checkbox" id="my-list" name="my-list" onClick={() => filterItems(items)}/>
                    <label for="my-list"></label>
                </div>
                <h5>Only Show What I'm Bringing</h5>
            </div>
            <div className="item-list">
                <ItemDisplay />
            </div>
            <button className="save-button">Save Selections</button>
        </div>
    )
}

export default ItemList;