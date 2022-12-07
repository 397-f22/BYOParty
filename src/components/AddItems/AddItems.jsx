import { useState } from "react";
import { useDbUpdate } from "../../utilities/firebase";
import "./AddItems.css";

const AddItems = ({eventId}) => {
    const [update, result] = useDbUpdate(`/events/${eventId}/needed`);
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [unit, setUnit] = useState("");

    const onChangeItem = (e) => {
        setItem(e.target.value);
    }
    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
    }
    const onChangeUnit = (e) => {
        setUnit(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        var newItem = {
            [item] : {
                quantity: quantity,
                units: unit,
                selected: false                
            }
        }        
        update(newItem)
        location.reload()
    }

    return (
        <div className="add-items-form">
            <h1>Add Items</h1>
            <form className="form">
                <div className="form-group">
                    <input type="text" className="form-control" id="Item name" onChange={onChangeItem} placeholder="Enter item name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="Unit" onChange={onChangeUnit} placeholder="Enter unit" />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="Quantity" onChange={onChangeQuantity} placeholder="Enter quantity" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default AddItems;