import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CoffeeLand</div>
      <ul className="nav-links">
        <li><Link to="/">خانه</Link></li>
        <li><Link to="/menu">منو</Link></li>
        <li><Link to="/about">درباره ما</Link></li>
        <li><Link to="/contact">تماس با ما</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
