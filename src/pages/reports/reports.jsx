import "./reports.css";

import { useEffect, useState } from "react";
import { TbReportAnalytics } from "react-icons/tb";

import InventoryList from "./inventoryList";
import SalesList from "./salesList";
import { useDispatch } from "react-redux";

export default function ReportsPage() {
  const dispatch = useDispatch();
  const [showInventory, setShowInventory] = useState(false);
  const [showSales, setShowSales] = useState(false);

  const inventoryFunction = () => {
    setShowInventory(!showInventory);
    setShowSales(false);
  };

  const salesFunction = () => {
    setShowSales(!showSales);
    setShowInventory(false);
  };

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "report" });
  }, []);

  return (
    <div className="mainPage">
      <div className="title">
        {" "}
        REPORTS{" "}
        <span className="inventoryIcon">
          <TbReportAnalytics />
        </span>
      </div>
      <div className="btnSection">
        <button
          className={showInventory ? "isOpen" : "reportOption"}
          onClick={() => inventoryFunction()}
        >
          Inventory Data
        </button>
        <button
          className={showSales ? "isOpen" : "reportOption"}
          onClick={() => salesFunction()}
        >
          Sales Data
        </button>
      </div>
      {showInventory === false && showSales === false ? (
        <p className="emptyMsg">
          Please select a report type to check the data.{" "}
        </p>
      ) : null}

      <InventoryList showInventory={showInventory} />
      <SalesList showSales={showSales} />
    </div>
  );
}
