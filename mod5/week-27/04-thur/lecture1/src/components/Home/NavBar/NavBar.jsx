import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navContainer">
      <NavLink className='navLink' to="/">Home</NavLink>
      <NavLink className='navLink' to="/add-student">Add-Student</NavLink>
      <NavLink className='navLink' to="/about">About</NavLink>
    </div>
  );
}

export default NavBar;
