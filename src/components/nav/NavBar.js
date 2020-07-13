import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <NavLink className="nav-NavLink" activeClassName="selected"  activeStyle={{color: "lime"}}exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-NavLink" activeClassName="selected" activeStyle={{color: "lime"}} exact to="/animals">
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-NavLink" activeClassName="selected" activeStyle={{color: "lime"}} exact to="/locations">
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-NavLink" activeClassName="selected" activeStyle={{color: "lime"}} exact to="/employees">
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-NavLink" activeClassName="selected" activeStyle={{color: "lime"}} exact to="/owners">
              Owner
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;