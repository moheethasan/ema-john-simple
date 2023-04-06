import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/order">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
