import React, { useEffect, useState } from 'react';

// import './App.css';
import TopNav from '../Components/CricketerDashboardComponents/TopNav';
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

const CricketMAinPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [routing,setrRouting] = useState('Dashboard');
  const router = useRouter();

  const getRoute = (label) => {
    console.log("route", label);
    setrRouting(label);
   
  };
  

  useEffect(()=>{
//    router.push('')
console.log(routing,"rou",routing==="CricketTrainingTracker");
  },[routing])
  return (

    <>

    <div className='container-Fluid'>
        <div className='row'>
        <div className="app-wrapper">
      {/* Mobile Sidebar Toggle */}
     

      {/* Top Navigation */}
      <TopNav />
    </div>
            
        </div>

    </div>
    <div className='row'>
        <div className='col-3'>
        <div className=  {`sidebar-column ${sidebarOpen ? 'active' : ''}`}>
            <Sidebar isOpen={sidebarOpen} route={getRoute} />
        </div>
        </div>
        {/* Dasboard */}
        <div className='col-md-9' >
            <div className='row' style={{display:(routing==="Dashboard")?'block':'none'}}>
                
                    <div className='col-md-12 d-flex'>
                        
                        <ChartContainer />
                        <div style={{marginLeft:'10%'}}>
                        <PlacesChart />
                        </div>
                        
                    </div>
              
                    
                
            </div>

            <div className='row' style={{display:(routing==="upcoming")?'block':'none'}}>
               <UpcomingMatches />
            </div>

            <div className='row ' style={{display:(routing==="MatchDataUpload")?'block':'none'}}>
                <MatchDataUpload />
            </div>

            <div className='row'  style={{display:(routing==="CricketTrainingTracker")?'block':'none'}}>
                <CricketTrainingTracker />
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

export default CricketMAinPage;
