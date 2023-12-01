import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const isActive = useSelector((state) => state.isActive);
  return (
    <nav className="navbar">
      <Link
        className={isActive === "inventory" ? "activeLink" : "link"}
        to="/inventory"
      >
        <div className="linkText">Inventory</div>
      </Link>
      <Link
        className={isActive === "sales" ? "activeLink" : "link"}
        to="/sales"
      >
        <div className="linkText">Sales</div>
      </Link>
      <Link
        className={isActive === "report" ? "activeLink" : "link"}
        to="/report"
      >
        <div className="linkText"> Report</div>
      </Link>
    </nav>
  );
}
