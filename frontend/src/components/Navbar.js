import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Pawsitive</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Services</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/GroomingPage">Grooming</Link></li>
              <li><Link to="/healthcare">Health Care</Link></li>
              <li><Link to="/training">Training</Link></li>
              <li><Link to="/spa">Spa</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/CatAdopt">Adopt Pet</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
