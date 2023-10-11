import "./addItem.css";

import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddItem(props) {
  const dispatch = useDispatch();

  const [newItems, setNewItems] = useState({
    itemName: "",
    price: 0,
    quantity: 0,
  });

  const addFunction = () => {
    //dispatch({});
    props.onClose();
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="parent">
      <div className="child">
        <span onClick={() => props.onClose()}>X</span>

        <label htmlFor="itemName">
          Item name
          <input
            id="itemName"
            type="text"
            value={newItems.itemName}
            onChange={(e) =>
              setNewItems({ ...newItems, itemName: e.target.value })
            }
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            type="number"
            value={newItems.price}
            onChange={(e) =>
              setNewItems({ ...newItems, price: e.target.value })
            }
          />
        </label>
        <label htmlFor="quantity">
          Quantity
          <input
            id="quantity"
            type="number"
            value={newItems.quantity}
            onChange={(e) =>
              setNewItems({ ...newItems, quantity: e.target.value })
            }
          />
        </label>

        <button onClick={() => addFunction()}>Add Item</button>
      </div>
    </div>
  );
}
