import React, { useState } from 'react';

// import './App.css';
import TopNav from '@/Components/CricketerDashboardComponents/TopNav';
import Sidebar from '@/Components/CricketerDashboardComponents/SideNav';
import ChartContainer from '@/Components/CricketerDashboardComponents/ChartContainer';
// import { Sidebar } from 'lucide-react';
import PlacesChart from '@/Components/CricketerDashboardComponents/PlacesChart';
import UpcomingMatches from '@/Components/CricketerDashboardComponents/UpcomingMatches';
import MatchDataUpload from '@/Components/CricketerDashboardComponents/MatchDataUpload';
import CricketTrainingTracker from '@/Components/CricketerDashboardComponents/CricketTrainingTracker';
// import TrainingProcess from '@/Components/CricketerDashboardComponents/TrainingProcess';


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
            <Sidebar isOpen={sidebarOpen} />
        </div>
        </div>
        <div className='col-9'>
            <div className='row'>
                <div className='col-md-12'>
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
            </div>
            <div className='row'>
              
                <div className="col-12">
                  <UpcomingMatches />
                </div>
               
                
            </div>
            <div className='row'>
              
                <div className="col-12">
                  <MatchDataUpload />
                </div>
               
               
            </div>
            <div className='row'>
              
                <div className="col-12">
                  <CricketTrainingTracker />
                </div>
               
               
            </div>
        </div>

    </div>
    
      

    </>
  );
};

export default App;
