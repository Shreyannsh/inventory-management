import { useEffect, useState } from "react";
import AddSales from "../../modals/addSale/addSale";
import { fetchSales } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SalesPage() {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const salesList = useSelector((state) => state.sales);

  const total_revenue = salesList.reduce(
    (acc, crr) => acc + crr.price * crr.quantity,
    0
  );

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  return (
    <div>
      <h1>SALES</h1>
      <button onClick={() => setShow(true)}>Add Item</button>
      <AddSales onClose={() => setShow(false)} show={show} />
      <table>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Sold Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {salesList.map((sale, index) => (
            <tr key={sale._id}>
              <td>{index + 1}</td>
              <td>{sale.name}</td>
              <td>&#8377; {sale.price}</td>
              <td>{sale.quantity}</td>
              <td>&#8377; {sale.price * sale.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total revenue</th>
            <td>&#8377; {total_revenue}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
