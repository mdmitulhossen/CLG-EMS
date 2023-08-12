import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['Completed', 'Incomplete'],
    datasets: [
      {
        label: 'Projects',
        data: [
          70, 30,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={160} />
    </div>
  );
}

export default DashboardCard06;
