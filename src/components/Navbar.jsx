import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Mathelper</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New fact</Link>
        </div>
      </nav>
    );
  }

export default Navbar;