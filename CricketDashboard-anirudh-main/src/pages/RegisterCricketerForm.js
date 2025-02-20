import React, { useState } from "react";

// import Headers from "@/Components/HomeComponents/Headers";

const RegisterCricketerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    role: "",
    email: "",
    phoneNumber: "",
    teamName: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    console.log("Cricketer Registered:", formData);
    // Add further actions such as API calls here
  };

  return (
    <>
      {/* <Headers /> */}
      <div className="cricketer-register-container CricketFormMargin">
        <h2>Register as a Cricketer</h2>
        <form onSubmit={handleSubmit}>
          <div className="cricketer-register-form">
            <div className="cricketer-register-row">
              <div className="cricketer-register-col-6">
                <label htmlFor="firstName" className="cricketer-register-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="cricketer-register-input"
                  required
                />
              </div>
              <div className="cricketer-register-col-6">
                <label htmlFor="lastName" className="cricketer-register-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="cricketer-register-input"
                  required
                />
              </div>
            </div>

            <div className="cricketer-register-row">
              <div className="cricketer-register-col-6">
                <label htmlFor="age" className="cricketer-register-label">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="cricketer-register-input"
                  required
                />
              </div>
              <div className="cricketer-register-col-6">
                <label htmlFor="role" className="cricketer-register-label">Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="cricketer-register-select"
                  required
                >
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="All Rounder">All Rounder</option>
                </select>
              </div>
            </div>

            <div className="cricketer-register-row">
              <div className="cricketer-register-col-6">
                <label htmlFor="email" className="cricketer-register-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="cricketer-register-input"
                  required
                />
              </div>
              <div className="cricketer-register-col-6">
                <label htmlFor="phoneNumber" className="cricketer-register-label">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="cricketer-register-input"
                  required
                />
              </div>
            </div>

            <div className="cricketer-register-row">
              <div className="cricketer-register-col-6">
                <label htmlFor="teamName" className="cricketer-register-label">Team Name</label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="cricketer-register-input"
                  required
                />
              </div>
            </div>

            <div className="cricketer-register-row">
              <div className="cricketer-register-col-6">
                <label htmlFor="password" className="cricketer-register-label">Create Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="cricketer-register-input"
                  required
                />
              </div>
              <div className="cricketer-register-col-6">
                <label htmlFor="confirmPassword" className="cricketer-register-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="cricketer-register-input"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="cricketer-register-error-message">
                {error}
              </div>
            )}

            <button type="submit" className="cricketer-register-submit-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterCricketerForm;
