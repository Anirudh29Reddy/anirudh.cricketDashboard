import React, { useEffect, useState } from 'react';

// import './App.css';
import Sidebar from '../Components/CricketerDashboardComponents/SideNav';
import ChartContainer from '../Components/CricketerDashboardComponents/ChartContainer';
// import { Sidebar } from 'lucide-react';
import PlacesChart from '../Components/CricketerDashboardComponents/PlacesChart';
import UpcomingMatches from '../Components/CricketerDashboardComponents/UpcomingMatches';
import MatchDataUpload from '../Components/CricketerDashboardComponents/MatchDataUpload';
import CricketTrainingTracker from '../Components/CricketerDashboardComponents/CricketTrainingTracker';
// import TrainingProcess from '../Components/CricketerDashboardComponents/TrainingProcess';
import ReportsAndAnalyze from '../Components/CricketerDashboardComponents/ReportsAndAnalyze';

import Profile  from '../Components/CricketerDashboardComponents/Profile';
import { useRouter } from 'next/router';
import CoachHeader from '../Components/CoachDashboardComponents/CoachHeader';
import CoachSideBar from '../Components/CoachDashboardComponents/CoachSideBar';
import { useSelector } from 'react-redux';

import CricketersList from '../Components/CoachDashboardComponents/CricketersList'
import PlayerPerformanceReport from '../Components/CoachDashboardComponents/Player Performance Report';
import TrainingSchedule from '../Components/CoachDashboardComponents/TrainingSchedule';

const CoachMainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const status = useSelector((state) => state.CoachRegister.CoachRegisterDetails.status);

  const [routing,setrRouting] = useState('Dashboard');
  const router = useRouter();

  const getRoute = (label) => {
    console.log("route", label);
    setrRouting(label);
   
  };
  

  useEffect(()=>{ 
  console.log(routing,"rou",routing==="CricketTrainingTracker");
  },[routing])


  
  return (

    <>

    <div className='container-Fluid'>
        <div className='row'>
        <div className="app-wrapper">
      {/* Mobile Sidebar Toggle */}
     

      {/* Top Navigation */}
      <CoachHeader />
    </div>
            
        </div>

    </div>
    <div className='row'>
        <div className='col-3'>
        <div className=  {`sidebar-column ${sidebarOpen ? 'active' : ''}`}>
            <CoachSideBar isOpen={sidebarOpen} route={getRoute} />
        </div>
        </div>
        {/* Dasboard */}
        <div className='col-md-9' >
            <div className='row' style={{display:(routing==="Dashboard")?'block':'none'}}>
                
                    <div className='col-md-6'>
                        <div className="chart-column">
                        <ChartContainer />
                        </div>
                    </div>
              
                    <div className='col-md-6'>
                        <div className="chart-column">
                        <PlacesChart />
                        </div>
                 </div>
                
            </div>

            <div className='row' style={{display:(routing==="CricketersList")?'block':'none'}}>
               <CricketersList />
            </div>

            <div className='row ' style={{display:(routing==="Perfomance Report")?'block':'none'}}>
                <PlayerPerformanceReport />
            </div>

            <div className='row'  style={{display:(routing==="TrainingSchedule")?'block':'none'}}>
                <TrainingSchedule />
            </div>

            <div className='row' style={{display:(routing==="Reports")?'block':'none'}}>
                <ReportsAndAnalyze />
            </div>

            <div className='row' style={{display:(routing==="Profile")?'block':'none'}}>
                <Profile />
            </div>
        </div>

        {/* MatchDatauplaod */}
       

    </div>
    
      

    </>
  );
};

export default CoachMainPage;
