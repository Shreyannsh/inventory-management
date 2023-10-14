import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../../redux/actions";

export default function SalesList(props) {
  const dispatch = useDispatch();
  const salesList = useSelector((state) => state.sales);

  const total_revenue = salesList.reduce(
    (acc, crr) => acc + crr.price * crr.quantity,
    0
  );

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  if (!props.showSales) {
    return null;
  }

  return (
    <div>
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
