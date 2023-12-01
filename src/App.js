import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";

import InventoryPage from "./pages/inventory/inventory";
import SalesPage from "./pages/sales/sales";
import ReportsPage from "./pages/reports/reports";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Loader from "./components/loader/loader";
import { useSelector } from "react-redux";
import HomePage from "./pages/homePage/homePage";

function App() {
  const loading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Loader loading={loading} />
      <Header />
      <Navbar />
      <div className="allRoutes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/report" element={<ReportsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
