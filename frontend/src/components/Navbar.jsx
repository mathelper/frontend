import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1><Link to="/">Mathelper</Link></h1>
        <div className="links">
          <Link to="/">Домой</Link>
          <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#5da2d5', 
            borderRadius: '8px' }}>Новый факт</Link>
        </div>
      </nav>
    );
  }

export default Navbar;
