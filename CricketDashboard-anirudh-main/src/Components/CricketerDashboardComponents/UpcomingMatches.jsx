import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpcomingMatches = () => {
  const matches = [
    {
      date: '2025-02-15',
      opponent: 'Team A',
      venue: 'Stadium 1',
      status: 'Upcoming'
    }
  ];

  return (
    <>
      <style>
        {`
          .matches-container {
            background: white;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-top: 20px;
          }

          .matches-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .table-responsive {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .matches-table {
            width: 100%;
            border-collapse: collapse;
          }

          .matches-table th,
          .matches-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #dee2e6;
          }

          .matches-table th {
            background-color: #f8f9fa;
            font-weight: 600;
          }

          .status-badge {
            background-color: #007bff;
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.875rem;
          }

          @media (max-width: 768px) {
            .matches-container {
              padding: 15px;
            }

            .matches-table th,
            .matches-table td {
              padding: 8px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="matches-container">
        <h5 className="matches-title">Upcoming match data</h5>
        <div className="table-responsive">
          <table className="matches-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Opponent</th>
                <th>Venue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={index}>
                  <td>{match.date}</td>
                  <td>{match.opponent}</td>
                  <td>{match.venue}</td>
                  <td>
                    <span className="status-badge">{match.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UpcomingMatches;
