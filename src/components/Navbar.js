import React from "react";
import "./Navbar.css";
import { CgAppleWatch } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>
          <CgAppleWatch />
        </h1>
      </div>
      <div className="links">
        <ul className="ullink">
          <Link to="/" style={{ color: "#8B8E99", textDecoration: "none" }}>
            Home
          </Link>

          <Link
            to="/Product"
            style={{ color: "#8B8E99", textDecoration: "none" }}
          >
            Product
          </Link>

          <Link
            to="/Login"
            style={{ color: "#8B8E99", textDecoration: "none" }}
          >
            Login
          </Link>

          <Link
            to="/About"
            style={{ color: "#8B8E99", textDecoration: "none" }}
          >
            About
          </Link>
        </ul>
      </div>
      <div className="icons">
        <AiOutlineSearch />
        <BsFillPersonFill />
        <BsFillCartFill />
      </div>
    </div>
  );
};

export default Navbar;
