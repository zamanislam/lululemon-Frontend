import React, { useEffect, useState } from 'react';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from './Drawer'; // Import the Drawer component

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');

    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between pt-7 pl-4 pr-19 ">
      <FaBars className="text-xl cursor-pointer" onClick={() => setIsDrawerOpen(true)} />

      <div className="pl-36">
        <img
          src="https://i.postimg.cc/D0hZjw1F/hhhh.png"
          alt="Wayfair logo"
          className="h-10"
        />
      </div>

      <div className="flex items-center space-x-6">
        {isLoggedIn ? (
          <>
            <span className="flex items-center space-x-2">
              <FaUser />
              <span>{username}</span>
            </span>
            <button
              onClick={handleLogout}
              className="text-red-500 border px-3 py-1 rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="flex items-center space-x-2">
              <FaUser />
              <span>Sign Up</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-2">
              <FaUser />
              <span>Login</span>
            </Link>
          </>
        )}
        <Link to="/cart" className="flex items-center space-x-2">
          <FaShoppingCart className="text-2xl cursor-pointer" />
          <span>Cart</span>
        </Link>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </nav>
  );
};

export default Navbar;
