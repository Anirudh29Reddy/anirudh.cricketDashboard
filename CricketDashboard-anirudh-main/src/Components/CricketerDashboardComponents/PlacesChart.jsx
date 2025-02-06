import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PlacesChart = () => {
  const data = [
    { name: 'Home', value: 35 },
    { name: 'Away', value: 45 },
    { name: 'Neutral', value: 20 }
  ];

  const COLORS = ['#007bff', '#28a745', '#ffc107'];

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
        <h5 className="chart-title">Matches in recent places</h5>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default PlacesChart;
