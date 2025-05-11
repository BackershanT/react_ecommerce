// Navbar.jsx
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">MyShop</div>
        <span><form className="search-form">
         <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form></span>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/cart">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <FaUser />
            <span>Sign Up</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
