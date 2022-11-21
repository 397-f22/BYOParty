import { useState } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { uId } from '../../App';

const ItemList = ({ items, setItems }) => {
    const [displayItems, setDisplayItems] = useState(items)

    const setSelect = (id) => {
        const newState = items.map((obj, num) => {
            if (num == id) {
                return { ...obj, selected: obj.selected==false? uId: false  };
            }

            return obj;
        });
        setItems(newState);
        filterItems(newState);
    }

    const filterItems = (itemList) =>{
        if (document.getElementById("my-list").checked){
            const newState = itemList.filter(obj => obj.selected === uId);
            setDisplayItems(newState)
        }
        else{
            setDisplayItems(itemList)
        }
    }
    const ItemDisplay = () => {
        if (displayItems.length > 0) {
            return(
                Object.entries(displayItems).map(([id, data]) =>
                    <Item id={id} data={data} setSelect={setSelect} />
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
                <h5>Only Show What I'm Bring</h5>
            </div>
            <div className="item-list">
                <ItemDisplay />
            </div>
            <button className="save-button">Save Selections</button>
        </div>
    )
}

export default ItemList;