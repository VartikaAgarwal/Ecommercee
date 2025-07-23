import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';
import { FaShoppingCart, FaSignInAlt, FaUserPlus, FaBoxOpen, FaSignOutAlt, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout(navigate);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">ShopEase</Link>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            <FaBoxOpen style={{ marginRight: '6px' }} />
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            <FaShoppingCart style={{ marginRight: '6px' }} />
            Cart ({cartItems.length})
          </Link>
        </li>

        {user ? (
          <>
            <li className="user-greet">
              <FaUser style={{ marginRight: '6px' }} />
              {user.displayName || user.email}
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                <FaSignOutAlt style={{ marginRight: '6px' }} />
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <FaSignInAlt style={{ marginRight: '6px' }} />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <FaUserPlus style={{ marginRight: '6px' }} />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
