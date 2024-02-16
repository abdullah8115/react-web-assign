import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <span className="fasco">FASCO</span>
      <div>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/form1" className="nav-link" activeClassName="active">
          Form 1
        </NavLink>
        <NavLink to="/form2" className="nav-link" activeClassName="active">
          Form 2
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
