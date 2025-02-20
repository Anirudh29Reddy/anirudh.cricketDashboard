import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { CoachRegister } from "./Redux/Coach/CoachRegistration/CoachRegistrationAction";
import { useRouter } from "next/router";

const RegisterCoachForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    address: "",
    coachingExperience: "",
    qualifications: "",
    specialization: "",
    status: "Active",
    profileImage: null,
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(0);
  const status = useSelector((state) => state.CoachRegister.CoachRegisterInfo.status);
  const router = useRouter();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (status === 200) {
  //     router.push("/LoginForm");
  //   }
  //   console.log("status", status);
  // }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (Object.values(formData).some((value) => value === "" || value === null)) {
      setError("All fields are required!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Coach Registered:", formData);
    dispatch(CoachRegister(formData));
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center">Register as Coach</h4>
      <form onSubmit={handleSubmit} className="p-3 border rounded shadow bg-light">
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">First Name</label>
            <input type="text" name="firstName" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Last Name</label>
            <input type="text" name="lastName" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Phone Number</label>
            <input type="text" name="phoneNumber" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dateOfBirth" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select form-select-sm" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">Nationality</label>
            <input type="text" name="nationality" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Address</label>
            <textarea name="address" className="form-control form-control-sm" onChange={handleChange} required></textarea>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">Coaching Experience (Years)</label>
            <input type="number" name="coachingExperience" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Qualifications</label>
            <textarea name="qualifications" className="form-control form-control-sm" onChange={handleChange} required></textarea>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">Specialization</label>
            <select name="specialization" className="form-select form-select-sm" onChange={handleChange} required>
              <option value="">Select Specialization</option>
              <option value="Batting">Batting</option>
              <option value="Bowling">Bowling</option>
              <option value="Fielding">Fielding</option>
              <option value="Fitness">Fitness</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Status</label>
            <select name="status" className="form-select form-select-sm" onChange={handleChange} required>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="form-control form-control-sm" onChange={handleChange} required />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Image</label>
          <input type="file" name="profileImage" className="form-control form-control-sm" accept="image/*" onChange={handleFileChange} required />
        </div>

        {error && <p className="text-danger text-center">{error}</p>}

        <button type="submit" className="btn btn-primary btn-sm w-100">Register</button>
      </form>
    </div>
  );
};

export default RegisterCoachForm;
