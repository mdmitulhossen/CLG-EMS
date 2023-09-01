import { Breadcrumb } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import headimage from '../images/employee_workStation.jpg'
import BlogCard from '../components/BlogCard';

const Blog = () => {
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
                            title: <NavLink className='dark:text-white' to='/blog'>blog</NavLink>,
                        },

                    ]}

                />
            </div>


            <div>
                {/* blog header */}
                <div className="grid grid-cols-2 items-center gap-10 w-full bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700">
                        <div className='w-full h-[300px]'>
                            <img className='w-full h-full object-cover rounded-s-md' src={headimage} alt="" />
                        </div>
                        <div className='pr-8 space-y-3'>
                            <h1 className='text-3xl font-bold dark:text-white'>Our Company</h1>
                            <p className='text-sm font-medium dark:text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, debitis? Similique distinctio aut quibusdam blanditiis a, beatae enim quaerat ex, unde modi soluta repellendus id?</p>
                            <NavLink to='/about'><button className='px-4 py-2 bg-slate-800 mt-5 rounded-sm text-white font-semibold'>Read  More</button></NavLink>
                        </div>
                </div>


                <div>
                <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 mt-16">
                            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between" >
                                <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100">Our Blog</h2>
                                <div>
                                    <input type="text" className='rounded-lg focus:border-[#1E293B]' placeholder="search here.."/>
                                <button className='bg-[#1E293B] ml-4 hover:bg-[#1E293B]/80 duration-200 dark:bg-blue-500 dark:hover:bg-blue-400 text-white text-md font-semibold px-4 py-2 rounded-lg'>View All</button>
                                </div>
                            </header>

                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
                                {
                               [1,2,3,4,5,6,7,8,9,10,11,12].map((data,i)=>{
                                return(
                                    <BlogCard/>
                                )
                               })
                                }
                                
                            </div>

                        </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;