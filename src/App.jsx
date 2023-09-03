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
import { useLogin } from './Context/loginContext';
import { BaseUrl } from './utils/BaseUrl';
import axios from 'axios';

function App() {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLogin, setIsLogin] = useState({
    company: false,
    employee:false,
    admin:false,
  });
  const [auth, setAuth] = useAuth();
  
  const [userLogin, setUserLogin] = useLogin()
  console.log(userLogin.company)
  
  const localStorageData = JSON.parse(localStorage.getItem("companyData"))
  // setAuth({ ...auth, login: true })
  // console.log(auth.login)
useEffect(() => {
  setAuth({ ...auth, company: true })
  setIsLogin({ ...isLogin, company: userLogin.company })
}, [userLogin.company,userLogin.employee,userLogin.admin])
console.log(auth)
console.log(isLogin)

    //  call api
		const getEmployee = async () => {
			try {
				const res = await axios.get(`${BaseUrl}/employee`);
				console.log(res.data)
				setAuth({ ...auth, users: res.data })
			} catch (error) {
				console.log(error)
			}
		 }
		useEffect(() => {
       getEmployee()
    }, [])
			
	


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
          userLogin.employee || userLogin.company?
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
