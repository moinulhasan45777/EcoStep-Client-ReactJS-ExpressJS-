import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router";
import PrimaryButton from "./PrimaryButton";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import avatar from "../assets/avatar.jpg";

const Navbar = () => {
  const links = () => {
    return (
      <>
        <li>
          <NavLink
            to="/"
            className="relative group hover:text-primary transition-colors duration-300 pb-1"
            end
          >
            Home
            <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/challenges"
            className="relative group hover:text-primary transition-colors duration-300  pb-1"
            end
          >
            Challenges
            <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="relative group hover:text-primary transition-colors duration-300  pb-1"
            end
          >
            About
            <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NavLink>
        </li>
      </>
    );
  };

  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Signed Out Successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="navbar shadow-sm px-4 md:px-10 py-3 sticky z-200">
      <div className="navbar-start  w-full md:justify-start md:w-[50%]">
        <div className="dropdown z-999">
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
            {links()}
            {!user && (
              <div className="md:hidden">
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="font-semibold">
                    Login
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
        <Link className="text-2xl font-bold flex gap-2 items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <p className="text-primary">EcoStep</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-10 px-1 font-bold text-lg">
          {links()}
        </ul>
      </div>
      {user ? (
        <div className="navbar-end z-99 gap-2 ">
          <div
            className="dropdown dropdown-end tooltip hover:tooltip-open tooltip-left"
            data-tip={user.displayName}
          >
            <img
              tabIndex={0}
              role="button"
              src={user.photoURL}
              onError={(e) => {
                e.target.src = avatar;
              }}
              alt="Profile Picture"
              className="h-15 w-15 rounded-full border-4 border-primary cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg focus:shadow-lg hover:scale-110 focus:scale-110"
            />
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <NavLink
                  to="/my-profile"
                  className="relative group transition-colors duration-300 pb-1 rounded-none"
                >
                  Profile
                  <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full "></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-activities"
                  className="relative group transition-colors duration-300  pb-1 rounded-none"
                >
                  My Activities
                  <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </li>
              <li onClick={handleLogOut}>
                <Link className="relative group transition-colors duration-300  pb-1 rounded-none">
                  Logout
                  <span className="absolute left-0 bottom-[-1.5px] h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        !user && (
          <div className="navbar-end gap-2 hidden md:flex">
            <Link to="/register">
              <PrimaryButton st={"Register"}></PrimaryButton>
            </Link>
            <Link to="/login">
              <PrimaryButton st={"Login"}></PrimaryButton>
            </Link>
          </div>
        )
      )}
    </nav>
  );
};

export default Navbar;
