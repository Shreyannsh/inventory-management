import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Inventory</Link>
        <Link to="/sales">Sales</Link>
        <Link to="/report">Report</Link>
      </nav>
    </div>
  );
}
