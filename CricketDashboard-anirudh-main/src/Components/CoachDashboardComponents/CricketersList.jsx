import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Form, Spinner } from "react-bootstrap";

const RowCardTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [mainSearch, setMainSearch] = useState("");
  const [modalSearch, setModalSearch] = useState("");
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getAssignedCricketers");
        const result = await response.json();

        console.log("API Response:", result); 

        if (Array.isArray(result)) {
          setData(result); // Ensure only arrays are set
        } else {
          console.error("API did not return an array:", result);
          setData([]); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  
  if (loading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" variant="primary" />
        <p>Loading data...</p>
      </div>
    );
  }

  
  const filteredMainRecords = Array.isArray(data)
    ? data.filter(
        (record) =>
          record?.cricketer_firstname &&
          record?.cricketer_lastname &&
          `${record.cricketer_firstname} ${record.cricketer_lastname}`
            .toLowerCase()
            .includes(mainSearch.toLowerCase())
      )
    : [];

  const filteredModalRecords = Array.isArray(data)
    ? data.filter(
        (record) =>
          record?.cricketer_firstname &&
          record?.cricketer_lastname &&
          `${record.cricketer_firstname} ${record.cricketer_lastname}`
            .toLowerCase()
            .includes(modalSearch.toLowerCase())
      )
    : [];

  
  const handleTrainClick = async (id) => {
    try {
      const response = await fetch(`/api/TrainPlayer?id=${id}&is_active=true`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_active: true }),
      });

      if (response.ok) {
        setData((prevData) =>
          prevData.map((record) =>
            record.id === id ? { ...record, is_active: true } : record
          )
        );
      } else {
        console.error("Failed to update the cricketer's status.");
      }
    } catch (error) {
      console.error("Error updating cricketer's status:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Train Table</h4>

      {/* Search Box */}
      <Form className="mb-3 d-flex">
        <Form.Control
          type="text"
          placeholder="Search by cricketer's name..."
          className="me-2"
          value={mainSearch}
          onChange={(e) => setMainSearch(e.target.value)}
        />
      </Form>

      {/* Main Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Cricketer Name</th>
            <th>Assigned Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMainRecords.length > 0 ? (
            filteredMainRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{`${record.cricketer_firstname} ${record.cricketer_lastname}`}</td>
                <td>{new Date(record.assigned_date).toLocaleString()}</td>
                <td>
                  {!record.is_active && (
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() => handleTrainClick(record.id)}
                    >
                      Train
                    </Button>
                  )}
                </td>
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

      {/* Report Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Report Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Search Box */}
          <Form className="mb-3 d-flex">
            <Form.Control
              type="text"
              placeholder="Search by cricketer's name..."
              className="me-2"
              value={modalSearch}
              onChange={(e) => setModalSearch(e.target.value)}
            />
          </Form>

          {/* Modal Table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Cricketer Name</th>
                <th>Assigned Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredModalRecords.length > 0 ? (
                filteredModalRecords.map((record) => (
                  <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{`${record.cricketer_firstname} ${record.cricketer_lastname}`}</td>
                    <td>{new Date(record.assigned_date).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
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
