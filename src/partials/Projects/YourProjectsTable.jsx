import React from 'react';
import { Modal, Tag, Button } from 'antd';
import { useState } from 'react';

const YourProjectsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleSubmit = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 max-h-[400px] overflow-y-scroll mb-10">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Your Tasks</h2>
            </header>
            <div className="p-3">
                {/* Table */}
                <div className="h-full overflow-auto ">
                    <table className="table-auto w-full dark:text-slate-300">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Task</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Project</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Deficulty</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Duration(Days)</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Conversion</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                            {/* Row */}
                            {
                                [1, 2, 3, 4].map((d, i) => {
                                    return (
                                        <tr>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <div className="text-slate-800 dark:text-slate-100">Home page</div>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">Brain_Station</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center"><Tag color="#3B82F6">
                                                    Easy
                                                </Tag></div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">5</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">

                                                    <button onClick={showModal} className='bg-red-400 hover:bg-red-500 px-2 py-1 rounded-md text-xs text-white font-semibold mr-3 duration-200'>Details</button>
                                                    <button className='bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-xs text-white duration-200 font-semibold'>Submit</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            <Modal 
            title="Project Details" 
            open={isModalOpen}
            onOk={handleOk}
             onCancel={handleCancel}
            footer={[]}
            >
                <div className='space-y-2'>
                    <h1 className='text-center text-2xl font-bold '>Project Name</h1>
                    <p className='text-center'>
                        <Tag color="#3B82F6"> Easy </Tag>
                    </p>
                    <h3 className='text-md font-semibold text-center'>Duration: <span className='text-lg font-medium text-black/60'>5 days</span></h3>
                    <h2 className='text-lg font-bold'>Task Details</h2>
                    <p className='text-black/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident impedit esse, vel consectetur repellat vero rerum iusto rem voluptatibus! Iste odit itaque repellendus repellat magni sed vel sapiente repudiandae soluta dolor expedita eaque ad neque modi quisquam, quo ex voluptate eum velit sunt? Fuga et explicabo aliquid neque nihil!</p>
                    <div className='space-y-2'>
                        <h1 className='text-md font-bold'>Project Assests : <a href="www.google.com"><Tag color="red"> Click Here </Tag></a></h1>
                        <h1 className='text-lg font-bold'>Requirments</h1>
                        <ul className='ml-10 list-disc'>
                            <li>Use Tailwind CSS</li>
                            <li>Must be responsive</li>
                            <li>Deploy</li>
                        </ul>
                    </div>
                    <div className='pt-10 text-right space-y-2'>
                        <button onClick={handleSubmit} className='px-5 py-2 text-md font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 duration-200'>Submit</button>
                        <button onClick={handleCancel} className='px-5 ml-2 py-2 text-md font-semibold text-white bg-red-400 rounded-md hover:bg-red-600 duration-200'>Cancel</button>
                    </div>

                </div>
            </Modal>
        </div>
    );
};

export default YourProjectsTable;