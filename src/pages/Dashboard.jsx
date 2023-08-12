import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashBoardMain from './DashBoardMain';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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
              <Route path='/login' element={<Login />} />
            </Routes>

          </div>
        </main>

        {/* <Banner /> */}

      </div>
    </div>
  );
}

export default Dashboard;