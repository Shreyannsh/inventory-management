import "../../commonCssForModal.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

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
    const values = Object.values(newSale);
    if (values.includes("") || values.includes(0)) {
      toast.error("All fields are neccessary !");
    } else if (newSale.quantity > selectedSoldItem.quantity) {
      toast.warning("Quantity is more than available in inventory");
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

  const addSaleValue = (e) => {
    setNewSale({
      ...newSale,
      name: e.target.value,
      price: selectedSoldItem?.price,
    });
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

  return (
    <div className="parent">
      <div className="child ">
        <div className="modalHeader">
          <h2>ADD SALE</h2>
          <span className="closeBtn" onClick={() => closeFunction()}>
            X
          </span>
        </div>
        <div className="inputSection">
          <p>Sold Item</p>
          <select className="AddSelectInput" onChange={(e) => addSaleValue(e)}>
            <option value="">Select</option>
            {inventoryItemNameList.map((itemName) => (
              <option key={itemName} value={itemName}>
                {itemName}
              </option>
            ))}
          </select>
          <p>Price</p>
          <div className="Addinput">{selectedSoldItem?.price} </div>
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
