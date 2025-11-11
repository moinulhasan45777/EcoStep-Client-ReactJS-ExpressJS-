import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import PrimaryButton from "./PrimaryButton";

const links = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className="relative group hover:text-primary transition-colors duration-300 pb-1"
        >
          Home
          <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/challenges"
          className="relative group hover:text-primary transition-colors duration-300  pb-1"
        >
          Challenges
          <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-activites"
          className="relative group hover:text-primary transition-colors duration-300  pb-1"
        >
          My Activites
          <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </NavLink>
      </li>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="navbar shadow-sm px-10 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="text-2xl font-bold flex gap-2 items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <p className="text-primary">EcoStep</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-10 px-1 font-bold text-lg">
          {links()}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/register">
          <PrimaryButton st={"Register"}></PrimaryButton>
        </Link>
        <Link to="/login">
          <PrimaryButton st={"Login"}></PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
