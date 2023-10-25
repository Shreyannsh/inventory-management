import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../../redux/actions";

export default function SalesList(props) {
  const dispatch = useDispatch();
  const sale = useSelector((state) => state.sales);
  console.log(sale);
  const [salesList, setSalesList] = useState(sale);

  console.log(salesList);

  const total_revenue = salesList?.reduce(
    (acc, crr) => acc + crr.price * crr.quantity,
    0
  );

  const sortFunction = (value) => {
    if (value === "latest") {
      console.log("latest");
      const sortedSales = salesList.sort((a, b) => a.price - b.price);
      setSalesList(sortedSales);
    } else {
    }
  };

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  useEffect(() => {
    setSalesList(sale);
  }, [sale]);

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
            <th>Sale Date</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Revenue</th>
            <th>
              <select onClick={(e) => sortFunction(e.target.value)}>
                <option value="">Sort by date</option>
                <option value="latest">Latest </option>
                <option value="oldest">Oldest </option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {salesList.map((sale, index) => (
            <tr key={sale._id}>
              <td>{index + 1}</td>
              <td>{sale.name}</td>
              <td>{sale.createdAt.split("T")[0]}</td>
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
