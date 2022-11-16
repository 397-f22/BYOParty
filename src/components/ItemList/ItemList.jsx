import { useState } from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ items, setItems }) => {

    const setSelect = (id) => {
        const newState = items.map((obj, num) => {
            if (num == id) {
                console.log(obj)
                return { ...obj, selected: !obj.selected };
            }

            return obj;
        });


        setItems(newState);
    }

    console.log(items)

    return (
        <div className="item-list">
            {Object.entries(items).map(([id, data]) =>
                <Item id={id} data={data} setSelect={setSelect} />
            )}
        </div>
    )
}

export default ItemList;