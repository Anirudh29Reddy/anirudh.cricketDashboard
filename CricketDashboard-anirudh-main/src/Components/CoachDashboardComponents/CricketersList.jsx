import React, { useState } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";

const RowCardTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [mainSearch, setMainSearch] = useState("");
  const [mainSessionFilter, setMainSessionFilter] = useState("");
  const [modalSearch, setModalSearch] = useState("");
  const [modalSessionFilter, setModalSessionFilter] = useState("");

  // Sample Data
  const records = [
    { id: 1, name: "John Doe", session: "Morning", status: "Pending" },
    { id: 2, name: "Jane Smith", session: "Afternoon", status: "Completed" },
    { id: 3, name: "Mike Ross", session: "Evening", status: "Pending" },
    { id: 4, name: "Rachel Green", session: "Morning", status: "Completed" },
  ];

  // Filtered Data for Main Table
  const filteredMainRecords = records.filter(
    (record) =>
      record.name.toLowerCase().includes(mainSearch.toLowerCase()) &&
      (mainSessionFilter === "" || record.session === mainSessionFilter)
  );

  // Filtered Data for Modal Table
  const filteredModalRecords = records.filter(
    (record) =>
      record.name.toLowerCase().includes(modalSearch.toLowerCase()) &&
      (modalSessionFilter === "" || record.session === modalSessionFilter)
  );

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Train & Report Table</h4>

      {/* Filter Row for Main Table */}
      <Form className="mb-3 d-flex">
        <Form.Control
          type="text"
          placeholder="Search by name..."
          className="me-2"
          value={mainSearch}
          onChange={(e) => setMainSearch(e.target.value)}
        />
        <Form.Select
          className="me-2"
          value={mainSessionFilter}
          onChange={(e) => setMainSessionFilter(e.target.value)}
        >
          <option value="">All Sessions</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </Form.Select>
      </Form>

      {/* Main Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Session</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMainRecords.length > 0 ? (
            filteredMainRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.session}</td>
                <td>{record.status}</td>
                <td>
                  <Button variant="primary" className="me-2">
                    Train
                  </Button>
                  <Button variant="danger" onClick={() => setShowModal(true)}>
                    Report
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No matching records found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Report Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Report Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Filter Row for Modal Table */}
          <Form className="mb-3 d-flex">
            <Form.Control
              type="text"
              placeholder="Search by name..."
              className="me-2"
              value={modalSearch}
              onChange={(e) => setModalSearch(e.target.value)}
            />
            <Form.Select
              className="me-2"
              value={modalSessionFilter}
              onChange={(e) => setModalSessionFilter(e.target.value)}
            >
              <option value="">All Sessions</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </Form.Select>
          </Form>

          {/* Modal Table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Session</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredModalRecords.length > 0 ? (
                filteredModalRecords.map((record) => (
                  <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.name}</td>
                    <td>{record.session}</td>
                    <td>{record.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RowCardTable;
