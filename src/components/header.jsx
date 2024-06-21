import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../image/Logo.png'; // Correctly import your logo image
// import Search from "../Search";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black"
  };

  

  return (
    <header className="header" style={{display: "flex"}}>
      <Link className="site-logo" to="/">
        <img src={logo} alt="Site Logo" style={{ width: '160px', height: '150px', margin: 'Left'}} />
      </Link>
      <nav>
       {/* <button> Search show</button> */}
      {/* <Search shows={shows} onSearch={handleSearch} /> */}


       <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          favourate❤️
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        
      </nav>
     
    </header>
  );
}
