import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';
import { Button, Space, Tag } from 'antd';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from 'react';

function DashboardCard01() {
  const [counterOn, setCounterOn] = useState(false);
 

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700 ">
       <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          
          <div>
            <svg width="40px" height="" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M886.6 657.2h-16.8v-7.6l-0.7-7.6 0.7-0.1v-0.7h7.7l7.6-0.7zM853.8 657.2h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32 0h-16v-16h16v16zM436.8 657.2h-18.2l4.3-17.7 6.9 1.7h7v1.8l1.7 0.4-1.7 6.8zM442.3 627.7l-15.5-3.8 3.9-15.7 15.5 3.8-3.9 15.7z m7.8-31.4l-15.5-3.8 3.9-15.7 15.5 3.8-3.9 15.7z m7.7-31.4l-15.5-3.8 3.9-15.7 15.5 3.8-3.9 15.7z m7.7-31.4l-15.5-3.8 3.9-15.7 15.5 3.8-3.9 15.7z m7.8-31.4l-15.5-3.8 3.9-15.7 15.5 3.8-3.9 15.7z m7.7-31.4l-15.5-3.8 3.9-15.7 15.5 3.8-3.9 15.7z m7.7-31.4l-15.5-3.8 3.9-15.7 15.5 3.8-3.9 15.7z m7.7-31.5l-15.5-3.8 3.9-15.7 15.5 3.8-3.9 15.7zM504.2 376.4l-15.6-3.8 3.4-13.8h14.3v16h-1.7zM923.3 374.8h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32.1 0h-16v-16h16v16zM950.2 377.7l-5-2.9h-5.8v-3.4l-3-1.8 3-5v-5.8h21.9zM867.8 626.8l-1.4-15.2 15.9-1.4 1.4 15.2-15.9 1.4z m-2.8-30.3l-1.4-15.2 15.9-1.4 1.4 15.2-15.9 1.4z m-2.8-30.3l-1.4-15.2 15.9-1.4 1.4 15.2-15.9 1.4z m-2.7-30.4l-1.4-15.2 15.9-1.4 1.4 15.2-15.9 1.4z m14-26.6l-13.8-8.1 7.7-13.2 13.8 8.1-7.7 13.2z m15.4-26.3l-13.8-8.1 7.7-13.2 13.8 8.1-7.7 13.2z m15.3-26.3l-13.8-8.1 7.7-13.2 13.8 8.1-7.7 13.2z m15.3-26.3l-13.8-8.1 7.7-13.2 13.8 8.1-7.7 13.2z m15.4-26.3l-13.8-8.1 7.7-13.2 13.8 8.1-7.7 13.2z" fill="#0A0408" /><path d="M795.3 649.2h-413l69.5-282.4h413.1L778.5 508z" fill="#EBB866" /><path d="M804.3 657.2H372.1l73.5-298.5h433.6l-92.4 151 17.5 147.5z m-411.8-16h393.8l-16.1-135 80.4-131.4H458.1l-65.6 266.4z" fill="#0A0408" /><path d="M238.4 855.7h-66.1l202.5-750.5H441z" fill="#55B7A8" /><path d="M244.5 863.7h-82.7L368.7 97.2h82.7L244.5 863.7z m-61.8-16h49.6l198.2-734.5H381L182.7 847.7z" fill="#0A0408" /><path d="M693.7 508h-453l69.5-282.5h453z" fill="#EBB866" /><path d="M700 516H230.5L304 217.5h469.5L700 516z m-449.1-16h436.6L753 233.5H316.5L250.9 500z" fill="#0A0408" /><path d="M115.6 850.1h189.8v68.8H115.6z" fill="#68A4D9" /><path d="M313.4 926.9H107.6v-84.8h205.8v84.8z m-189.8-16h173.8v-52.8H123.6v52.8z" fill="#0A0408" /><path d="M65.6 910.9h289.8v16H65.6zM278.6 358.8h232.7v16H278.6z" fill="#0A0408" /></svg>
          </div>
          {/* Menu button */}
          <div className="text-xs font-light text-white px-1.5 bg-amber-500 rounded-full">49%</div>
        </header>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 mt-5">Projects</h2>


        <div className="flex items-start mt-2">
          <div className="text-3xl font-semibold text-slate-800 dark:text-slate-100 mr-2">
          {counterOn && (
              <CountUp start={0} end={24} duration={3} delay={1} />
            )}
          </div>

        </div>
        <Tag className='mb-2' color="#f50">All Project</Tag>
      </div>
      </ScrollTrigger>
    </div>
  );
}

export default DashboardCard01;
