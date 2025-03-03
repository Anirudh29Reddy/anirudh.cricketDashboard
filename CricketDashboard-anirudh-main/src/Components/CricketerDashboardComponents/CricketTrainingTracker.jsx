import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadMatchData } from '@/pages/Redux/TrainingModule/TrainingModuleAction';

const CricketMatchReport = () => {
  const [step, setStep] = useState(1);
  const [matchType, setMatchType] = useState('ODI');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [id, setId] = useState(null);

  const dispatch = useDispatch();
  const matches = useSelector((state) => state.match.matches);
  const scores = useSelector((state) => state.match.scores);
  const phone = useSelector((state) => state.cricketer.cricketerDetails?.phonenumber);

  useEffect(() => {
    if (phone) {
      fetch(`http://localhost:3000/api/GetIdByPlayerNumber?phonenumber=${phone}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setId(data[0].cricketerid);
          }
        })
        .catch((err) => console.error("Error fetching ID:", err));
    }
  }, [phone]);

  useEffect(() => {
    if (id) {
      dispatch(loadMatchData(id));
    }
  }, [id, dispatch]);

  const [overallReport, setOverallReport] = useState([]);
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    if (matches.length > 0) {
      const filteredMatches = matches.filter((match) => match.match_type === matchType);
      setOverallReport(filteredMatches);

      const filteredScores = scores.filter((score) => filteredMatches.some((match) => match.match_id === score.match_id));
      setScoreData(filteredScores);
    }
  }, [matches, scores, matchType]);

  const handleMatchTypeChange = (e) => {
    setMatchType(e.target.value);
  };

  const handlePlayerChange = (e) => {
    setSelectedPlayer(e.target.value);
  };

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

  const calculateAllrounderPerformance = (batting, bowling) => {
    if (batting === 'Excellent' && bowling === 'Excellent') return 'Excellent';
    if (batting === 'Poor' || bowling === 'Poor') return 'Poor';
    return 'Average';
  };

  const aggregateScores = (scoreData) => {
    const playerScores = {};

    scoreData.forEach((record) => {
      const { player_name, player_role, runs } = record;
      if (!playerScores[player_name]) {
        playerScores[player_name] = { runs: 0, ballsFaced: 0, runsGiven: 0, ballsBowled: 0, role: player_role };
      }

      if (player_role === 'Batting') {
        playerScores[player_name].runs += runs;
        playerScores[player_name].ballsFaced += 1;
      } else if (player_role === 'Bowling') {
        playerScores[player_name].runsGiven += runs;
        playerScores[player_name].ballsBowled += 1;
      }
    });

    for (const player in playerScores) {
      const { runs, runsGiven, ballsFaced, ballsBowled, role } = playerScores[player];
      const battingPerformance = categorizeBattingPerformance(runs, ballsFaced);
      const bowlingPerformance = categorizeBowlingPerformance(runsGiven, ballsBowled);

      playerScores[player].performance = role === 'All-rounder' 
        ? calculateAllrounderPerformance(battingPerformance, bowlingPerformance) 
        : role === 'Batting' ? battingPerformance : bowlingPerformance;
    }

    return playerScores;
  };

  const playerScores = aggregateScores(scoreData);

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cricket Match Report</h1>

      {step === 1 && (
        <div>
          <h2>Select Match Type</h2>
          <div className="mb-4">
            <label className="form-label">Match Type: </label>
            <select className="form-select" value={matchType} onChange={handleMatchTypeChange}>
              <option value="ODI">ODI</option>
              <option value="T20">T20</option>
              <option value="Test">Test</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Select Player</h2>
          <div className="mb-4">
            <label className="form-label">Select Player: </label>
            <select className="form-select" onChange={handlePlayerChange}>
              <option value="">All Players</option>
              {Array.from(new Set(scoreData.map((record) => record.player_name))).map((player, index) => (
                <option key={index} value={player}>{player}</option>
              ))}
            </select>
          </div>
          <button className="btn btn-secondary" onClick={prevStep}>Previous</button>
          <button className="btn btn-primary" onClick={nextStep}>Next</button>
        </div>
      )}

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
              <h3>Ball-by-Ball Record</h3>
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
                  {scoreData.filter((record) => record.player_name === selectedPlayer).map((record) => (
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
