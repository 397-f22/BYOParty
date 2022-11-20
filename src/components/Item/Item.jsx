import { useState } from 'react';
import './Item.css';
import { uId } from '../../App';

const Item = ({id, data, setSelect}) => {

    return (
        <button className={data.selected === uId? "item-card-selected" : "item-card"} onClick={()=>setSelect(id)}>
            <p>{data.item} x {data.quantity} {data.units}</p>
        </button>
    )
}

export default Item;