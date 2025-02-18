import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dummy data for Overall Report and Score Table with added roles
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

const CricketMatchReport = () => {
  const [step, setStep] = useState(1); // Step to track the current step
  const [matchType, setMatchType] = useState('ODI');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [overallReport, setOverallReport] = useState(dummyOverallReport);
  const [scoreData, setScoreData] = useState(dummyScoreData);

  const handleMatchTypeChange = (e) => {
    setMatchType(e.target.value);
    const filteredReport = dummyOverallReport.filter(match => match.match_type === e.target.value);
    const filteredScoreData = dummyScoreData.filter(score => score.match_id === filteredReport[0]?.match_id);
    
    setOverallReport(filteredReport);
    setScoreData(filteredScoreData);
  };

  const handlePlayerChange = (e) => {
    setSelectedPlayer(e.target.value);
  };

  // Directly comparing runs with total balls * 2
  const categorizeBattingPerformance = (runs, ballsFaced) => {
    if (runs > ballsFaced * 2) return 'Excellent';
    if (runs > ballsFaced * 1) return 'Average';
    return 'Poor';
  };

  const categorizeBowlingPerformance = (runsGiven, ballsBowled) => {
    if (runsGiven > ballsBowled * 6) return 'Poor';
    if (runsGiven > ballsBowled * 3) return 'Average';
    return 'Excellent';
  };

  const calculateAllrounderPerformance = (battingPerformance, bowlingPerformance) => {
    if (battingPerformance === 'Excellent' && bowlingPerformance === 'Excellent') return 'Excellent';
    if (battingPerformance === 'Poor' || bowlingPerformance === 'Poor') return 'Poor';
    return 'Average';
  };

  const aggregateScores = (scoreData) => {
    const playerScores = {};

    scoreData.forEach((record) => {
      const { player_name, player_role, runs, ball_no } = record;
      const key = player_name;

      if (!playerScores[key]) {
        playerScores[key] = { runs: 0, ballsFaced: 0, runsGiven: 0, ballsBowled: 0, role: player_role };
      }

      if (player_role === 'Batting') {
        playerScores[key].runs += runs;
        playerScores[key].ballsFaced += 1;
      } else if (player_role === 'Bowling') {
        playerScores[key].runsGiven += runs;
        playerScores[key].ballsBowled += 1;
      }
    });

    for (const player in playerScores) {
      const { runs, runsGiven, ballsFaced, ballsBowled, role } = playerScores[player];
      let battingPerformance = categorizeBattingPerformance(runs, ballsFaced);
      let bowlingPerformance = categorizeBowlingPerformance(runsGiven, ballsBowled);

      if (role === 'All-rounder') {
        playerScores[player].performance = calculateAllrounderPerformance(battingPerformance, bowlingPerformance);
      } else {
        playerScores[player].performance = role === 'Batting' ? battingPerformance : bowlingPerformance;
      }
    }

    return playerScores;
  };

  const playerScores = aggregateScores(scoreData);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cricket Match Report</h1>

      {/* Step 1: Match Type Selection */}
      {step === 1 && (
        <div>
          <h2>Select Match Type</h2>
          <div className="mb-4">
            <label htmlFor="matchType" className="form-label">Match Type: </label>
            <select id="matchType" className="form-select" value={matchType} onChange={handleMatchTypeChange}>
              <option value="ODI">ODI</option>
              <option value="T20">T20</option>
              <option value="Test">Test</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
      )}

      {/* Step 2: Player Selection */}
      {step === 2 && (
        <div>
          <h2>Select Player</h2>
          <div className="mb-4">
            <label htmlFor="playerSelect" className="form-label">Select Player: </label>
            <select id="playerSelect" className="form-select" onChange={handlePlayerChange}>
              <option value="">All Players</option>
              {Array.from(new Set(dummyScoreData.map(record => record.player_name))).map((player, index) => (
                <option key={index} value={player}>{player}</option>
              ))}
            </select>
          </div>
          <button className="btn btn-secondary" onClick={prevStep}>Previous</button>
          <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
      )}

      {/* Step 3: Display Player's Score and Ball-by-Ball Record */}
      {step === 3 && (
        <div>
          <h2>Player's Score</h2>
          {selectedPlayer && (
            <div>
              <h3>Performance for {selectedPlayer}</h3>
              <p><strong>Performance: {playerScores[selectedPlayer]?.performance || 'Not Available'}</strong></p>
            </div>
          )}
          {selectedPlayer && (
            <div>
              <h3>Ball-by-Ball Record for {selectedPlayer}</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Ball No</th>
                    <th>Outcome</th>
                    <th>Runs</th>
                    <th>Delivery Type</th>
                    <th>Wicket</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreData.filter(record => record.player_name === selectedPlayer).map((record) => (
                    <tr key={record.ball_record_id}>
                      <td>{record.ball_no}</td>
                      <td>{record.outcome}</td>
                      <td>{record.runs}</td>
                      <td>{record.delivery_type}</td>
                      <td>{record.wicket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <button className="btn btn-secondary" onClick={prevStep}>Previous</button>
        </div>
      )}
    </div>
  );
};

export default CricketMatchReport;
