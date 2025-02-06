import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ isOpen }) => {
  const navItems = [
    { label: 'Dashboard', active: true },
    { label: 'Match Data Upload' },
    { label: 'Training process' },
    { label: 'Reports' },
    { label: 'Profile' },
    { label: 'Logout' }
  ];

  return (
    <>
      <style>
        {`
          .sidebar {
            background-color: #f8f9fa;
            min-height: 100vh;
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
            background-color: #e9ecef;
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

      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <nav className="sidebar-nav">
          {navItems.map((item, index) => (
            <a
              key={index}
              className={`nav-link ${item.active ? 'active' : ''}`}
              href="#"
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
