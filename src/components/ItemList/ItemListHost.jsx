import { useState } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { uId } from '../../App';
import { useDbUpdate } from '../../utilities/firebase';
import ItemHost from '../Item/ItemHost';


const ItemListHost = ({ initItems, user }) => {
    const [items, setItems] = useState(initItems);
    const [displayItems, setDisplayItems] = useState(items)

    const setSelect = (id) => {
        //console.log(items)
        const newState = Object.fromEntries(Object.entries(items).map(([key, obj], num) => {
            if (num == id) {
                return [ key, {...obj, selected: obj.selected==false? user.uid: false}  ];
            }
            return [key, obj];
        }))
        setItems(newState);
    }
    return (
        <div className="item-wrapper">
            <div className="item-list">
            {Object.entries(items).map(([key, data], i) =>
                    <ItemHost name={key} id={i} data={data} setSelect={setSelect} user={user}/>
                )}
            </div>
        </div>
    )
}

export default ItemListHost;