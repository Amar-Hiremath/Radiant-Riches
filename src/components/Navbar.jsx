import React from "react";
import "../styles/Navbar.css";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-input-container">
        <CiSearch id="search" size={24} />
        <input />
      </div>
      <div className="navbar-links">
        <a>Categories</a>
        <a>Website Builders</a>
        <a>Today's deals</a>
      </div>
    </div>
  );
}

export default Navbar;
