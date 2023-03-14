import React from "react";
import { useState } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Meal from "./Meal";
import About from "./About";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
  };

  return (
    <div className=' container mx-auto'>
      <div className="navbar md:px-24 -0 bg-indigo-100 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <NavLink to={"/"} >
                Home
                </NavLink>
              </li>
              <li>
              <NavLink to={"/meal"} element={<Meal/>}>
                Recipe
                </NavLink>
              </li>
              
              <li>
              <NavLink to={"/about"} element={<About/>}>
                About
                </NavLink>
              </li>
              
              <li>
              <NavLink to={"/contact"} element={<Contact/>}>
                Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <CiForkAndKnife className=" text-3xl"></CiForkAndKnife>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">

              Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/meal"} element={<Meal/>}>

              Recipe
              </NavLink>
            </li>
            <li>
            <NavLink to={"/about"} element={<About/>}>
              About
              </NavLink>
            </li>
            <li>
            <NavLink to={"/contact"} element={<Contact/>}>
              Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <form onSubmit={onSubmit}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className=" input input-ghost w-full max-w-xs bg-indigo-50"
              placeholder="search here"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
