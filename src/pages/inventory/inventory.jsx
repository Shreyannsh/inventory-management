import { useEffect, useState } from "react";
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
    <div>
      <h1>INVENTORY</h1>
      <button onClick={() => setShow(true)}>Add Item</button>
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
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td>
                {" "}
                <button onClick={() => dispatch(removeItem(item._id))}>
                  Delete
                </button>
              </td>
              <td>
                {" "}
                <button onClick={() => editFunction(item._id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
