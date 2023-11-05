import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const isActive = useSelector((state) => state.isActive);
  console.log(isActive);
  return (
    <div>
      <nav className="navbar">
        <Link
          className={isActive === "inventory" ? "activeLink" : "link"}
          to="/"
        >
          Inventory
        </Link>
        <Link
          className={isActive === "sales" ? "activeLink" : "link"}
          to="/sales"
        >
          Sales
        </Link>
        <Link
          className={isActive === "report" ? "activeLink" : "link"}
          to="/report"
        >
          Report
        </Link>
      </nav>
    </div>
  );
}
