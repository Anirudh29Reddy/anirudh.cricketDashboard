import { useState } from "react";

const MatchDataUpload = () => {
  const [playerType, setPlayerType] = useState("batsman");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = {
    batsman: ["Runs Scored", "Balls Faced", "Strike Rate", "Fours", "Sixes"],
    bowler: ["Overs Bowled", "Runs Conceded", "Wickets Taken", "Economy Rate", "Maidens"],
    allrounder: [
      "Runs Scored",
      "Balls Faced",
      "Wickets Taken",
      "Overs Bowled",
      "Economy Rate",
      "Strike Rate",
    ],
  };

  return (
    <>
      <style>
        {`
          .match-data-container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
          }
          .title {
            text-align: center;
            font-size: 20px;
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
          }
          .input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #aaa;
            border-radius: 5px;
            background-color:transparent;
            font-size: 14px;
            color:#000;
          }
          .row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .col-6 {
            flex: 1 1 45%;
          }
          .submit-button {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .submit-button:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="match-data-container">
        <h2 className="title">Match Data Upload</h2>
        <label className="label">Select Player Type:</label>
        <select
          value={playerType}
          onChange={(e) => setPlayerType(e.target.value)}
          className="input"
        >
          <option value="batsman">Batsman</option>
          <option value="bowler">Bowler</option>
          <option value="allrounder">All-Rounder</option>
        </select>

        <div className="row">
          {fields[playerType].map((field, index) => (
            <div key={field} className="col-6">
              <label className="label">{field}:</label>
              <input
                type="text"
                name={field.toLowerCase().replace(/\s+/g, "_")}
                onChange={handleChange}
                className="input"
              />
            </div>
          ))}
        </div>

        <button className="submit-button">Submit</button>
      </div>
    </>
  );
};

export default MatchDataUpload;
