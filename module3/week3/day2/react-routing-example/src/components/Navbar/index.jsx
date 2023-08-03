import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
      <nav>
        <div className="nav-container">
          <NavLink  to="/" className={({ isActive }) => isActive ? 'activated' : '' } >
              Home
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'activated' : '' }>
              Profile
          </NavLink>    
          <NavLink to="/signup" className={({ isActive }) => isActive ? 'activated' : '' }>
              Signup
          </NavLink>

          <NavLink to="/tasks" className={({ isActive }) => isActive ? 'activated' : '' }>
              Tasks
          </NavLink>
        </div>
      </nav>
    );
  };
  
  export default Navbar;