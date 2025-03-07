import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LogOutForPlayer } from '@/pages/Redux/Cricketer/CricketerAuthAction';

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
   const router  = useRouter();
   const dispatch = useDispatch();
   const loginSession = useSelector((state)=>state.cricketer.session);
   const [formData, setFormData] = useState({
      
       firstName: '',
       lastName: '',
       email: '',
       phoneNumber: '',
       dateOfBirth: '',
       gender: '',
       nationality: '',
       address: '',
       
     
       battingStyle: '',
       bowlingStyle: '',
       role: '',
       preferredPosition: '',
       height: '',
       weight: '',
       currentTeam: '',
       
       
       profileImage: '',
       
       
       password: '',
       confirmPassword: ''
     });
  
  const routeIt = (rou) => {
    
    const updatedNavItems = navItems.map(item => {
      if (item.label === rou) {
        return { ...item, active: true }; 
      } else {
        return { ...item, active: false }; 
      }
    });
    
    setNavItems(updatedNavItems); 

    
    route(rou);
    if(rou == 'Logout')
    {(
      dispatch(LogOutForPlayer(formData)))
      router.push('/LoginForm') 
    }
  };
  
  useEffect(() => {
    if(!loginSession) router.push('/LoginForm');
    
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
                e.preventDefault(); 
                routeIt(item.label); 
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
