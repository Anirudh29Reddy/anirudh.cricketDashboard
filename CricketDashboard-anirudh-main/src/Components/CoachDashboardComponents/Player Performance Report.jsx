import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const PlayerPerformanceForm = () => {
  const [players, setPlayers] = useState([]); // To store player data fetched from API
  const [selectedPlayer, setSelectedPlayer] = useState(''); // Selected player name
  const [performance, setPerformance] = useState(''); // Selected performance
  const [error, setError] = useState(''); // Error message
  const [success, setSuccess] = useState(''); // Success message

  // Fetch players from the API
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/getAssignedCricketers');
        const data = await response.json();

        console.log("API Response:", data); // Debugging API response

        if (Array.isArray(data)) {
          const activePlayers = data.filter(player => player?.is_active === true);
          setPlayers(activePlayers); // Ensure only active players are set
        } else {
          console.error("API did not return an array:", data);
          setPlayers([]); // Default to an empty array
        }
      } catch (err) {
        console.error('Error fetching players:', err);
        setPlayers([]); // Prevent crashing
      }
    };
    fetchPlayers();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccess(''); // Reset success message

    if (!selectedPlayer || !performance) {
      setError('Both player name and performance are required.');
      return;
    }

    try {
      const response = await fetch('/api/insertPlayerPerformance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player_name: selectedPlayer,
          performance: performance,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Player performance added successfully!');
      } else {
        setError(result.error || 'Failed to add player performance.');
      }
    } catch (err) {
      setError('Error submitting the form.');
      console.error('Error:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Player Performance Form</h4>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        {/* Player Name Dropdown */}
        <Form.Group controlId="playerName" className="mb-3">
          <Form.Label>Player Name</Form.Label>
          <Form.Control
            as="select"
            value={selectedPlayer}
            onChange={(e) => setSelectedPlayer(e.target.value)}
            required
          >
            <option value="">Select Player</option>
            {players.length > 0 ? (
              players.map((player, index) => (
                <option key={index} value={`${player.cricketer_firstname} ${player.cricketer_lastname}`}>
                  {`${player.cricketer_firstname} ${player.cricketer_lastname}`}
                </option>
              ))
            ) : (
              <option disabled>No active players available</option>
            )}
          </Form.Control>
        </Form.Group>

        {/* Performance Dropdown */}
        <Form.Group controlId="performance" className="mb-3">
          <Form.Label>Performance</Form.Label>
          <Form.Control
            as="select"
            value={performance}
            onChange={(e) => setPerformance(e.target.value)}
            required
          >
            <option value="">Select Performance</option>
            <option value="Poor">Poor</option>
            <option value="Average">Average</option>
            <option value="Excellent">Excellent</option>
          </Form.Control>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PlayerPerformanceForm;
