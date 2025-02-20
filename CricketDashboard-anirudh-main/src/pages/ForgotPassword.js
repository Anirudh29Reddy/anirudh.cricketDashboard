import React, { useState } from "react";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNextStep = () => {
    if (step === 1 && userInput === "") {
      setError("User ID or Email is required!");
      return;
    } else if (step === 2 && otp.length !== 6) {
      setError("Enter a valid 6-digit OTP!");
      return;
    } else if (step === 3 && (newPassword === "" || confirmPassword === "")) {
      setError("All fields are required!");
      return;
    } else if (step === 3 && newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    setStep(step + 1);
  };

  const handleResetPassword = () => {
    setSuccess("Password reset successfully!");
    setTimeout(() => {
      setStep(1);
      setSuccess("");
      setUserInput("");
      setOtp("");
      setNewPassword("");
      setConfirmPassword("");
    }, 2000);
  };

  return (
    <div>
      <style>
        {`
          body {
            background-image: url('/stadiumBackGroundImage.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            font-family: Arial, sans-serif;
          }
          .forgotPassword-container {
            max-width: 400px;
            margin: 80px auto;
            padding: 24px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
          }
          .forgotPassword-title {
            text-align: center;
            color: black;
          }
          .forgotPassword-error, .forgotPassword-success {
            text-align: center;
          }
          .forgotPassword-error {
            color: red;
          }
          .forgotPassword-success {
            color: green;
          }
          .forgotPassword-input {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border-radius: 4px;
            border: 1px solid grey;
            background-color:transparent;
            color:black;
          }
          .forgotPassword-button {
            width: 100%;
            padding: 12px;
            background-color: #1976D2;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 16px;
          }
        `}
      </style>

      <div className="forgotPassword-container">
        <h2 className="forgotPassword-title">Forgot Password</h2>

        {error && <div className="forgotPassword-error">{error}</div>}
        {success && <div className="forgotPassword-success">{success}</div>}

        <form>
          {step === 1 && (
            <div>
              <label htmlFor="userInput">User ID or Email</label>
              <input
                id="userInput"
                type="text"
                className="forgotPassword-input"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                required
                placeholder="Enter User ID or Email"
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <label htmlFor="otp">Enter OTP</label>
              <input
                id="otp"
                type="text"
                maxLength="6"
                className="forgotPassword-input"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter 6-digit OTP"
                style={{ textAlign: "center" }}
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <label htmlFor="newPassword">New Password</label>
              <input
                id="newPassword"
                type="password"
                className="forgotPassword-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                placeholder="Enter new password"
              />

              <label htmlFor="confirmPassword" style={{ marginTop: "10px", display: "block" }}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="forgotPassword-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm new password"
              />
            </div>
          )}

          <div>
            {step < 3 ? (
              <button type="button" className="forgotPassword-button" onClick={handleNextStep}>
                {step === 1 ? "Send OTP" : "Verify OTP"}
              </button>
            ) : (
              <button type="button" className="forgotPassword-button" onClick={handleResetPassword}>
                Reset Password
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
