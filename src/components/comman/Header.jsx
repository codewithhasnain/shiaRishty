import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiLogOut,
  FiLogIn,
  FiUserPlus,
  FiLayout,
} from "react-icons/fi";
import "../../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (user && token) {
      setIsLoggedIn(true);
      setIsAdmin(user.isAdmin);
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/");
    window.location.reload();
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const closeProfileDropdown = () => {
    setShowProfileDropdown(false);
  };

  return (
    <header className="header">
      <div className="container">
        <img
          src="https://i.ibb.co/47DVfJ1/cropped-icon-removebg-preview.png"
          alt="Shia Rishty"
          className="logo"
        />
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <a href="#search-profile">Search Profile</a>
            </li> */}
            <li>
            <Link to="/create-profile">Add Your Profile</Link>
            </li>
            <li>
              <a href="#Blogs">Blogs</a>
            </li>
            <li>
              <a href="#success-stories">Success Stories</a>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="user-icons">
          {!isLoggedIn && (
            <div className="auth-buttons">
              <Link to="/enrol">
                <button className="enrol-button btn-enroll">Search Profile</button>
              </Link>
              <Link to="/login">
                <button className="login-button">
                  <FiLogIn className="auth-icon" /> Login
                </button>
              </Link>
              {/* <Link to="/register">
                <button className="signup-button">
                  <FiUserPlus className="auth-icon" /> Signup
                </button>
              </Link> */}
            </div>
          )}
          {isLoggedIn && (
            <>
              <button className="profile-icon" onClick={toggleProfileDropdown}>
                <FiUser />
              </button>
              {showProfileDropdown && (
                <div className="profile-dropdown">
                  {isAdmin ? (
                    <Link to="/admin" onClick={closeProfileDropdown}>
                      <button className="dashboard-button">
                        <FiLayout /> Dashboard
                      </button>
                    </Link>
                  ) : (
                    <Link to="/user/profile" onClick={closeProfileDropdown}>
                      <button className="profile-button">
                        <FiUser /> Profile
                      </button>
                    </Link>
                  )}
                  <button
                    className="logout-button"
                    onClick={() => {
                      closeProfileDropdown();
                      handleLogout();
                    }}
                  >
                    <FiLogOut /> Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
