import "./reports.css";

import { useEffect, useState } from "react";
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
    <div>
      <h1>REPORTS</h1>
      <button className="reportOption" onClick={() => inventoryFunction()}>
        Inventory Data
      </button>
      <button className="reportOption" onClick={() => salesFunction()}>
        Sales Data
      </button>

      <InventoryList showInventory={showInventory} />
      <SalesList showSales={showSales} />
    </div>
  );
}
