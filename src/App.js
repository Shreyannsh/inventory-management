import "./App.css";

import { Route, Routes } from "react-router-dom";

import InventoryPage from "./pages/inventory/inventory";
import SalesPage from "./pages/sales/sales";
import ReportsPage from "./pages/reports/reports";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="allRoutes">
        <Routes>
          <Route path="/" element={<InventoryPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/report" element={<ReportsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
