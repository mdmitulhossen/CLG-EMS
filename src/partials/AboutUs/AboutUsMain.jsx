import React from 'react';
import workstation from "../../images/employee_workStation.jpg"
import user1 from '../../images/user-36-01.jpg'
import user2 from '../../images/user-36-02.jpg'
import user3 from '../../images/user-36-03.jpg'
import user4 from '../../images/user-36-04.jpg'
import user5 from '../../images/user-36-05.jpg'
import user6 from '../../images/user-36-06.jpg'

const AboutUsMain = () => {
    return (
        <div className='mt-32'>

            <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex-1'>
                    <h1 className='text-2xl xl:text-4xl font-bold text-center dark:text-white'>We are here to make great design accessible and delightfull for
                        everyone</h1>
                    <p className='mt-2 text-black/60 text-center dark:text-white/70'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,
                    </p>
                </div>
                <div className='flex-1 h-[350px]'>
                    <img className='w-full h-full object-cover' src={workstation} alt="" />
                </div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 justify-evenly mt-20'>
                <div className='border-t-2 pt-6 pr-6 pl-1 relative'>
                    <span className='absolute text-white bg-[#1E293B] dark:bg-[#4469ff] px-3 py-2 rounded-full -top-6 -left-3'><i class="fa-solid fa-flag"></i></span>
                    <h1 className='text-2xl font-bold dark:text-white'>Founded</h1>
                    <p className='text-black/70 mt-3 dark:text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero quasi officiis dolorem aut animi facilis impedit magni. At, explicabo!</p>
                </div>
                <div className='border-t-2 pt-6 pr-6 relative'>
                    <span className='absolute text-white bg-[#1E293B] dark:bg-[#4469ff] px-3 py-2 rounded-full -top-6 -left-3'><i class="fa-solid fa-landmark"></i></span>
                    <h1 className='text-2xl font-bold dark:text-white'>50M Monthly Enrichments</h1>
                    <p className='text-black/70 mt-3 dark:text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero quasi officiis dolorem aut animi facilis impedit magni. At, explicabo!</p>
                </div>
                <div className='border-t-2 pt-6 pr-6 relative mt-12 md:mt-0'>
                    <span className='absolute text-white bg-[#1E293B] dark:bg-[#4469ff] px-[10px] py-2 rounded-full -top-6 -left-3'><i class="fa-solid fa-user-group"></i></span>
                    <h1 className='text-2xl font-bold dark:text-white'>500K Users</h1>
                    <p className='text-black/70 mt-3 dark:text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero quasi officiis dolorem aut animi facilis impedit magni. At, explicabo!</p>
                </div>
            </div>


            <div className='grid  gap-10 mt-20 md:grid-cols-2'>
                <div className='flex-1 text-sm space-y-3 lg:pr-20 text-center '>
                    <h1 className='text-3xl font-bold dark:text-white'>Our Mission</h1>
                    <p className='dark:text-white/70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae obcaecati praesentium, id molestias vero mollitia error quasi, officiis rerum dolor nihil? Omnis magnam saepe reiciendis earum. Accusantium voluptatum, voluptatem cumque excepturi reprehenderit itaque eum dolore impedit, aspernatur incidunt rem quasi. Unde excepturi totam commodi corporis deleniti ducimus optio, quos suscipit quia veniam temporibus quo illum porro iste quasi  </p>
                    <p className='dark:text-white/70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae obcaecati praesentium, id molestias vero mollitia error quasi, officiis rerum dolor nihil? Omnis magnam saepe reiciendis earum. Accusantium voluptatum, voluptatem cumque excepturi reprehenderit itaque eum dolore impedit, aspernatur incidunt rem quasi. Unde excepturi totam commodi corporis  </p>
                </div>

                <div className='flex-1 space-y-4'>
                    <div className='flex gap-10 shadow-lg p-4 border'>
                        <span className='text-3xl'><i class="fa-solid fa-people-group"></i></span>
                        <div>
                            <h2 className='text-2xl font-semibold dark:text-white'>Team</h2>
                            <p className='dark:text-white/70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eaque rem recusandae incidunt pariatur nostrum!</p>
                        </div>
                    </div>
                    <div className='flex gap-10 shadow-lg p-4 border'>
                        <span className='text-3xl'><i class="fa-solid fa-chess-rook"></i></span>
                        <div>
                            <h2 className='text-2xl font-semibold dark:text-white'>Team</h2>
                            <p className='dark:text-white/70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eaque rem recusandae incidunt pariatur nostrum!</p>
                        </div>
                    </div>
                    <div className='flex gap-10 shadow-lg p-4 border'>
                        <span className='text-3xl'><i class="fa-solid fa-envelope"></i></span>
                        <div>
                            <h2 className='text-2xl font-semibold dark:text-white'>Team</h2>
                            <p className='dark:text-white/70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eaque rem recusandae incidunt pariatur nostrum!</p>
                        </div>
                    </div>

                </div>
            </div>


            {/* talented people with organization */}
            <div className='mt-24 md:px-10 xl:px-40'>
                <h1 className='text-2xl md:text-4xl text-center font-bold mb-2 dark:text-white'>The Taleneted People Behind the <br />Scenes of the Organization</h1>
                 <div className='w-40 h-[3px] bg-gray-400 mx-auto mb-10'></div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img className='w-[100px] h-[100px] rounded-full' src={user4} alt="" />
                        <h1 className='text-black text-xl font-bold dark:text-white'>Mitul</h1>
                        <h3 className='text-black/60 font-bold text-md dark:text-white/80'>Head Of Growth</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img className='w-[100px] h-[100px] rounded-full' src={user2} alt="" />
                        <h1 className='text-black text-xl font-bold dark:text-white'>Mujahid</h1>
                        <h3 className='text-black/60 font-bold text-md dark:text-white/80'>Head Of Department</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img className='w-[100px] h-[100px] rounded-full' src={user3} alt="" />
                        <h1 className='text-black text-xl font-bold dark:text-white'>Azad</h1>
                        <h3 className='text-black/60 font-bold text-md dark:text-white/80'>Manager</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img className='w-[100px] h-[100px] rounded-full' src={user1} alt="" />
                        <h1 className='text-black text-xl font-bold dark:text-white'>Faisol</h1>
                        <h3 className='text-black/60 font-bold text-md dark:text-white/80'>Executive Officer</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img className='w-[100px] h-[100px] rounded-full' src={user5} alt="" />
                        <h1 className='text-black text-xl font-bold dark:text-white'>Fahim</h1>
                        <h3 className='text-black/60 font-bold text-md dark:text-white/80'>Leader</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img className='w-[100px] h-[100px] rounded-full' src={user6} alt="" />
                        <h1 className='text-black text-xl font-bold dark:text-white'>Usama</h1>
                        <h3 className='text-black/60 font-bold text-md dark:text-white/80'>Head Of Growth</h3>
                    </div>

                </div>
            </div>

            {/* Newsletter */}

            <div className='bg-white dark:bg-[#1E293B] shadow-lg mt-16 rounded-md grid md:grid-cols-2 gap-10 p-10 justify-between items-center'>
                <div className='space-y-4'>
                    <h1 className='text-3xl text-[#1E293B] font-bold dark:text-white'>Join Our Mailing List</h1>
                    <p className='font-semibold text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ut eos hic id a quibusdam magnam vitae cum fugiat.</p>
                    <div className='relative xl:w-8/12'>
                        <input className='focus:border-[#1E293B] w-full p-3 relative' type="email" />
                        <button className='px-4 py-2 bg-[#1E293B] text-white font-bold absolute top-1 right-1'>Subscribe</button>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-8'>
                    <div className='space-y-2'>
                        <span className='text-[#1E293B] dark:text-white text-3xl'><i class="fa-brands fa-square-twitter"></i></span>
                        <h2 className='text-2xl font-bold text-[#1E293B] dark:text-white'>Twitter</h2>
                        <p className='text-sm text-[#1E293B]/80 font-medium dark:text-white/70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, asperiores!</p>
                    </div>
                    <div className='space-y-2'>
                        <span className='text-[#1E293B] dark:text-white text-3xl'><i class="fa-brands fa-facebook"></i></span>
                        <h2 className='text-2xl font-bold text-[#1E293B] dark:text-white'>Facebook</h2>
                        <p className='text-sm text-[#1E293B]/80 font-medium dark:text-white/70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, asperiores!</p>
                    </div>
                    <div className='space-y-2'>
                        <span className='text-[#1E293B] dark:text-white text-3xl'><i class="fa-brands fa-youtube"></i></span>
                        <h2 className='text-2xl font-bold text-[#1E293B] dark:text-white'>Youtube</h2>
                        <p className='text-sm text-[#1E293B]/80 font-medium dark:text-white/70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, asperiores!</p>
                    </div>
                    <div className='space-y-2'>
                        <span className='text-[#1E293B] dark:text-white text-3xl'><i class="fa-brands fa-pinterest"></i></span>
                        <h2 className='text-2xl font-bold text-[#1E293B] dark:text-white'>Pinterest</h2>
                        <p className='text-sm text-[#1E293B]/80 font-medium dark:text-white/70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, asperiores!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsMain;