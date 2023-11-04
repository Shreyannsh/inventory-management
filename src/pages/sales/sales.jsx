import "../../commonCss.css";
import "./sales.css";

import { useEffect, useState } from "react";
import AddSales from "../../modals/addSale/addSale";
import { fetchSales } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export default function SalesPage() {
  const dispatch = useDispatch();
  const sale = useSelector((state) => state.sales);

  const [show, setShow] = useState(false);
  const [salesList, setSalesList] = useState(sale);
  const [clearBtnDisable, setClearBtnDisable] = useState(true);

  const [filterDates, setFilterDates] = useState({
    from: "",
    to: "",
  });

  // console.log(filterDates);

  const total_revenue = salesList.reduce(
    (acc, crr) => acc + crr.price * crr.quantity,
    0
  );

  const filterByDateFunction = () => {
    const filteredByDate = sale.filter(
      (sale) =>
        sale.createdAt.split("T")[0] >= filterDates.from &&
        sale.createdAt.split("T")[0] <= filterDates.to
      // new Date(sale.createdAt) >= new Date(filterDates.from) &&
      // new Date(sale.createdAt) <= new Date(filterDates.to)
    );
    setClearBtnDisable(false);
    setSalesList(filteredByDate);
  };

  const clearDateFunction = () => {
    setSalesList(sale);
    setClearBtnDisable(true);
  };

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  useEffect(() => {
    setSalesList(sale);
  }, [sale]);

  return (
    <div>
      <div className="title">
        {" "}
        SALE HISTORY{" "}
        <span className="inventoryIcon">
          <GiReceiveMoney />
        </span>
      </div>

      <AddSales onClose={() => setShow(false)} show={show} />
      <div className="addBtnAndFilter">
        <span>
          {" "}
          <button className="addSaleBtn" onClick={() => setShow(true)}>
            <AiOutlineAppstoreAdd /> Add Sale
          </button>
        </span>
        <span className="filterOption">
          <label>
            <b>From</b>
            <input
              className="input"
              type="date"
              onChange={(e) =>
                setFilterDates({ ...filterDates, from: e.target.value })
              }
            />
          </label>
          <label>
            <b>To</b>
            <input
              className="input"
              type="date"
              onChange={(e) =>
                setFilterDates({ ...filterDates, to: e.target.value })
              }
            />
          </label>
          <button className="filterBtn" onClick={() => filterByDateFunction()}>
            Filter
          </button>
          <button
            className="clearBtn"
            style={{ cursor: clearBtnDisable ? "not-allowed" : "pointer" }}
            disabled={clearBtnDisable ? true : false}
            onClick={() => clearDateFunction()}
          >
            Clear range
          </button>
        </span>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Sold Item</th>
            <th>Date</th>
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
              <td>{sale.createdAt.split("T")[0]}</td>
              <td>&#8377; {sale.price}</td>
              <td>{sale.quantity} units</td>
              <td>&#8377; {sale.price * sale.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
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
