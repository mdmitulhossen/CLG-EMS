import React from 'react';
import img1 from "../../images/happy.svg";
import './dashboard.css';


const DashboardCommentCard = () => {
    return (
        
            <div className="col-span-full xl:col-span-8  bg-[#C7D2FE] dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700">
                
                <div className='flex gap-10 p-5 text-black dark:text-white items-center h-full'>
                    <div >
                         <img className='w-36' src={img1} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold'>Good Job, Mohamed!</h3>
                        <p className='text-black/50 dark:text-white/50 font-medium'>You've Finished All Of Your Tasks For This Week.</p>
                        <ul className='list_style'>
                            <li>Good Work</li>
                            <li>Impressive</li>
                            <li>Mind Blowing</li>
                        </ul>
                    </div>
                </div>

            </div>
        
    );
};

export default DashboardCommentCard;