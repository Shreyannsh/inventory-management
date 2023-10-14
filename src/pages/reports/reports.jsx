import { useState } from "react";
import InventoryList from "./inventoryList";
import SalesList from "./salesList";

export default function ReportsPage() {
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

  return (
    <div>
      <h1>REPORT</h1>
      <button onClick={() => inventoryFunction()}>Inventory Data</button>
      <button onClick={() => salesFunction()}>Sales Data</button>

      <InventoryList showInventory={showInventory} />
      <SalesList showSales={showSales} />
    </div>
  );
}
