import "./header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img className="logo" src="/assets/logo.png" alt="logo-image" />
      <Link to="/" className="appName">
        {" "}
        <h1>Invetory Management</h1>{" "}
      </Link>
    </div>
  );
}

export default Header;
