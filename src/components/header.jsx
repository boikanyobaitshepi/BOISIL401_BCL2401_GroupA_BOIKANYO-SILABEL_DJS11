import React from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "../components/search"; // Ensure correct import path
import Login from "../pages/login";
import logo from '../image/Logo.png'; // Adjusted to typical filename conventions

export default function Header() {
  return (
    <header className="bg-dark p-1 border border-secondary border-2">
         <Link className="site-logo" to="/">
        <img src={logo} alt="Site Logo" style={{ width: '160px', height: '150px', margin: 'Left'}} />
      </Link>
      <nav className="nav nav-pills flex-row P-1 mt-2">
        
        <Link
          to="/"
          className="flex-sm-fill text-sm-center nav-link fw-bold text-light"
          aria-current="page"
        >
          Home
        </Link>
        <a
          className="flex-sm-fill text-sm-center nav-link dropdown-toggle text-light fw-bold"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          Genres
        </a>
        <ul className="dropdown-menu" data-bs-theme="dark">
          {/* Dropdown menu items */}
        </ul>
        <Link
          to="/podcasts"
          className="flex-sm-fill text-sm-center nav-link text-light fw-bold"
        >
          Podcasts
        </Link>
        <Link
          to="/about"
          className="flex-sm-fill text-sm-center nav-link text-light fw-bold"
        >
          About
        </Link>
        
        <Link
          to="/fav"
          className="flex-sm-fill text-sm-center nav-link text-light fw-bold"
        >
          <img src="https://www.flaticon.com/free-icons/star" alt="pic" width="15" height="15" /> Favorites
        </Link>
        
        <Search /> {/* Ensure Search component is correctly used */}
        
        <Link
          to="/login"
          className="btn btn-outline-dark ms-2 text-secondary fw-bold mb-2 mt-1"
        >
          Login
        </Link>
        <Link
          to="/signOut"
          className="btn btn-outline-dark ms-2 text-secondary fw-bold mb-2 mt-1"
        >
          Sign Out
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
}



  

  


    
