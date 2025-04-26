import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoachDetails } from '../../pages/Redux/Coach/CoachRegistration/CoachRegistrationSlice';
import { useRouter } from 'next/router';



const CoachHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // getting the state from Store
  const status = useSelector((state) => state.CoachRegister.CoachRegisterDetails.status);
  

  const [user,setUser] = useState("");
  const username = useSelector((state) => state.CoachRegister.CoachRegisterDetails.firstName);

  // Initiating router object
  const router = useRouter();

  useEffect(()=>{
   setUser(username);
  },[username])


  

  // To handle the action done from event
  const dispatch = useDispatch();


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(()=>{
    if(status==0)
    {
      router.push('/LoginForm')
    }
},[status])

  // handling logout 
  const handleLogout =()=>{
    dispatch(getCoachDetails({
      firstName: '',
      lastName: '',
      mobileNumber:  '',
      profilePicture:  null, // Avoid direct blob initialization
      status:  0
  }))
  
  }
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
            <span className="nav-brand">Coach Dashboard</span>
          </div>
          <div className="nav-right">
            <div className="profile-circle"></div>
            <div className="nav-dropdown">
              <button className="dropdown-toggle">
                <span className="user-name">{user}</span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Settings</a></li>
                <li><a onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CoachHeader;
