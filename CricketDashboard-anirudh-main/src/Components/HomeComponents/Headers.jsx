import React, { useState } from "react";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function to open/close the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <h1 className="logo">CricketConnect</h1>
        <div className="nav-container">
          {/* Hamburger Menu Toggle Button */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          {/* Navigation Menu */}
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li><a href="#">Cricketers</a></li>
              <li><a href="#">Coaches</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="buttons">
          <a href="#" className="join-learn-button join-now">Join Now</a>
          <a href="#" className="join-learn-button learn-more">Learn More</a>
        </div>
      </header>
    </>
  );
};

export default Headers;
