import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { playerRegister } from './Redux/Cricketer/CricketerAuthAction';

const MultiStepCricketerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    
    // Cricket Profile
    battingStyle: '',
    bowlingStyle: '',
    role: '',
    preferredPosition: '',
    height: '',
    weight: '',
    currentTeam: '',
    
    // Physical Stats
    profileImage: '',
    
    // Account Information
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const dispatch = useDispatch();
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      profileImage: file ? file.name : ''
    }));
  };
  
  // Validate current step
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      // Validate Personal Information
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    }
    
    else if (step === 2) {
      // Validate Cricket Profile
      if (!formData.role) newErrors.role = 'Role is required';
      
      if (!formData.height) {
        newErrors.height = 'Height is required';
      } else if (isNaN(formData.height) || formData.height <= 0) {
        newErrors.height = 'Please enter a valid height in meters';
      }
      
      if (!formData.weight) {
        newErrors.weight = 'Weight is required';
      } else if (isNaN(formData.weight) || formData.weight <= 0) {
        newErrors.weight = 'Please enter a valid weight in kilograms';
      }
    }
    
    else if (step === 4) {
      // Validate Account Information
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    return newErrors;
  };
  
  // Navigate to next step
  const nextStep = () => {
    const errors = validateStep(currentStep);
    
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setProgress(nextStep * 25);
    setErrors({});
  };
  
  // Navigate to previous step
  const prevStep = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    setProgress(prevStep * 25);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateStep(currentStep);
    
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Convert form data to match database enum values
    const formattedData = {
      ...formData,
      // Gender should be one of: 'Male', 'Female', 'Other'
      // (already matches enum format)
      
      // Convert batting style to match enum
      battingStyle: formData.battingStyle === 'Right_Handed' ? 'Right-hand' : 
                    formData.battingStyle === 'Left_Handed' ? 'Left-hand' : 
                    formData.battingStyle,
      
      // Convert bowling style to match enum
      bowlingStyle: formData.bowlingStyle === 'Right_Arm_Fast' ? 'Right-arm fast' :
                   formData.bowlingStyle === 'Right_Arm_Medium' ? 'Right-arm medium' :
                   formData.bowlingStyle === 'Right_Arm_Spin' ? 'Off-spinner' :
                   formData.bowlingStyle === 'Left_Arm_Fast' ? 'Left-arm fast' :
                   formData.bowlingStyle === 'Left_Arm_Medium' ? 'Left-arm spinner' :
                   formData.bowlingStyle === 'Left_Arm_Spin' ? 'Leg-spinner' :
                   formData.bowlingStyle === '' ? 'None' :
                   formData.bowlingStyle,
      
      // Convert role to match enum
      role: formData.role === 'All_Rounder' ? 'All-rounder' :
            formData.role === 'Wicket_Keeper' ? 'Wicketkeeper' :
            formData.role
    };
    
    // Simulate API call
    setTimeout(() => {
      try {
        dispatch(playerRegister(formattedData));
        console.log('Form submitted successfully:', formattedData);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          dateOfBirth: '',
          gender: '',
          nationality: '',
          address: '',
          battingStyle: '',
          bowlingStyle: '',
          role: '',
          preferredPosition: '',
          profileImage: '',
          height: '',
          weight: '',
          currentTeam: '',
          password: '',
          confirmPassword: ''
        });
        
        setCurrentStep(1);
        setProgress(25);
        setErrors({});
        
        // Show success message after state updates
        alert('Cricketer registered successfully!');
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };
  
  // Render step 1: Personal Information
  const renderPersonalInfoStep = () => {
    return (
      <>
        <h4 className="card-title mb-4">Personal Information</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">First Name*</label>
            <input
              type="text"
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Last Name*</label>
            <input
              type="text"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email*</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number*</label>
            <input
              type="tel"
              className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="dateOfBirth" className="form-label">Date of Birth*</label>
            <input
              type="date"
              className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="gender" className="form-label">Gender*</label>
            <select
              className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="nationality" className="form-label">Nationality</label>
            <input
              type="text"
              className="form-control"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </div>
          
          <div className="col-12 mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </>
    );
  };
  
  // Render step 2: Cricket Profile
  const renderCricketProfileStep = () => {
    return (
      <>
        <h4 className="card-title mb-4">Cricket Profile</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="battingStyle" className="form-label">Batting Style</label>
            <select
              className="form-select"
              id="battingStyle"
              name="battingStyle"
              value={formData.battingStyle}
              onChange={handleChange}
            >
              <option value="">Select Batting Style</option>
              <option value="Right-hand">Right-hand</option>
              <option value="Left-hand">Left-hand</option>
            </select>
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="bowlingStyle" className="form-label">Bowling Style</label>
            <select
              className="form-select"
              id="bowlingStyle"
              name="bowlingStyle"
              value={formData.bowlingStyle}
              onChange={handleChange}
            >
              <option value="">Select Bowling Style</option>
              <option value="Right-arm fast">Right-arm fast</option>
              <option value="Right-arm medium">Right-arm medium</option>
              <option value="Off-spinner">Off-spinner</option>
              <option value="Left-arm fast">Left-arm fast</option>
              <option value="Left-arm spinner">Left-arm spinner</option>
              <option value="Leg-spinner">Leg-spinner</option>
              <option value="None">None</option>
            </select>
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="role" className="form-label">Role*</label>
            <select
              className={`form-select ${errors.role ? 'is-invalid' : ''}`}
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
            </select>
            {errors.role && <div className="invalid-feedback">{errors.role}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="preferredPosition" className="form-label">Preferred Position</label>
            <input
              type="text"
              className="form-control"
              id="preferredPosition"
              name="preferredPosition"
              value={formData.preferredPosition}
              onChange={handleChange}
              placeholder="e.g. Opening Batsman, First Change Bowler"
            />
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="height" className="form-label">Height (m)*</label>
            <input
              type="number"
              step="0.01"
              className={`form-control ${errors.height ? 'is-invalid' : ''}`}
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="e.g. 1.85"
            />
            {errors.height && <div className="invalid-feedback">{errors.height}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="weight" className="form-label">Weight (kg)*</label>
            <input
              type="number"
              step="0.1"
              className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="e.g. 75.5"
            />
            {errors.weight && <div className="invalid-feedback">{errors.weight}</div>}
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="currentTeam" className="form-label">Current Team</label>
            <input
              type="text"
              className="form-control"
              id="currentTeam"
              name="currentTeam"
              value={formData.currentTeam}
              onChange={handleChange}
            />
          </div>
        </div>
      </>
    );
  };
  
  // Render step 3: Physical Stats & Image
  const renderPhysicalStatsStep = () => {
    return (
      <>
        <h4 className="card-title mb-4">Profile Image</h4>
        <div className="row">
          <div className="col-12 mb-4">
            <label htmlFor="profileImage" className="form-label">Profile Image</label>
            <input
              type="file"
              className="form-control"
              id="profileImage"
              name="profileImage"
              onChange={handleImageChange}
              accept="image/*"
            />
            <div className="form-text">Upload a professional headshot. Maximum size: 2MB.</div>
          </div>
          
          {formData.profileImage && (
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <p className="card-text">Selected file: {formData.profileImage}</p>
                  {/* In a real app, you would show a preview of the image here */}
                  <div className="bg-light p-4 mb-3 rounded">
                    <i className="bi bi-image" style={{ fontSize: '3rem' }}></i>
                    <p>Image Preview Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  };
  
  // Render step 4: Account Information
  const renderAccountInfoStep = () => {
    return (
      <>
        <h4 className="card-title mb-4">Account Information</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="password" className="form-label">Password*</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            <div className="form-text">Password must be at least 8 characters long.</div>
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Registration Summary</h5>
                <div className="row">
                  <div className="col-md-6">
                    <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Contact:</strong> {formData.email}</p>
                    <p><strong>Role:</strong> {formData.role || 'Not specified'}</p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Batting:</strong> {formData.battingStyle || 'Not specified'}</p>
                    <p><strong>Bowling:</strong> {formData.bowlingStyle || 'Not specified'}</p>
                    <p><strong>Current Team:</strong> {formData.currentTeam || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInfoStep();
      case 2:
        return renderCricketProfileStep();
      case 3:
        return renderPhysicalStatsStep();
      case 4:
        return renderAccountInfoStep();
      default:
        return null;
    }
  };
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0 text-center">Cricketer Registration</h2>
            </div>
            
            <div className="card-body">
              {/* Progress bar */}
              <div className="mb-4">
                <div className="progress" style={{ height: '20px' }}>
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar" 
                    style={{ width: `${progress}%` }} 
                    aria-valuenow={progress} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  >
                    Step {currentStep} of 4
                  </div>
                </div>
                
                <div className="d-flex justify-content-between mt-2">
                  <span className={currentStep >= 1 ? 'text-success' : ''}>Personal Info</span>
                  <span className={currentStep >= 2 ? 'text-success' : ''}>Cricket Profile</span>
                  <span className={currentStep >= 3 ? 'text-success' : ''}>Profile Image</span>
                  <span className={currentStep >= 4 ? 'text-success' : ''}>Account</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {renderStep()}
                
                <div className="d-flex justify-content-between mt-4">
                  {currentStep > 1 ? (
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      onClick={prevStep}
                    >
                      <i className="bi bi-arrow-left me-1"></i> Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < 4 ? (
                    <button 
                      type="button" 
                      className="btn btn-primary" 
                      onClick={nextStep}
                    >
                      Next <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      className="btn btn-success" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-check-circle me-1"></i> Complete Registration
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepCricketerForm;