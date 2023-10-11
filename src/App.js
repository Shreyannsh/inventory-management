import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import InventoryPage from "./pages/inventory/inventory";
import SalesPage from "./pages/sales/sales";
import ReportsPage from "./pages/reports/reports";

function App() {
  return (
    <div className="App">
      <nav>
        <Link>Inventory</Link>
        <Link>Sales</Link>
        <Link>Report</Link>
      </nav>

      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/report" element={<ReportsPage />} />
      </Routes>
    </div>
  );
}

export default App;
