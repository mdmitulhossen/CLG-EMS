import React from 'react';
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
import { CalendarEvents } from '../partials/CustomData/CalendarEventData';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css"

const TaskCalendar = () => {
    const localizer = momentLocalizer(moment);
    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <NavLink className='dark:text-white' to='/'>Home</NavLink>,
                    },
                    {
                        title: <NavLink className='dark:text-white' to='/calendar'>Calendar</NavLink>,
                    },

                ]}

            />
            <div className='mt-10'>
                <Calendar
                    localizer={localizer}
                    events={CalendarEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        </div>
    );
};

export default TaskCalendar;