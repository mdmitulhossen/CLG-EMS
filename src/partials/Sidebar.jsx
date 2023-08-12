import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="flex items-center gap-10">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
            {/* VitalCare */}
            <h1 className='text-white/75 font-bold text-2xl'>EMS</h1>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('dashboard') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('calendar') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-indigo-500' : 'text-slate-400'
                          }`}
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                      />
                      <path
                        className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-indigo-600' : 'text-slate-600'
                          }`}
                        d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                      />
                      <path
                        className={`fill-current ${pathname === '/' || pathname.includes('dashboard') ? 'text-indigo-200' : 'text-slate-400'
                          }`}
                        d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Dashboard
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Projects */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('projects') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/projects"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('calendar') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current ${pathname.includes('calendar') ? 'text-indigo-500' : 'text-slate-600'}`} d="M1 3h22v20H1z" />
                      <path
                        className={`fill-current ${pathname.includes('calendar') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
                      />
                    </svg> */}
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="layer"><path fill="#94A3B8" d="M2.5,8.86l9,5.2a1,1,0,0,0,1,0l9-5.2A1,1,0,0,0,22,8a1,1,0,0,0-.5-.87l-9-5.19a1,1,0,0,0-1,0l-9,5.19A1,1,0,0,0,2,8,1,1,0,0,0,2.5,8.86ZM12,4l7,4-7,4L5,8Zm8.5,7.17L12,16,3.5,11.13a1,1,0,0,0-1.37.37,1,1,0,0,0,.37,1.36l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.36A1,1,0,0,0,20.5,11.13Zm0,4L12,20,3.5,15.13a1,1,0,0,0-1.37.37,1,1,0,0,0,.37,1.36l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.36A1,1,0,0,0,20.5,15.13Z"></path></svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Projects
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Attendance */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('attendance') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/attendance"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('calendar') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chip"><path fill="#94A3B8" d="M17,3.5H7A3.5,3.5,0,0,0,3.5,7V17A3.5,3.5,0,0,0,7,20.5H17A3.5,3.5,0,0,0,20.5,17V7A3.5,3.5,0,0,0,17,3.5Zm-6.5,2h3v3h-3Zm-2,13H7A1.5,1.5,0,0,1,5.5,17V15.5h3Zm5,0h-3v-3h3Zm5-1.5A1.5,1.5,0,0,1,17,18.5H15.5v-3h3Zm0-3.5H5.5V7A1.5,1.5,0,0,1,7,5.5H8.5v4a1,1,0,0,0,1,1h9Zm0-5h-3v-3H17A1.5,1.5,0,0,1,18.5,7Z"></path></svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Attendance
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* All Employees */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('allEmployee') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/allEmployee"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('calendar') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="account"><path fill="#94A3B8" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path></svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      All Employee
                    </span>
                  </div>
                </NavLink>
              </li>
              
              {/* salary */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('salary') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/salary"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('campaigns') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('campaigns') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('campaigns') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Salary
                    </span>
                  </div>
                </NavLink>
              </li>
              
              {/* Messages */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('messages') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/messages"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('messages') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current ${pathname.includes('messages') ? 'text-indigo-500' : 'text-slate-600'}`}
                          d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                        />
                        <path
                          className={`fill-current ${pathname.includes('messages') ? 'text-indigo-300' : 'text-slate-400'}`}
                          d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Messages
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              {/* Calendar */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('calendar') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/calendar"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('calendar') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current ${pathname.includes('calendar') ? 'text-indigo-500' : 'text-slate-600'}`} d="M1 3h22v20H1z" />
                      <path
                        className={`fill-current ${pathname.includes('calendar') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Calendar
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* About Us */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('about') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/about"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('calendar') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pen"><path fill="#94A3B8" d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"></path></svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      About Us
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Our Blog */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('blog') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/blog"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('calendar') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="newspaper"><path fill="#94A3B8" d="M17,11H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0,4H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,9h6a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2ZM21,3H7A1,1,0,0,0,6,4V7H3A1,1,0,0,0,2,8V18a3,3,0,0,0,3,3H18a4,4,0,0,0,4-4V4A1,1,0,0,0,21,3ZM6,18a1,1,0,0,1-2,0V9H6Zm14-1a2,2,0,0,1-2,2H7.82A3,3,0,0,0,8,18V5H20Zm-9-4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm0,4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z"></path></svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Our Blog
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Settings */}
              <SidebarLinkGroup activecondition={pathname.includes('settings')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('settings') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname.includes('settings') ? 'text-indigo-500' : 'text-slate-600'}`}
                                d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                              />
                              <path
                                className={`fill-current ${pathname.includes('settings') ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                              />
                              <path
                                className={`fill-current ${pathname.includes('settings') ? 'text-indigo-500' : 'text-slate-600'}`}
                                d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                              />
                              <path
                                className={`fill-current ${pathname.includes('settings') ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Settings
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/account"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                My Account
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/notifications"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                My Notifications
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/apps"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Connected Apps
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/plans"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Plans
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/billing"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Billing & Invoices
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/feedback"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Give Feedback
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
            </h3>
            <ul className="mt-3">
              {/* Authentication */}
              <SidebarLinkGroup>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${open ? 'hover:text-slate-200' : 'hover:text-white'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path className="fill-current text-slate-600" d="M8.07 16H10V8H8.07a8 8 0 110 8z" />
                              <path className="fill-current text-slate-400" d="M15 12L8 6v5H0v2h8v5z" />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Authentication
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink end to="/signin" className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Sign in
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink end to="/signup" className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Sign up
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink end to="/reset-password" className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate">
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Reset Password
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>


            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
