import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark"  style={{Color:'#fff'}}id='navmain'>
        <NavLink className="navbar-brand" to="/">
          TRIPUPP HR
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navlist">
          <ul className="navbar-nav">
            <li className="home">
              <NavLink className="nav-link" to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/payroll">
                PAYROLL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/benefits">
                BENEFITS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                PRICING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/workwithus">
                WORK WITH US
              </NavLink>
            </li> <NavLink className="nav-link" to="/SignIn">
            <button type="button" class="btn btn-success">Sign in</button>
              </NavLink>
           
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
