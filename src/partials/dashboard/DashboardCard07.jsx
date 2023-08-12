import { Tag } from 'antd';
import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';



function DashboardCard07(task) {
  // const [taskValue,setTaskValue]=useState("");
  // if(task.task==="all"){
  //   let value1='<Tag color="success">Complete</Tag>'
  //   setTaskValue(value1)
  // }
  // else if(task.task==="mytask"){
  //   let value2='<button>Details</button><button>Submit</button>'
  //   setTaskValue(value2)
  // }
  // console.log("====>"+taskValue)
  return (
    <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Recent Tasks</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
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
                    
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">landing Page</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Brain-Station</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Tag color="#3B82F6">
                    Easy
                  </Tag></div>
                </td>
                <td className="p-2">
                  <div className="text-center">10</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Tag color="processing">
                    In Progrss</Tag></div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                    <div className="text-slate-800 dark:text-slate-100">About-section</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Brain-Station</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Tag color="#3B82F6">
                    Intermediate
                  </Tag></div>
                </td>
                <td className="p-2">
                  <div className="text-center">10</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500"><Tag color="warning">
                    InComplete</Tag></div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">Vimeo.com</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Brain-Station</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500"><Tag color="#3B82F6">
                    Hard
                  </Tag></div>
                </td>
                <td className="p-2">
                  <div className="text-center">14</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Tag color="warning">
                    InComplete</Tag></div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">Employee BackEnd</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Brain-Station</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500"><Tag color="#3B82F6">
                    Easy
                  </Tag></div>
                </td>
                <td className="p-2">
                  <div className="text-center">14</div>
                </td>
                <td className="p-2">
                  <div className="text-center"><Tag color="warning">
                    InComplete</Tag></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
