import { useDispatch, useSelector } from "react-redux";
import { fetchItems, fetchSales } from "../../redux/actions";
import { useEffect } from "react";

export default function InventoryList(props) {
  const dispatch = useDispatch();
  const inventoryList = useSelector((state) => state.inventory);
  const salesList = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchSales());
  }, []);

  const updatedInventory = inventoryList?.map((item) => {
    const itemToBeUpdated = salesList?.find(
      (soldItem) => soldItem.name === item.name
    );
    if (itemToBeUpdated) {
      return { ...item, quantity: item.quantity - itemToBeUpdated.quantity };
    } else {
      return item;
    }
  });

  if (!props.showInventory) {
    return null;
  }

  return (
    <div>
      <h3>Upadted Inventory available after Sales</h3>
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
          {updatedInventory.length <= 0 ? (
            <tr>
              <td>No data to show !</td>
            </tr>
          ) : (
            updatedInventory?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>&#8377; {item.price}</td>
                <td>
                  {item.quantity > 0
                    ? `${item.quantity} units`
                    : "Out of Stock"}
                </td>
                <td>{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
