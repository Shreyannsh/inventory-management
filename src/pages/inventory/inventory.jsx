import "./inventory.css";
import "../../commonCss.css";

import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineInventory } from "react-icons/md";

import AddItem from "../../modals/addItem/addItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, removeItem } from "../../redux/actions";

export default function InventoryPage() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [itemId, setItemId] = useState("");
  const dispatch = useDispatch();
  const inventoryList = useSelector((state) => state.inventory);

  const editFunction = (itemId) => {
    setShow(true);
    setEdit(true);
    setItemId(itemId);
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="mainPage">
      <div className="title">
        {" "}
        INVENTORY LIST{" "}
        <span className="inventoryIcon">
          <MdOutlineInventory />
        </span>
      </div>
      <button className="addBtn" onClick={() => setShow(true)}>
        {" "}
        <AiOutlineAppstoreAdd /> Add Item
      </button>
      <AddItem
        onClose={() => setShow(false)}
        closeEditMode={() => setEdit(false)}
        show={show}
        edit={edit}
        itemId={itemId}
      />
      <table>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {inventoryList?.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>&#8377; {item.price}</td>
              <td>{item.quantity} units</td>
              <td>{item.category}</td>
              <td className="iconBtn">
                {" "}
                <button className="icon" onClick={() => editFunction(item._id)}>
                  <GrEdit />
                </button>
              </td>
              <td className="iconBtn">
                <button
                  className="icon"
                  onClick={() => dispatch(removeItem(item._id))}
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
