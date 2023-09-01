import { Carousel } from 'antd';
import React from 'react';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useAuth } from '../../Context/AuthContext';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const DashboardEmployee = () => {
    const [auth, setAuth] = useAuth();
     

    return (

        <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">All Employee</h2>
            </header>
            <div className="">
                <Swiper
                key="a"
                    modules={[Autoplay]}
                    breakpoints={
                        {
                            0: {
                              spaceBetween:10,
                              slidesPerView:2,
                            },
                            576: {
                              spaceBetween:10,
                              slidesPerView:3,
                            },
                            768: {
                              spaceBetween:10,
                              slidesPerView:3,
                            },
                            1024: {
                              spaceBetween:10,
                              slidesPerView:4,
                            }
                        }
                    }
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}


                >

                {
                    auth.users.map((data,i)=>{
                        return(
                            <SwiperSlide><EmployeeCard key={i} name={data.name} position={data.position}/></SwiperSlide>
                        )
                    })
                }
                
                  
                   
                </Swiper>

            </div>
        </div>

    );
};

export default DashboardEmployee;