import React, { useState } from "react";
import { TextField, Button, Box, MenuItem, Select, InputLabel, FormControl, Grid } from "@mui/material";
import Header from "./Header";



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
    setError(""); // Clear any previous error

    // Check for empty fields
    for (const key in formData) {
      if (formData[key] === "") {
        setError(`${key.charAt(0).toUpperCase() + key.slice(1)} is required.`);
        return;
      }
    }

    // Password and confirm password validation
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
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "24px",
        borderRadius: "8px",
        backgroundColor: "white",
        marginTop: "56px",
      }}
    >
      <h2>Register as Coach</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", rowGap: "16px" }}>
          {/* First Name */}
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Experience */}
          <div>
            <label htmlFor="experience">Experience</label>
            <input
              id="experience"
              name="experience"
              type="text"
              value={formData.experience}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role">Role</label>
            <input
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Specialization */}
          <div>
            <label htmlFor="specialization">Specialization</label>
            <input
              id="specialization"
              name="specialization"
              type="text"
              value={formData.specialization}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Team Name */}
          <div>
            <label htmlFor="teamName">Team Name</label>
            <input
              id="teamName"
              name="teamName"
              type="text"
              value={formData.teamName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
              }}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div
              id="errorMessage"
              style={{ color: "red", marginBottom: "16px" }}
            >
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#1976D2",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterCoachForm;