import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCoachDetails } from '../../pages/Redux/Coach/CoachRegistration/CoachRegistrationSlice';

const CoachSideBar = ({ isOpen ,route }) => {
  const navItems = [
    // { label: 'Dashboard', active: true },
    { label: 'CricketersList' },
    { label: 'Perfomance Report' },
    // { label: 'TrainingSchedule' },
    
    { label: 'Logout' }
  ];
  const status = useSelector((state) => state.CoachRegister.CoachRegisterDetails.status);

  const router =useRouter();

  const dispatch = useDispatch();

  
      

  const routeIt = (rou) => {
    // Reset active status for all items
    navItems.forEach(item => item.active = false);
  
    // If the 'Logout' route is selected, deactivate it and set another item to active
    if (rou === 'Logout') {
      dispatch(getCoachDetails({
        firstName: '',
        lastName: '',
        mobileNumber:  '',
        profilePicture:  null, 
        status:  0
      }));
  
      // Change active to another item, for example, 'Dashboard'
      const dashboardItem = navItems.find(item => item.label === 'Dashboard');
      if (dashboardItem) {
        dashboardItem.active = true;
      }
    } else {
      // Set the clicked route as active
      const clickedItem = navItems.find(item => item.label === rou);
      if (clickedItem) {
        clickedItem.active = true;
      }
    }
  
    // Call your route function (assumed to be for navigation)
    route(rou);
  }
  
  useEffect(()=>{
    
      routeIt();
      if(status==0)
        {
          router.push('/LoginForm')
        }

  },[status])
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

      <div className={`sidebar ${isOpen ? 'active' : ''}`} style={{border:'',height:'400px'}}>
        <nav className="sidebar-nav">
          {navItems.map((item, index) => (
           <a
           key={index}
           className={`nav-link ${item.active ? 'active' : ''}`}
           href="#"
           onClick={(e) => {
             e.preventDefault(); // Prevent default anchor behavior
             routeIt(item.label); // Use item.route or any property you need
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

export default CoachSideBar;
