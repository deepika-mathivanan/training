import React from "react";
import "../../assets/css/Navbar.css";
import { Link } from "react-router-dom";

var Navbar = () => {
  var styling = {
    color: "blue",
    fontSize: "30px",
  };

  return (
    <div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/" id="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" id="about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" id="gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" id="contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/useref" id="useref">useref</Link>
        </li>
        <li className="nav-item">
          <Link to="/usecontext" id="usecontext">usecontext</Link>
        </li>
        <li className="nav-item">
          <Link to="/usememo" id="usememo">usememo</Link>
        </li>
        
      </ul>

      <h1 style={styling}>This is Navbar</h1>
    </div>
  );
};

export default Navbar;
