import "./addItem.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem } from "../../redux/actions";

export default function AddItem(props) {
  const dispatch = useDispatch();
  const inventoryList = useSelector((state) => state.inventory);
  const [otherCat, setOtherCat] = useState(false);

  const [categoryList, setCategoryList] = useState([
    "shoes",
    "clothes",
    "watches",
    "accessories",
    "jewellery",
  ]);

  const [newItems, setNewItems] = useState({
    itemName: "",
    price: 0,
    quantity: 0,
    category: "",
  });

  const selectedItem = inventoryList.find((item) => item._id === props.itemId);

  const addFunction = () => {
    const existingItem = inventoryList.find(
      (item) => item.name === newItems.itemName
    );

    const existingCategory = categoryList.find(
      (item) => item === newItems.category
    );

    if (existingItem) {
      console.log("the item already exist");
    } else {
      dispatch(addItem(newItems));
      setOtherCat(false);
      if (existingCategory) {
        setCategoryList([...categoryList, newItems.category]);
      }
      props.onClose();
    }
  };

  const editFunction = () => {
    console.log(selectedItem);
    if (selectedItem === newItems) {
      console.log("same as before");
    } else {
      dispatch(editItem(props.itemId, newItems));
      setCategoryList([...categoryList, newItems.category]);
      props.onClose();
      props.closeEditMode();
    }
  };

  const closeFunction = () => {
    props.onClose();
    setOtherCat(false);
  };

  if (!props.show) {
    return null;
  }

  useEffect(() => {
    setNewItems(selectedItem);
  }, []);

  return (
    <div className="parent">
      <div className="child">
        <h2>{props.edit ? "EDIT " : "ADD"} ITEM</h2>

        <span onClick={() => closeFunction()}>X</span>
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
        <label>
          Category
          <select
            onChange={(e) =>
              e.target.value === "other"
                ? setOtherCat(true)
                : setNewItems({ ...newItems, category: e.target.value })
            }
          >
            <option value="">select </option>
            {categoryList.map((cat) => (
              <option>{cat}</option>
            ))}
            <option value="other">other</option>
          </select>
        </label>
        {otherCat ? (
          <input
            type="text"
            placeholder="specify category"
            onChange={(e) =>
              setNewItems({ ...newItems, category: e.target.value })
            }
          />
        ) : null}

        <button
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
