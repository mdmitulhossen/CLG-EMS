import React from 'react';
import '../../css/Others-style/employeeCard.css'
import head from "../../images/employee1.avif"
import { Tag } from 'antd';

const EmCard = ({name}) => {
    return (
        <div className='col-span-full md:col-span-3 order-3'>
            <div className="card3 flex-col">
                <div className='w-24 h-16 bg-white rounded-lg mt-4' >
                    <h1> <Tag className='w-full text-center text-md' color="#cd201f">
                        Manager
                    </Tag></h1>
                    <img className='w-full h-full object-cover rounded-lg' src={head} alt="" />
                </div>
                <div className='w-full'>
                    <h1 className='text-xl text-center'>{name}</h1>
                    <p className='font-medium text-xs text-white/70 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.!</p>
                    <p className='text-white/90 font-medium text-sm text-center'><span className='mr-2'><i class="fa-solid fa-envelope"></i> </span> m@gmail.com</p>
                    <p className='text-white/90 text-sm font-medium text-center'><span className='mr-2'><i class="fa-solid fa-phone"></i> </span> 0175555555</p>

                </div>
            </div>
        </div>
    );
};

export default EmCard;