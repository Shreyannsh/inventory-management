import "../../commonCssForModal.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSale, fetchItems } from "../../redux/actions";

export default function AddSales(props) {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);
  const [newSale, setNewSale] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const inventoryItemNameList = inventory?.reduce(
    (acc, crr) => [...acc, crr.name],
    []
  );

  const selectedSoldItem = inventory.find((item) => item.name === newSale.name);

  const addFunction = () => {
    if (newSale.quantity > selectedSoldItem.quantity) {
      console.log("Quantity is more than available in inventory");
      // toast.error("Quantity is more than available in inventory");
    } else {
      dispatch(addSale(newSale));
      setNewSale({
        name: "",
        price: 0,
        quantity: 0,
      });
      props.onClose();
    }
  };

  const closeFunction = () => {
    props.onClose();
    setNewSale({
      name: "",
      price: 0,
      quantity: 0,
    });
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  if (!props.show) {
    return null;
  }
  // inline css added to reslove very minute css issue else all is common
  return (
    <div className="parent">
      <div className="child " style={{ height: "19rem" }}>
        <h2 className="modalTitle">ADD SALE</h2>
        <span
          style={{ top: "-15%" }}
          className="closeBtn"
          onClick={() => closeFunction()}
        >
          X
        </span>
        <div className="inputSection">
          <p>Sold Item</p>
          <select
            className="AddSelectInput"
            onChange={(e) => setNewSale({ ...newSale, name: e.target.value })}
          >
            <option value="">Select</option>
            {inventoryItemNameList.map((itemName) => (
              <option key={itemName} value={itemName}>
                {itemName}
              </option>
            ))}
          </select>
          <p>Price</p>
          <input
            className="Addinput"
            id="price"
            type="number"
            value={selectedSoldItem?.price}
            onChange={(e) =>
              setNewSale({ ...newSale, price: Number(e.target.value) })
            }
          />
          <p>Quantity</p>
          <input
            className="Addinput"
            id="quantity"
            type="number"
            value={newSale.quantity}
            onChange={(e) =>
              setNewSale({ ...newSale, quantity: Number(e.target.value) })
            }
          />
        </div>
        <button className="addBtn" onClick={() => addFunction()}>
          Add Sale
        </button>
      </div>
    </div>
  );
}
