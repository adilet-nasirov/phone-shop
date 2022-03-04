import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <ul>
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/phones">
          <li>Phones</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
