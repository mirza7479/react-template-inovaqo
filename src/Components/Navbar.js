import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Layout } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRole } from "../ReduxToolKit/Slice/userSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { Header } = Layout;

  return (
    <div className="container-fluid">
      <Header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-5" to={"/"}>
          My App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/contact"}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                onClick={() => {
                  localStorage.removeItem("Token");
                  dispatch(userRole(null));
                }}
                to="/login">
                <FiLogOut /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </Header>
    </div>
  );
};
