import React from 'react';
import Login from './Login';
import { Tabs } from 'antd';

const AuthPage = () => {
  
    // const onChange = (key) => {
    //     // console.log(key);
    //     setType(key)
    // };
    const items = [
        {
            key: 'company',
            label: 'Company Login',
            children: <Login type="Company"/>,
        },
        {
            key: 'employee',
            label: 'Employee Login',
            children: <Login type="Employee"/>,
        },
        {
            key: 'admin',
            label: 'Admin Login',
            children: <Login type="Admin"/>,
        },
    ];
    return (
        <div className='pt-12'>

            <Tabs size="large" type="card"  centered defaultActiveKey="1" items={items}  animated/>
            
        </div>
    );
};

export default AuthPage;