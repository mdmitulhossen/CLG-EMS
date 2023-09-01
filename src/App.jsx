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
import Blog from './pages/Blog';
import TotalDaysInMonth from './pages/TotalDaysInMonth';
import Attendance from './pages/Attendance';
import AuthPage from './pages/AuthPage';
import CompanyRegister from './pages/CompanyRegister';
import { useAuth } from './Context/AuthContext';

function App() {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLogin, setIsLogin] = useState({
    company: true,
    employee:false
  });
  const [auth, setAuth] = useAuth();
  // setAuth({ ...auth, login: true })
  // console.log(auth.login)
useEffect(() => {
  setAuth({ ...auth, company: false })
}, [])
console.log(auth)


  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <div>
      {/* <Routes>
        <Route path='/company/signup' element={<CompanyRegister/>}/>
      </Routes> */}
      <div >
        {/* <Login/> */}
        {
          isLogin.employee || isLogin.company?
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
                      <Route path='/attendance' element={<Attendance />} />
                      <Route path='/about' element={<AboutUs />} />
                      <Route path='/calendar' element={<TaskCalendar />} />
                      <Route path='/blog' element={<Blog />} />
                      {/* <Route path='/login' element={<Login />} /> */}
                    </Routes>

                  </div>
                </main>

                {/* <Banner /> */}

              </div>
            </div>
            : <Routes>
              <Route path='/' element={<AuthPage />} />
              <Route path='/company/signup' element={<CompanyRegister />} />
            </Routes>


        }


      </div>
      {/* <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/signin" element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
