import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

// import '../src/css/output.css'
import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useState } from 'react';
import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import DashBoardMain from './pages/DashBoardMain';
import Projects from './pages/Projects';
import AllEmployee from './pages/AllEmployee';
import TaskCalendar from './pages/TaskCalendar';
import AboutUs from './pages/AboutUs';

function App() {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <div>
      <div className="flex h-screen overflow-hidden">

        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <Routes>
                <Route path='/' element={<DashBoardMain />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/allEmployee' element={<AllEmployee />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/calendar' element={<TaskCalendar />} />
                <Route path='/login' element={<Login />} />
              </Routes>

            </div>
          </main>

          {/* <Banner /> */}

        </div>
      </div>
      {/* <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/signin" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
