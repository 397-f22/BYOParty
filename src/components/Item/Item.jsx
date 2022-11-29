import { useState } from 'react';
import './Item.css';
import { uId } from '../../App';

const Item = ({name, data, setSelect, id}) => {
    return (
        <button className={data.selected === uId? "item-card-selected" : "item-card"} onClick={()=>setSelect(id)}>
            <p>{name} x {data.quantity} {data.units}</p>
        </button>
    )
}

export default Item;