import { useRouter } from "next/router";
import React, { useState } from "react";
import HeroSection from "./HeroSections";


const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function to open/close the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  const handleLogin=()=>{
    router.push('/SignUpoptions')
  }

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
              <li><a href="#hero-section">Cricketers</a></li>
              <li><a href="#">Coaches</a></li>
              <li><a href="#LatestInsightsSection">Blog</a></li>
              <li><a href="#CricketMomemts">Gallery</a></li>
              <li><a href="#ContactsSection">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="buttons">
          <a href="#" className="join-learn-button join-now" onClick={handleLogin}>Join Now</a>
          <a href="#" className="join-learn-button learn-more">Learn More</a>
        </div>
      </header>
    </>
  );
};

export default Headers;