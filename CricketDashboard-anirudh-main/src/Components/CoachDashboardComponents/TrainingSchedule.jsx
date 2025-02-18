import React, { useState } from "react";
import { Table, Form, Button, Modal } from "react-bootstrap";

const TrainingSchedule = () => {
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState({ date: "", time: "", type: "" });
  const [filterType, setFilterType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  // Add a New Training Session (Coach)
  const addSession = () => {
    if (newSession.date && newSession.time && newSession.type) {
      setSessions([...sessions, { ...newSession, id: sessions.length + 1, booked: false }]);
      setNewSession({ date: "", time: "", type: "" });
    } else {
      alert("Please fill all fields before adding!");
    }
  };

  // Open Modal for Booking a Session
  const bookSession = (session) => {
    setSelectedSession(session);
    setShowModal(true);
  };

  // Confirm Booking
  const confirmBooking = () => {
    setSessions(
      sessions.map((s) =>
        s.id === selectedSession.id ? { ...s, booked: true } : s
      )
    );
    setShowModal(false);
  };

  // Filter Sessions
  const filteredSessions = sessions.filter(
    (session) => filterType === "" || session.type === filterType
  );

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Cricket Training Schedule</h4>

      {/* Coach Adds Sessions */}
      <div className="d-flex gap-2 mb-3">
        <Form.Control
          type="date"
          value={newSession.date}
          onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
        />
        <Form.Control
          type="time"
          value={newSession.time}
          onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
        />
        <Form.Select
          value={newSession.type}
          onChange={(e) => setNewSession({ ...newSession, type: e.target.value })}
        >
          <option value="">Select Player Type</option>
          <option value="Batter">Batter</option>
          <option value="Bowler">Bowler</option>
          <option value="All-rounder">All-rounder</option>
        </Form.Select>
        <Button variant="success" onClick={addSession}>Add Session</Button>
      </div>

      {/* Filter for Players */}
      <Form.Select
        className="mb-3"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="">All Sessions</option>
        <option value="Batter">Batter</option>
        <option value="Bowler">Bowler</option>
        <option value="All-rounder">All-rounder</option>
      </Form.Select>

      {/* Training Sessions Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session, index) => (
              <tr key={session.id}>
                <td>{index + 1}</td>
                <td>{session.date}</td>
                <td>{session.time}</td>
                <td>{session.type}</td>
                <td>{session.booked ? "Booked" : "Available"}</td>
                <td>
                  {!session.booked ? (
                    <Button variant="primary" onClick={() => bookSession(session)}>Book</Button>
                  ) : (
                    <Button variant="secondary" disabled>Booked</Button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No sessions available.</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Booking Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to book this session on {selectedSession?.date} at {selectedSession?.time}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="success" onClick={confirmBooking}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TrainingSchedule;
