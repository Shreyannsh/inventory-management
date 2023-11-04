import "../../commonCssForModal.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem, fetchItems } from "../../redux/actions";

export default function AddItem(props) {
  const dispatch = useDispatch();

  const [newItems, setNewItems] = useState({
    itemName: "",
    quantity: 0,
    price: 0,
    category: "",
  });

  const inventoryList = useSelector((state) => state.inventory);

  const [otherCat, setOtherCat] = useState(false);

  const categoryList = inventoryList.reduce((acc, crr) => {
    if (!acc?.includes(crr.category)) {
      acc = [...acc, crr.category];
    }
    return acc;
  }, []);

  const selectedItem = inventoryList.find((item) => item._id === props.itemId);

  const existingItem = inventoryList.find(
    (item) => item.name === newItems.itemName
  );

  const addFunction = () => {
    if (existingItem) {
      console.log("the item already exist");
    } else {
      dispatch(addItem(newItems));
      setOtherCat(false);
      setNewItems({
        itemName: "",
        quantity: 0,
        price: 0,
        category: "",
      });
      props.onClose();
    }
  };

  const editFunction = () => {
    if (selectedItem === newItems) {
      console.log("same as before");
    } else {
      dispatch(editItem(props.itemId, newItems));
      setNewItems({
        itemName: "",
        quantity: 0,
        price: 0,
        category: "",
      });
      props.onClose();
      props.closeEditMode();
    }
  };

  const closeFunction = () => {
    props.onClose();
    props.closeEditMode();
    setOtherCat(false);
    setNewItems({
      itemName: "",
      quantity: 0,
      price: 0,
      category: "",
    });
  };

  const initialValue = () => {
    if (props.edit) {
      setNewItems({
        itemName: selectedItem.name,
        quantity: selectedItem.quantity,
        price: selectedItem.price,
        category: selectedItem.category,
      });
    }
  };

  useEffect(() => {
    initialValue();
  }, [props.edit]);

  if (!props.show) {
    return null;
  }

  return (
    <div className="parent">
      <div className="child">
        <h2 className="modalTitle">{props.edit ? "EDIT " : "ADD"} ITEM</h2>

        <span className="closeBtn" onClick={() => closeFunction()}>
          X
        </span>
        <div className="inputSection">
          <p>Item name</p>
          <input
            className="Addinput"
            type="text"
            value={newItems.itemName}
            onChange={(e) =>
              setNewItems({ ...newItems, itemName: e.target.value })
            }
          />
          <p>Price</p>
          <input
            className="Addinput"
            type="number"
            value={newItems.price}
            onChange={(e) =>
              setNewItems({ ...newItems, price: Number(e.target.value) })
            }
          />
          <p>Quantity</p>
          <input
            className="Addinput"
            type="number"
            value={newItems.quantity}
            onChange={(e) =>
              setNewItems({ ...newItems, quantity: Number(e.target.value) })
            }
          />
          <p>Category</p>
          <select
            className="AddSelectInput"
            value={newItems.category}
            onChange={(e) =>
              e.target.value === "other"
                ? setOtherCat(true)
                : setNewItems({ ...newItems, category: e.target.value })
            }
          >
            <option value="">select </option>
            {categoryList.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
            <option value="other">other</option>
          </select>
          {otherCat ? (
            <input
              type="text"
              placeholder="specify category"
              onChange={(e) =>
                setNewItems({ ...newItems, category: e.target.value })
              }
            />
          ) : null}
        </div>
        <button
          className="addBtn"
          onClick={() => {
            props.edit ? editFunction() : addFunction();
          }}
        >
          {props.edit ? "Edit Item" : "Add Item"}
        </button>
      </div>
    </div>
  );
}
