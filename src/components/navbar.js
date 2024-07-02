// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./compCss/Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/news">News</Link>
          </li>
          <li className="navbar-item">
            <Link to="/market-cap">Market Cap</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
