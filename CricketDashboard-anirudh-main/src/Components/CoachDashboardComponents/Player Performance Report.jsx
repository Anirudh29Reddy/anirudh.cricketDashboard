import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const PlayerPerformanceReport = () => {
  const [search, setSearch] = useState("");
  const [playerType, setPlayerType] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Sample Player Data
  const players = [
    { id: 1, name: "Virat Kohli", type: "Batter", matches: 250, runs: 12000, wickets: 0 },
    { id: 2, name: "Jasprit Bumrah", type: "Bowler", matches: 100, runs: 500, wickets: 250 },
    { id: 3, name: "Ben Stokes", type: "All-rounder", matches: 150, runs: 5000, wickets: 150 },
    { id: 4, name: "Steve Smith", type: "Batter", matches: 180, runs: 9000, wickets: 10 },
    { id: 5, name: "Rashid Khan", type: "Bowler", matches: 120, runs: 800, wickets: 220 },
    { id: 6, name: "Hardik Pandya", type: "All-rounder", matches: 130, runs: 4500, wickets: 120 },
  ];

  // Calculate Overall Score (Based on Training Performance)
  const calculateOverallScore = (player) => {
    if (player.type === "Batter") {
      return player.runs / player.matches;
    } else if (player.type === "Bowler") {
      return player.wickets / player.matches * 10;
    } else {
      return (player.runs / player.matches + player.wickets / player.matches * 5);
    }
  };

  // Filter Data
  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(search.toLowerCase()) &&
      (playerType === "" || player.type === playerType)
  );

  // Sorting Function
  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    }
    return 0;
  });

  // Handle Sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Cricket Player Performance Report</h4>

      {/* Filter Row */}
      <Form className="mb-3 d-flex">
        <Form.Control
          type="text"
          placeholder="Search by player name..."
          className="me-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Form.Select
          className="me-2"
          value={playerType}
          onChange={(e) => setPlayerType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Batter">Batter</option>
          <option value="Bowler">Bowler</option>
          <option value="All-rounder">All-rounder</option>
        </Form.Select>
      </Form>

      {/* Performance Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>#</th>
            <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>Player Name</th>
            <th onClick={() => handleSort("type")} style={{ cursor: "pointer" }}>Type</th>
            <th onClick={() => handleSort("matches")} style={{ cursor: "pointer" }}>Matches</th>
            <th onClick={() => handleSort("runs")} style={{ cursor: "pointer" }}>Runs</th>
            <th onClick={() => handleSort("wickets")} style={{ cursor: "pointer" }}>Wickets</th>
            <th onClick={() => handleSort("overallScore")} style={{ cursor: "pointer" }}>Overall Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.length > 0 ? (
            sortedPlayers.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.type}</td>
                <td>{player.matches}</td>
                <td>{player.runs}</td>
                <td>{player.wickets}</td>
                <td>{calculateOverallScore(player).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No matching records found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PlayerPerformanceReport;
