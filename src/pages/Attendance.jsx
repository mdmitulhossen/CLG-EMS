import { Breadcrumb, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Others-style/attendance.css'

const Attendance = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [totalDays, setTotalDays] = useState(0);

    const monthFullName = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];


    const calculateTotalDays = () => {
        const daysInMonth = new Date(year, month, 0).getDate();
        setTotalDays(daysInMonth);
    };

    useEffect(() => {
        calculateTotalDays();
    }, [year, month]);

    const totalColumn = [];
    for (let i = 1; i <= totalDays; ++i) {
        totalColumn.push(i)
    }

    return (
        <div>
            {/* Breadcrumb home>project */}
            <div className='mb-5'>
                <Breadcrumb
                    items={[
                        {
                            title: <NavLink className='dark:text-white' to='/'>Home</NavLink>,
                        },
                        {
                            title: <NavLink className='dark:text-white' to='/attendance'>Attendance</NavLink>,
                        },

                    ]}

                />
            </div>
            {/* heading */}
            <div className="w-full bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700">
                <div className='w-full grid md:grid-cols-2 gap-4 md:gap-0 items-center p-4'>

                    <p className='text-2xl text-center md:text-left font-semibold'>{`${monthFullName[month - 1]}, ${year}`}</p>
                    <div className='grid grid-cols-2 gap-2 w-full justify-end items-end pr-4'>
                        <div className=''>
                            <label for='month'>Month:</label>
                            <input value={month} onChange={(e) => setMonth(parseInt(e.target.value))} className='w-full' type="number" min='1' max='12' id='month' />
                        </div>
                        <div className=''>
                            <label for='year'>Year:</label>
                            <input value={year} onChange={(e) => setYear(parseInt(e.target.value))} className='w-full' type="number" id='year' />
                        </div>
                        {/* <button className='w-full px-4 py-3 col-span-1  bg-slate-800 dark:bg-white dark:text-slate-600 text-white font-semibold rounded-sm'>Search</button> */}
                    </div>
                </div>

                <div id='attendanceList' className='border p-4 overflow-x-scroll flex items-center justify-items-center justify-content-center justify-self-center'>


                    {
                        totalColumn.map((d, i) => {
                            return (
                                <div className='border-2 p-4 justify-self-center text-center border-[#1E293B]'>
                                    <p>{d}</p>
                                    <p><Tag color='red' className='w-full'>Present</Tag></p>
                                </div>
                            )
                        })

                    }
                </div>
            </div>


        </div>
    );
};

export default Attendance;