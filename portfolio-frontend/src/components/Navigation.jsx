import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { PortfolioContext } from "../context/Portfolio";
function Navigation() {
  const { user, token, logout } = useContext(PortfolioContext);
  return (
    <div className="main">
      <div className="left">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#B3B3B5" : "black" })}
          className="link"
          to="/"
          reloadDocument
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#B3B3B5" : "black" })}
          className="link"
          to="/projects"
          reloadDocument
        >
          Projects
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "#B3B3B5" : "black" })}
          className="link"
          to="/About"
          reloadDocument
        >
          About
        </NavLink>

        {token && user ? (
          user
        ) : (
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#B3B3B5" : "black",
            })}
            className="link"
            to="/sign-up"
            reloadDocument
          >
            {" "}
            Signup
          </NavLink>
        )}
      </div>
      <div className="right">
        {token && user ? (
          <NavLink className="nlink" to="login" onClick={logout}>
            Logout
          </NavLink>
        ) : (
          <NavLink className="nlink" to="login">
            Login
          </NavLink>
        )}

        <NavLink className="nlink" to="https://x.com/VanitasO8" target="_blank">
          Twitter
        </NavLink>
        <NavLink
          className="nlink"
          to="https://www.linkedin.com/in/aasim-akhtar-290b861a0/"
          target="_blank"
        >
          LinkedIn
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
