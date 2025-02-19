import React, { useState } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";

const MatchResultForm = () => {
  const [step, setStep] = useState(1); // Step state to manage the form steps
  const [matchType, setMatchType] = useState("");
  const [playerType, setPlayerType] = useState("");
  const [matchDetails, setMatchDetails] = useState({
    dateTime: "",
    venue: "",
    oppositeTeam: "",
  });
  const [ballRecords, setBallRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    ballNo: "",
    outcome: "",
    runs: "",
    deliveryType: "",
    wicket: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in matchDetails) {
      setMatchDetails({ ...matchDetails, [name]: value });
    } else {
      setNewRecord({ ...newRecord, [name]: value });
    }
  };

  const addBallRecord = () => {
    if (newRecord.ballNo && newRecord.outcome) {
      setBallRecords([...ballRecords, newRecord]);
      setNewRecord({ ballNo: "", outcome: "", runs: "", deliveryType: "", wicket: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Match Type:", matchType);
    console.log("Player Type:", playerType);
    console.log("Ball Records:", ballRecords);
    console.log("Match Details:", matchDetails);
    alert("Match result uploaded successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Cricket Match Result Upload</h2>

      {/* Step Navigation */}
      <Row className="mb-3">
        <Col>
          <Button
            variant={step === 1 ? "primary" : "secondary"}
            onClick={() => setStep(1)}
            disabled={step === 1}
          >
            Step 1: Match Details
          </Button>
        </Col>
        <Col>
          <Button
            variant={step === 2 ? "primary" : "secondary"}
            onClick={() => setStep(2)}
            disabled={step === 2}
          >
            Step 2: Ball-by-Ball Records
          </Button>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit}>
        {/* Step 1: Match Details */}
        {step === 1 && (
          <div>
            <Form.Group className="mb-3">
              <Form.Label>Match Type</Form.Label>
              <Form.Select value={matchType} onChange={(e) => setMatchType(e.target.value)} required>
                <option value="">Select Match Type</option>
                <option value="ODI">ODI</option>
                <option value="T20">T20</option>
                <option value="Test">Test</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Player Type</Form.Label>
              <Form.Select value={playerType} onChange={(e) => setPlayerType(e.target.value)} required>
                <option value="">Select Player Type</option>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
                <option value="All-Rounder">All-Rounder</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="dateTime"
                value={matchDetails.dateTime}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Venue</Form.Label>
              <Form.Control
                type="text"
                name="venue"
                value={matchDetails.venue}
                onChange={handleChange}
                placeholder="Enter Venue"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Opposite Team</Form.Label>
              <Form.Control
                type="text"
                name="oppositeTeam"
                value={matchDetails.oppositeTeam}
                onChange={handleChange}
                placeholder="Enter Opposite Team"
                required
              />
            </Form.Group>

            <div className="text-center mt-4">
              <Button variant="primary" onClick={() => setStep(2)}>
                Next: Ball-by-Ball Records
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Ball-by-Ball Records */}
        {step === 2 && (
          <div>
            <h4>Ball-by-Ball Records</h4>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Ball No</th>
                  <th>Outcome</th>
                  {playerType !== "Bowler" && <th>Runs Scored</th>}
                  {playerType !== "Batsman" && <th>Delivery Type</th>}
                  {playerType !== "Batsman" && <th>Wicket (Yes/No)</th>}
                </tr>
              </thead>
              <tbody>
                {ballRecords.map((record, index) => (
                  <tr key={index}>
                    <td>{record.ballNo}</td>
                    <td>{record.outcome}</td>
                    {playerType !== "Bowler" && <td>{record.runs}</td>}
                    {playerType !== "Batsman" && <td>{record.deliveryType}</td>}
                    {playerType !== "Batsman" && <td>{record.wicket}</td>}
                  </tr>
                ))}
                <tr>
                  <td>
                    <Form.Control
                      type="number"
                      name="ballNo"
                      value={newRecord.ballNo}
                      onChange={handleChange}
                      placeholder="Ball No"
                      required
                    />
                  </td>
                  <td>
                    <Form.Select name="outcome" value={newRecord.outcome} onChange={handleChange} required>
                      <option value="">Select Outcome</option>
                      <option value="Dot Ball">Dot Ball</option>
                      <option value="Single">Single</option>
                      <option value="Four">Four</option>
                      <option value="Six">Six</option>
                      <option value="Wicket">Wicket</option>
                    </Form.Select>
                  </td>
                  {playerType !== "Bowler" && (
                    <td>
                      <Form.Control
                        type="number"
                        name="runs"
                        value={newRecord.runs}
                        onChange={handleChange}
                        placeholder="Runs Scored"
                      />
                    </td>
                  )}
                  {playerType !== "Batsman" && (
                    <td>
                      <Form.Select name="deliveryType" value={newRecord.deliveryType} onChange={handleChange}>
                        <option value="">Select Type</option>
                        <option value="Fast">Fast</option>
                        <option value="Spin">Spin</option>
                        <option value="Yorker">Yorker</option>
                      </Form.Select>
                    </td>
                  )}
                  {playerType !== "Batsman" && (
                    <td>
                      <Form.Select name="wicket" value={newRecord.wicket} onChange={handleChange}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </Form.Select>
                    </td>
                  )}
                </tr>
              </tbody>
            </Table>

            <Button variant="primary" onClick={addBallRecord} className="mb-3">
              Add Ball
            </Button>

            <div className="text-center mt-4">
              <Button type="submit" variant="success">
                Submit Match Result
              </Button>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
};

export default MatchResultForm;
