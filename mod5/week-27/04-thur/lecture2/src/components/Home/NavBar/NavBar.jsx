import './index.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navContainer">
        <NavLink to="/" className="navLink">Home</NavLink>
        <NavLink to="/add-student" className="navLink">Add a Student</NavLink>
        <NavLink to="/about" className="navLink">About</NavLink>
    </div>
  );
}

export default NavBar;
