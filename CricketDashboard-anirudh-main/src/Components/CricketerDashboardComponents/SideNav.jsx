import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ isOpen, route }) => {
  // Using useState to manage navItems dynamically
  const [navItems, setNavItems] = useState([
    { label: 'Dashboard', active: true },
    { label: 'MatchDataUpload' },
    { label: 'CricketTrainingTracker' },
    { label: 'upcoming' },
    { label: 'Reports' },
    { label: 'Profile' },
    { label: 'Logout' }
  ]);
  
  // Function to update active status when a route is clicked
  const routeIt = (rou) => {
    // Reset active status for all items
    const updatedNavItems = navItems.map(item => {
      if (item.label === rou) {
        return { ...item, active: true }; // Set clicked item active
      } else {
        return { ...item, active: false }; // Reset other items to inactive
      }
    });
    
    setNavItems(updatedNavItems); // Update state with new active item

    // Call your route function (assumed to be for navigation)
    route(rou);
  };
  
  useEffect(() => {
    // Optional: You can invoke routeIt here if needed on initial load or route change
    // routeIt('Dashboard'); // Uncomment if you want to set initial route to 'Dashboard'
  }, []); 

  return (
    <>
      <style>
        {`
          .sidebar {
            background-color: #f8f9fa;
            min-height: 87vh;
            padding: 20px;
            transition: all 0.3s ease;
          }

          .sidebar-nav {
            display: flex;
            flex-direction: column;
          }

          .nav-link {
            color: #333;
            margin: 5px 0;
            padding: 10px;
            border-radius: 5px;
            text-decoration: none;
          }

          .nav-link:hover {
            background-color: #e9ecef;
          }

          .nav-link.active {
            background-color: #007bff;
            color: white;
          }

          @media (max-width: 768px) {
            .sidebar {
              position: fixed;
              left: -100%;
              top: 60px;
              width: 250px;
              z-index: 1000;
              height: calc(100vh - 60px);
            }

            .sidebar.active {
              left: 0;
            }
          }
        `}
      </style>

      <div className={`sidebar ${isOpen ? 'active' : ''}`} style={{ border: '', height: '400px' }}>
        <nav className="sidebar-nav">
          {navItems.map((item, index) => (
            <a
              key={index}
              className={`nav-link ${item.active ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                routeIt(item.label); // Use item.label to set active
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
