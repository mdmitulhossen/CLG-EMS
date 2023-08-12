import React from 'react';
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
import EmployeeHeadCard from '../components/EmployeeCard/EmployeeHeadCard';
import EmCard from '../components/EmployeeCard/EmCard';
import EmployeeCard from '../components/EmployeeCard/EmployeeCard';

const AllEmployee = () => {
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
                            title: <NavLink className='dark:text-white' to='/allEmployee'>All-Employee</NavLink>,
                        },

                    ]}

                />


                <div className='mt-10'>
                    <div className='grid grid-cols-12 gap-5'>
                        <EmCard />
                        <EmployeeHeadCard />
                        <EmCard />
                    </div>

                    <div className='mt-16'>

                        <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between" >
                                <h2 className="font-bold text-2xl text-slate-800 dark:text-slate-100">All Employee</h2>
                                <div>
                                    <input type="text" className='rounded-lg focus:border-[#1E293B]' placeholder="search here.."/>
                                <button className='bg-[#1E293B] ml-4 hover:bg-[#1E293B]/80 duration-200 dark:bg-blue-500 dark:hover:bg-blue-400 text-white text-md font-semibold px-4 py-2 rounded-lg'>View All</button>
                                </div>
                            </header>

                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
                                {
                               [1,2,3,4,5,6,7,8,9,10,11,12].map((data,i)=>{
                                return(
                                    <EmployeeCard/>
                                )
                               })
                                }
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllEmployee;