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

        console.log(newState);
        setItems(newState);
        console.log(items)
        filterItems(newState);
        console.log(displayItems)
    }

    const filterItems = (itemList) =>{
        if(document.getElementById("my-list").checked){
            const newState = itemList.map((obj, num) => {
                if (obj.selected == uId) {
                    return obj;
                }
            });
            setDisplayItems(newState)
        }
        else{
            setDisplayItems(itemList)
        }
    }




    return (
        <div className="item-wrapper">
            <div>
                <input type="checkbox" id="my-list" name="my-list" onClick={() => filterItems(items)}/>
                <label htmlFor="my-list">What I'm Bringing</label>
            </div>
            
            <div className="item-list">
                {Object.entries(displayItems).map(([id, data]) =>

                    <Item id={id} data={data} setSelect={setSelect} />
                )}
            </div>
            <button className="save-button">Save Selections</button>
        </div>
    )
}

export default ItemList;