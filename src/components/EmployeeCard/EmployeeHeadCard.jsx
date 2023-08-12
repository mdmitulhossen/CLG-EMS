import React from 'react';
import '../../css/Others-style/employeeCard.css'
import head from "../../images/employee1.avif"
import { Tag } from 'antd';
const EmployeeHeadCard = () => {
    return (
        <div className="col-span-full md:col-span-6 order-1  md:order-3 ">
            <div className="card3">
                <div className='w-40 h-40 bg-white rounded-lg'>
                    <h1> <Tag className='w-full text-center text-lg' color="#cd201f">
                        C E O
                    </Tag></h1>
                    <img className='w-full h-full object-cover rounded-lg' src={head} alt="" />
                </div>
                <div className='w-full space-y-2'>
                    <h1 className='text-2xl'>Name</h1>
                    <p className='font-medium text-sm text-white/70 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe similique voluptate nostrum ipsa eveniet voluptates animi tempora quae voluptatem quisquam!</p>
                    <p className='text-white/90 font-medium'><span className='mr-2'><i class="fa-solid fa-envelope"></i> </span> m@gmail.com</p>
                    <p className='text-white/90 font-medium'><span className='mr-2'><i class="fa-solid fa-phone"></i> </span> 0175555555</p>

                </div>
            </div>
        </div>
    );
};

export default EmployeeHeadCard;