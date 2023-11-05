import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../../redux/actions";

export default function SalesList(props) {
  const dispatch = useDispatch();
  const salesList = useSelector((state) => state.sales);

  const total_revenue = salesList?.reduce(
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
      <h2>Sales Data</h2>
      <table>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Sold Item</th>
            <th>Quantity</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {salesList.map((sale, index) => (
            <tr key={sale._id}>
              <td>{index + 1}</td>
              <td>{sale.name}</td>

              <td>{sale.quantity} units</td>
              <td>&#8377; {sale.price * sale.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Total revenue</th>
            <td>&#8377; {total_revenue}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
