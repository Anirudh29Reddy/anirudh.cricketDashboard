import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data: replace this with the actual match data that includes locations
const matchData = [
  { match_id: 1, venue: 'Wankhede Stadium, India', opposite_team: 'Australia' },
  { match_id: 2, venue: 'Lord\'s, England', opposite_team: 'England' },
  { match_id: 3, venue: 'M. Chinnaswamy Stadium, India', opposite_team: 'South Africa' },
  { match_id: 4, venue: 'Eden Gardens, India', opposite_team: 'New Zealand' },
  { match_id: 5, venue: 'Melbourne Cricket Ground, Australia', opposite_team: 'Sri Lanka' }
];

// Sample data for match location classification
const classifyMatchesByLocation = () => {
  let locations = { Home: 0, Away: 0, Neutral: 0 };

  // Classify matches based on venue
  matchData.forEach(match => {
    if (match.venue.includes('India')) {
      locations.Home++; // Home matches if venue is in India
    } else if (match.venue.includes('Australia') || match.venue.includes('England')) {
      locations.Away++; // Away matches if venue is in Australia or England
    } else {
      locations.Neutral++; // Neutral matches for others
    }
  });

  return [
    { name: 'Home', value: locations.Home },
    { name: 'Away', value: locations.Away },
    { name: 'Neutral', value: locations.Neutral }
  ];
};

const PlacesChart = () => {
  const data = classifyMatchesByLocation();

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

          .label-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }

          .label-item {
            display: flex;
            align-items: center;
          }

          .color-box {
            width: 20px;
            height: 20px;
            margin-right: 10px;
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
        <h5 className="chart-title">Matches by Location</h5>
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

        {/* Label container displaying names on the side */}
        <div className="label-container">
          {data.map((entry, index) => (
            <div key={`label-${index}`} className="label-item">
              <div
                className="color-box"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              {entry.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlacesChart;
