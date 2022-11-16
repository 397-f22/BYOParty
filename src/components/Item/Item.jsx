import { useState } from 'react';
import './Item.css';

const Item = ({id, data, setSelect}) => {

    return (
        <button className={data.selected? "item-card-selected" : "item-card"} onClick={()=>setSelect(id)}>
            <p>{data.item} x {data.quantity} {data.units}</p>
        </button>
    )
}

export default Item;