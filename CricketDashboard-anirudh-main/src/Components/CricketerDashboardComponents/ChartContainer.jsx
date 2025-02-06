import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ChartContainer = () => {
  const data = [
    { name: 'Jan', matches: 12 },
    { name: 'Feb', matches: 29 },
    { name: 'Mar', matches: 23 },
    { name: 'Apr', matches: 32 },
    { name: 'May', matches: 15 },
    { name: 'Jun', matches: 20 }
  ];

  return (
    <>
      <style>
        {`
          .chart-container {
            background: white;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
            // border:2px solid red;
          }

          .chart-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .chart-wrapper {
            width: 100%;
            height: 300px;
          }
            @media (max-width:425px)
            {
             .chart-container {
            background: white;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          
           width:100%;
           height:auto;
            border:2px solid red;
          }
            }

          @media (max-width: 768px) {
            .chart-wrapper {
              height: 250px;
            }

            .chart-container {
              padding: 15px;
            }
          }
        `}
      </style>

      <div className="chart-container">
        <h5 className="chart-title">Report based on matches played</h5>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="matches" fill="#6c757d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default ChartContainer;
