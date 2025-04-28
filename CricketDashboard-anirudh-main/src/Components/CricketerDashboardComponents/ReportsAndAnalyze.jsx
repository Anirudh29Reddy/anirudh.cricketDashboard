import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const ReportsAndAnalyze = () => {
  const [reportData, setReportData] = useState([]);
  const [analyzeData, setAnalyzeData] = useState(null);
  const phone = useSelector((state) => state.cricketer.cricketerDetails?.phonenumber);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchId = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/GetIdByPlayerNumber?phonenumber=${phone}`);
        const data = await res.json();
        setId(data[0]?.cricketerid);
      } catch (error) {
        console.error("Error fetching player ID:", error);
      }
    };
    fetchId();
  }, [phone]);

  const fetchReports = async () => {
    try {
      const response = await fetch(`api/ReportGenerator?userId=${id}`);
      const data = await response.json();
      setReportData(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  const fetchAnalysis = async () => {
    try {
      const response = await fetch(`/api/assignCoach?userId=${id}`);
      const data = await response.json();
      setAnalyzeData(data);
    } catch (error) {
      console.error("Error fetching analysis:", error);
    }
  };
  console.log(analyzeData,"an");

  const handleAssign = async (cricketerId, coachId) => {
    const assignmentData = {
      cricketer_id: cricketerId,
      coach_id: coachId,
      assigned_date: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/saveAssignment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(assignmentData),
      });

      if (response.ok) {
        console.log("Assignment saved successfully");
      } else {
        console.error("Failed to save assignment");
      }
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Match Reports & Coach Analysis</h2>

      <div className="row mb-3">
        <div className="col-md-5 text-center">
          <button className="btn btn-success" onClick={fetchReports}>
            Fetch Reports
          </button>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5 text-center">
          <button className="btn btn-success" onClick={fetchAnalysis}>
            Analyse Coach
          </button>
        </div>
      </div>

      {/* No Data Message */}
      {reportData.length === 0 && !analyzeData && (
        <h4 className="text-center text-muted">No data available.</h4>
      )}

      {/* Display Performance Message */}
      {analyzeData?.message === "Excellent" && (
        <h4 className="text-center text-success">Your performance was top-notch, no need for a coach.</h4>
      )}

      {/* Match Reports Table */}
      {reportData.length > 0 && (
        <div className="table-responsive">
          <h3 className="text-center">Match Reports</h3>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Cricketer ID</th>
                <th>Match Type</th>
                <th>Match ID</th>
                <th>Ball No</th>
                <th>Outcome</th>
                <th>Runs</th>
                <th>Delivery Type</th>
                <th>Wicket</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index}>
                  <td>{item.cricketerid}</td>
                  <td>{item.matchtype}</td>
                  <td>{item.matchid}</td>
                  <td>{item.ballno}</td>
                  <td>{item.outcome}</td>
                  <td>{item.runs}</td>
                  <td>{item.deliverytype}</td>
                  <td>{item.wicket ? "✔️" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Coach Analysis Table */}
      {Array.isArray(analyzeData) && analyzeData.length > 0 && (
        <div className="table-responsive">
          <h3 className="text-center">Coach Analysis</h3>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Cricketer ID</th>
                <th>Player Name</th>
                <th>Role</th>
                <th>Match Type</th>
                <th>Balls Faced</th>
                <th>Total Runs</th>
                <th>Strike Rate</th>
                <th>Total Wickets</th>
                <th>Performance Rating</th>
                <th>Coach ID</th>
                <th>Coach Name</th>
                <th>Specialization</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {analyzeData.map((item, index) => (
                <tr key={index}>
                  <td>{item.cricketerid}</td>
                  <td>{item.player_name}</td>
                  <td>{item.player_role}</td>
                  <td>{item.matchtype}</td>
                  <td>{item.balls_faced}</td>
                  <td>{item.total_runs}</td>
                  <td>{item.strike_rate}</td>
                  <td>{item.total_wickets}</td>
                  <td>{item.performance_rating}</td>
                  <td>{item.coachid}</td>
                  <td>{item.coach_name}</td>
                  <td>{item.specialization}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleAssign(item.cricketerid, item.coachid)}>
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportsAndAnalyze;
