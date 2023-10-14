import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/actions";
import { useEffect } from "react";

export default function InventoryList(props) {
  const dispatch = useDispatch();
  const inventoryList = useSelector((state) => state.inventory);
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  if (!props.showInventory) {
    return null;
  }

  return (
    <div>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
