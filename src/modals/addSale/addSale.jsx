import "./addSale.css";

import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddSales(props) {
  const dispatch = useDispatch();

  const [newSale, setNewSale] = useState({
    name: "",
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
            value={newSale.name}
            onChange={(e) => setNewSale({ ...newSale, name: e.target.value })}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            type="number"
            value={newSale.price}
            onChange={(e) => setNewSale({ ...newSale, price: e.target.value })}
          />
        </label>
        <label htmlFor="quantity">
          Quantity
          <input
            id="quantity"
            type="number"
            value={newSale.quantity}
            onChange={(e) =>
              setNewSale({ ...newSale, quantity: e.target.value })
            }
          />
        </label>

        <button onClick={() => addFunction()}>Add Sale</button>
      </div>
    </div>
  );
}
