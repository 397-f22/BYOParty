import { useState } from 'react';
import './Item.css';
import { uId } from '../../App';

const Item = ({name, data, setSelect, id, user}) => {
    return (
        <button className={data.selected === user.uid? "item-card-selected" : "item-card"} onClick={()=>setSelect(id)}>
            <p key={"item-"+name} data-testId={"item-"+name}>{name} x {data.quantity} {data.units == null? data.units: null}</p>
        </button>
    )
}

export default Item;