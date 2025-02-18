import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Sample data
const dummyOverallReport = [
  { match_id: 1, match_type: 'ODI', date_time: '2025-02-13T10:00:00', venue: 'Wankhede Stadium', opposite_team: 'Australia' },
  { match_id: 2, match_type: 'T20', date_time: '2025-02-14T15:00:00', venue: 'Eden Gardens', opposite_team: 'England' },
  { match_id: 3, match_type: 'Test', date_time: '2025-02-15T09:00:00', venue: 'M. Chinnaswamy Stadium', opposite_team: 'South Africa' }
];

const dummyScoreData = [
  { ball_record_id: 1, match_id: 1, ball_no: 1, outcome: 'Run', runs: 4, delivery_type: 'Normal', wicket: 'No', player_name: 'Virat Kohli', player_role: 'Batting' },
  { ball_record_id: 2, match_id: 1, ball_no: 2, outcome: 'Run', runs: 1, delivery_type: 'Normal', wicket: 'No', player_name: 'Virat Kohli', player_role: 'Batting' },
  { ball_record_id: 3, match_id: 1, ball_no: 3, outcome: 'Run', runs: 6, delivery_type: 'Normal', wicket: 'No', player_name: 'Virat Kohli', player_role: 'Batting' },
  { ball_record_id: 4, match_id: 2, ball_no: 1, outcome: 'Wicket', runs: 0, delivery_type: 'Yorker', wicket: 'Yes', player_name: 'Jofra Archer', player_role: 'Bowling' },
  { ball_record_id: 5, match_id: 2, ball_no: 2, outcome: 'Run', runs: 2, delivery_type: 'Normal', wicket: 'No', player_name: 'Jofra Archer', player_role: 'Bowling' },
  { ball_record_id: 6, match_id: 3, ball_no: 1, outcome: 'Run', runs: 3, delivery_type: 'Normal', wicket: 'No', player_name: 'Dean Elgar', player_role: 'All-rounder' }
];

// Aggregate the total runs scored by match type
const aggregateRunsByMatchType = () => {
  const runsByMatchType = { ODI: 0, T20: 0, Test: 0 };

  // Sum the runs for each match_id and match_type
  dummyScoreData.forEach(score => {
    const match = dummyOverallReport.find(m => m.match_id === score.match_id);
    if (match) {
      runsByMatchType[match.match_type] += score.runs;
    }
  });

  return [
    { name: 'ODI', runs: runsByMatchType['ODI'] },
    { name: 'T20', runs: runsByMatchType['T20'] },
    { name: 'Test', runs: runsByMatchType['Test'] }
  ];
};

const ChartContainer = () => {
  const data = aggregateRunsByMatchType();

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

          @media (max-width: 425px) {
            .chart-container {
              width: 100%;
              height: auto;
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
        <h5 className="chart-title">Total Runs by Match Type</h5>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="runs" fill="#6c757d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default ChartContainer;
