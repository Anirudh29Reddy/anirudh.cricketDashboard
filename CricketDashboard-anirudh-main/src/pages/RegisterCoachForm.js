import React, { useState } from "react";
import Headers from "@/Components/HomeComponents/Headers";

const RegisterCoachForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    experience: "",
    role: "",
    specialization: "",
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
    setError("");

    if (Object.values(formData).some((value) => value === "")) {
      setError("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Coach Registered:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      experience: "",
      role: "",
      specialization: "",
      phoneNumber: "",
      teamName: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <Headers />
      <div className="coachRegister-container coachFormMargin" >
        <h2>Register as Coach</h2>
        <form onSubmit={handleSubmit}>
          <div className="coachRegister-form">

            {/* First Name and Last Name */}
            <div className="row">
              <div className="col">
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
              </div>
              <div className="col">
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
              </div>
            </div>

            {/* Experience and Role Dropdown */}
            <div className="row">
              <div className="col">
                <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required />
              </div>
              <div className="col">
                <select name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Select Role</option>
                  <option value="bowler">Bowler</option>
                  <option value="batsman">Batsman</option>
                  <option value="all-rounder">All-Rounder</option>
                  <option value="coach">Coach</option>
                </select>
              </div>
            </div>

            {/* Phone Number and Email */}
            <div className="row">
              <div className="col">
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
              </div>
              <div className="col">
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              </div>
            </div>

            {/* Specialization Dropdown and Team Name */}
            <div className="row">
              <div className="col">
                <select name="specialization" value={formData.specialization} onChange={handleChange} required>
                  <option value="">Select Specialization</option>
                  <option value="left-hand">Left Hand</option>
                  <option value="right-hand">Right Hand</option>
                  <option value="all-rounder">All-Rounder</option>
                </select>
              </div>
              <div className="col">
                <input type="text" name="teamName" placeholder="Team Name" onChange={handleChange} required />
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="row">
              <div className="col">
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              </div>
              <div className="col">
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="coachRegister-error">{error}</p>}

            {/* Submit Button */}
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterCoachForm;
