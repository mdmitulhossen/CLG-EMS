import React from 'react';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import AllProjectsTable from '../partials/Projects/AllProjectsTable';
import YourProjectsTable from '../partials/Projects/YourProjectsTable';
import { Breadcrumb } from 'antd';
import { Link, NavLink } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            {/* Breadcrumb home>project */}
            <div className='mb-5'>
                <Breadcrumb
                    items={[
                        {
                            title: <NavLink className='dark:text-white' to='/'>Home</NavLink>,
                        },
                        {
                            title: <NavLink className='dark:text-white' to='/projects'>Projects</NavLink>,
                        },

                    ]}
                    
                />
            </div>
            <YourProjectsTable />
            <DashboardCard07 />
            <AllProjectsTable />
        </div>
    );
};

export default Projects;