import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const TopNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
    
      <style>
        {`
          .top-nav {
            padding: 15px;
            background-color: white;
            border-bottom: 1px solid #dee2e6;
           
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;
            
          }

          .nav-left, .nav-right {
            display: flex;
            align-items: center;
            
          }

        .ToggleLogo {
  background-color: white;
  color: black;
  border: 2px solid red;
display:none;
  height: 15%;
  background-size: contain; /* corrected typo and used 'contain' to fit the background image */
  background-repeat: no-repeat; /* optional, depending on if you want the background image to repeat */
}



          .nav-brand {
            font-size: 1.25rem; /* Default font size for desktop */
          
          }

          .profile-circle {
            width: 40px;
            height: 40px;
            background-color: #dee2e6;
            border-radius: 50%;
            margin-right: 10px;
            cursor: pointer; /* Add pointer cursor for profile */
          }

          .nav-dropdown {
            position: relative;
          }

          .dropdown-toggle {
            background: none;
            border: none;
            font-size: 1rem;
            cursor: pointer;
        
              color:black;
          }

          .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            background-color: white;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            padding: 10px 0;
            margin: 0;
            list-style: none;
                  border:1px solid red;
          }

          .nav-dropdown:hover .dropdown-menu {
            display: block;
          }

          .nav-dropdown .dropdown-menu a {
            display: block;
            padding: 8px 20px;
            color: #333;
            text-decoration: none;
          }

          .nav-dropdown .dropdown-menu a:hover {
            background-color: #f1f1f1;
          }

          @media (max-width: 768px) {
            .logo-circle {
              width: 40px;
              height: 40px;
            }
                      .ToggleLogo {
  background-color: white;
  color: black;
  border: 2px solid red;
display:block;
  height: 15%;
  background-size: contain; /* corrected typo and used 'contain' to fit the background image */
  background-repeat: no-repeat; /* optional, depending on if you want the background image to repeat */
}
            .nav-brand {
              font-size: 1rem; /* Adjust font size for mobile */
            }
          }
        `}
      </style>
      
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-left ">
          <button 
        className="sidebar-toggle ToggleLogo" 
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
            <span className="nav-brand">Cricketer Dashboard</span>
          </div>
          <div className="nav-right">
            <div className="profile-circle"></div>
            <div className="nav-dropdown">
              <button className="dropdown-toggle">
                <span className="user-name">Shravani Vibuthi</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
