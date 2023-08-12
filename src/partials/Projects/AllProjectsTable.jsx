import React from 'react';
import { Tag } from 'antd';

const AllProjectsTable = () => {
    return (
        <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 mt-10 max-h-[400px] overflow-y-scroll">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">All Projects</h2>
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
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => {
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
                                                    <Tag color="success">Complete</Tag>
                                                    <button className='bg-red-400 px-2 py-1 rounded-md text-xs text-white font-semibold'>Details</button>
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
        </div>
    );
};

export default AllProjectsTable;