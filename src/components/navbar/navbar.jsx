import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link className="link" to="/">
          Inventory
        </Link>
        <Link className="link" to="/sales">
          Sales
        </Link>
        <Link className="link" to="/report">
          Report
        </Link>
      </nav>
    </div>
  );
}
