import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-img">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <ul className="nav-menu">
        <li><Link to="/#hero">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#projects">Projects</Link></li>
        <li><Link to="/#skills">Skills</Link></li>
        <li><Link to="/#connect">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
