
import React, { useState, useEffect } from 'react';

const TotalDaysInMonth = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [totalDays, setTotalDays] = useState(0);


    const calculateTotalDays = () => {
        const daysInMonth = new Date(year, month, 0).getDate();
        setTotalDays(daysInMonth);
    };

    useEffect(() => {
        calculateTotalDays();
    }, [year, month]);


    return (
        <div>
            <label>
                Year:
                <input type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
            </label>
            <label>
                Month:
                <input type="number" value={month} onChange={(e) => setMonth(parseInt(e.target.value))} />
            </label>
            <p>Total days in {month}/{year}: {totalDays}</p>
        </div>
    );
};

export default TotalDaysInMonth;