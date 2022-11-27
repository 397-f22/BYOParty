import { useState } from "react";
import "./AddItems.css";

const AddItems = () => {
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
        console.log(item, quantity, unit);
    }
    return (
        <div>
            <h1>Add Items</h1>
            <form class="form">
                <div class="form-group">
                    <input type="text" class="form-control" id="Item name" onChange={onChangeItem} placeholder="Enter item name" />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" id="Unit" onChange={onChangeUnit} placeholder="Enter unit" />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" id="Quantity" onChange={onChangeQuantity} placeholder="Enter quantity" />
                </div>
                <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default AddItems;