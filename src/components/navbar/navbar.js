import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../User Context/UserContext";
import "./navbar.css";

function Navbar() {
  const { userData } = useContext(UserContext);
  
  return (
    <div className="navbar">
      <span className="fasco">FASCO</span>
      <div>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>

        <NavLink to="/memo" className="nav-link" activeClassName="active">
          Memo
        </NavLink>
        <NavLink to="/products" className="nav-link" activeClassName="active">
          Products
        </NavLink>
          <>
            <NavLink to="/form1" className="nav-link" activeClassName="active">
              Log In
            </NavLink>
            <NavLink to="/form2" className="nav-link" activeClassName="active">
              Sign Up
            </NavLink>
          </>
        {userData && userData.isLoggedIn && (
          <NavLink to="/profile" className="nav-link" activeClassName="active">
            Profile
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
