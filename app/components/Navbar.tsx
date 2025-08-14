import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <p className="font-bold text-gradient text-2xl">RESUMIND</p>
      </Link>
      <Link to="/upload" className="w-fit primary-button">
        Upload Resume
      </Link>
    </div>
  );
};

export default Navbar;
