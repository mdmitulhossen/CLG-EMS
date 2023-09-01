import React from 'react';
import img1 from '../../images/employee1.avif'
import { Tag } from 'antd';
import { FacebookFilled,LinkedinOutlined } from '@ant-design/icons';
import '../../css/Others-style/employeeCard.css'

const EmployeeCard = ({name,position}) => {
    return (

        <div class="card">
            <div class="img-bx">
                <img src={img1} alt="img" />
            </div>
            <div class="content">
                <div class="detail">
                    <h2 className='dark:text-slate-100 text-[#444]'>{name}<br />
                        <span><Tag color="#55acee">
                            {position}
                        </Tag></span>
                    </h2>
                    <ul class="sci">
                        <li>
                            <a className='bg-white dark:bg-[#03a9f4]' href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a className='bg-white dark:bg-[#03a9f4]' href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a className='bg-white dark:bg-[#03a9f4]'href="#"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                            <a className='bg-white dark:bg-[#03a9f4]' href="#"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default EmployeeCard;