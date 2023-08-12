import { Breadcrumb } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutUsHead from '../partials/AboutUs/AboutUsHead';

const AboutUs = () => {
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
                            title: <NavLink className='dark:text-white' to='/about'>about</NavLink>,
                        },

                    ]}

                />
            </div>

            <div>
                <AboutUsHead/>
            </div>
        </div>
    );
};

export default AboutUs;