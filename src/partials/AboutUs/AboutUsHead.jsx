import { Divider } from 'antd';
import React from 'react';
import place from '../../images/place.jpeg'
import owner from '../../images/employee1.avif'

const AboutUsHead = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-full xl:col-span-3 h-72 bg-[#C7D2FE] relative'>
                    <div className='w-full h-full bg-green-400 absolute top-8 left-8'>
                        <img className='w-full h-full object-cover' src={place} alt="" />
                    </div>
                    <p className='text-md font-bold text-center mt-1'>Place  <span className='w-12 h-[2px] bg-gray-600 inline-block'></span></p>
                </div>
                <div className='col-span-full xl:col-span-6 h-72 border-2 border-dashed border-black/20 dark:border-white/20 xl:mx-8 mt-4 p-3 overflow-hidden flex justify-center items-center flex-col'>
                    <p className='text-3xl font-bold text-center dark:text-white'>About Us</p>
                    <p className='text-black/80 font-medium text-center dark:text-white/80'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolorem odit nobis illo atque accusamus, similique laboriosam ipsam esse perspiciatis. Provident rerum ipsum assumenda! Aspernatur tenetur deserunt similique! Voluptate, eum.
                    </p>
                </div>
                <div className='col-span-full xl:col-span-3 h-72 bg-[#C7D2FE] relative top-8'>
                    <div className='w-full h-full bg-green-400 absolute -top-8 -left-8'>
                      <img className='w-full h-full object-cover' src={owner} alt="" />
                    </div>
                    <p className='text-md font-bold text-center absolute bottom-0 left-1/2 -translate-x-1/2 mb-1'>Owner <span className='w-12 h-[2px] bg-gray-600 inline-block'></span></p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsHead;