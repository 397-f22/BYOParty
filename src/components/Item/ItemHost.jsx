import { useState } from 'react';
import './Item.css';
import { uId } from '../../App';

const ItemHost= ({name, data, setSelect, id, user}) => {
    
    return (
        <button className={data.selected === user.uid? "item-card-selected " : "item-card"} onClick={()=>setSelect(id)}>
            <div className='d-inline-flex align-items-center'>
            <p>{name} x {data.quantity} {data.units == null? data.units: null} <button className="btn btn-link-dark text-decoration-none p-0">X</button> </p>
            </div>
        </button>
    )
}

export default ItemHost;