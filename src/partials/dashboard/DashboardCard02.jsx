import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-02.svg';


// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from 'react';
import { Tag } from 'antd';

function DashboardCard02() {
  const [counterOn, setCounterOn] = useState(false);
 

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <div>
            <svg width="40px" height="" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M153.9 105.9h715.4v812.8H153.9z" fill="#55B7A8" /><path d="M877.3 926.8H145.9V97.9h731.4v828.9z m-715.4-16h699.4V113.9H161.9v796.9z" fill="#0A0408" /><path d="M221.3 182.9h580.5v658.8H221.3z" fill="#FFFFFF" /><path d="M793.8 833.8h16v16h-16zM777.7 849.8h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0H568v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0H439v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0H310v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16zM213.3 833.8h16v16h-16zM229.3 818.1h-16v-15.7h16v15.7z m0-31.4h-16V771h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16V724z m0-31.3h-16V677h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16V332h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16V285z m0-31.4h-16V238h16v15.6z m0-31.3h-16v-15.7h16v15.7zM213.3 174.9h16v16h-16zM777.7 190.9h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0H568v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0H439v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16z m-32.3 0H310v-16h16.1v16z m-32.3 0h-16.1v-16h16.1v16z m-32.2 0h-16.1v-16h16.1v16zM793.8 174.9h16v16h-16zM809.8 818.1h-16v-15.7h16v15.7z m0-31.4h-16V771h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16V724z m0-31.3h-16V677h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16V332h16v15.7z m0-31.3h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16V285z m0-31.4h-16V238h16v15.6z m0-31.3h-16v-15.7h16v15.7z" fill="#0A0408" /><path d="M364.5 306.6m-44.8 0a44.8 44.8 0 1 0 89.6 0 44.8 44.8 0 1 0-89.6 0Z" fill="#DC444A" /><path d="M364.5 359.4c-29.1 0-52.8-23.7-52.8-52.8s23.7-52.8 52.8-52.8 52.8 23.7 52.8 52.8-23.7 52.8-52.8 52.8z m0-89.6c-20.3 0-36.8 16.5-36.8 36.8s16.5 36.8 36.8 36.8 36.8-16.5 36.8-36.8-16.5-36.8-36.8-36.8zM459.3 262.6h144.1v16H459.3zM459.3 332.2h244.1v16H459.3z" fill="#0A0408" /><path d="M364.5 516.3m-44.8 0a44.8 44.8 0 1 0 89.6 0 44.8 44.8 0 1 0-89.6 0Z" fill="#DC444A" /><path d="M364.5 569.1c-29.1 0-52.8-23.7-52.8-52.8s23.7-52.8 52.8-52.8 52.8 23.7 52.8 52.8-23.7 52.8-52.8 52.8z m0-89.6c-20.3 0-36.8 16.5-36.8 36.8 0 20.3 16.5 36.8 36.8 36.8s36.8-16.5 36.8-36.8c0-20.3-16.5-36.8-36.8-36.8zM459.3 472.3h144.1v16H459.3zM459.3 541.9h244.1v16H459.3z" fill="#0A0408" /><path d="M364.5 726m-44.8 0a44.8 44.8 0 1 0 89.6 0 44.8 44.8 0 1 0-89.6 0Z" fill="#DC444A" /><path d="M364.5 778.8c-29.1 0-52.8-23.7-52.8-52.8s23.7-52.8 52.8-52.8 52.8 23.7 52.8 52.8-23.7 52.8-52.8 52.8z m0-89.6c-20.3 0-36.8 16.5-36.8 36.8 0 20.3 16.5 36.8 36.8 36.8s36.8-16.5 36.8-36.8c0-20.3-16.5-36.8-36.8-36.8zM459.3 682h144.1v16H459.3zM459.3 751.6h244.1v16H459.3z" fill="#0A0408" /><path d="M359 72.4h305.2v75.9H359z" fill="#EBB866" /><path d="M672.2 156.2H351V64.4h321.2v91.8z m-305.2-16h289.2V80.4H367v59.8z" fill="#0A0408" /><path d="M808.3 807.9m-141.7 0a141.7 141.7 0 1 0 283.4 0 141.7 141.7 0 1 0-283.4 0Z" fill="#EBB866" /><path d="M808.3 957.6c-82.5 0-149.7-67.1-149.7-149.7s67.1-149.7 149.7-149.7S958 725.4 958 807.9s-67.2 149.7-149.7 149.7z m0-283.4c-73.7 0-133.7 60-133.7 133.7s60 133.7 133.7 133.7S942 881.6 942 807.9s-60-133.7-133.7-133.7z" fill="#0A0408" /><path d="M810.3 727.1l26 52.5 58 8.5-42 40.9 9.9 57.8-51.9-27.3-51.9 27.3 9.9-57.8-41.9-40.9 58-8.5z" fill="#FFFFFF" /><path d="M872.8 901.4l-62.5-32.9-62.5 32.9 11.9-69.6-50.6-49.3 69.9-10.2 31.3-63.3 31.3 63.3 69.9 10.2-50.6 49.3 11.9 69.6z m-62.5-51l41.3 21.7-7.9-45.9 33.4-32.5L831 787l-20.6-41.8-20.7 41.8-46.1 6.7 33.4 32.5-7.9 45.9 41.2-21.7z" fill="#0A0408" /></svg>
          </div>
          <div className="text-xs font-light text-white px-1.5 bg-amber-500 rounded-full">14%</div>
       
        </header>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 mt-5">Task Accomplished</h2>
       
        <div className="flex items-start mt-2">
          <div className="text-3xl font-semibold text-slate-800 dark:text-slate-100 mr-2">
          {counterOn && (
              <CountUp start={0} end={20} duration={3} delay={1} />
            )}
          </div>
          
        
        </div>
        <Tag className='mb-2' color="#f50">Completed</Tag> 
      </div>
    
      </ScrollTrigger>
    </div>
  );
}

export default DashboardCard02;
