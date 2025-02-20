import React from "react";
import { useRouter } from "next/router";

const SignUpOptions = () => {
  const router = useRouter();

  return (
    <>
      <style>
        {`
          .signupOptions-container {
            display: flex;
            height: 100vh;
            align-items: center;
            justify-content: center;
            background-image: url('/stadiumBackGroundImage.jpg');
            background-size: cover;
            background-position: center;
          }

          .signupOptions-box {
            width: 350px;
            padding: 24px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .signupOptions-title {
            color: black;
            font-size: 24px;
            margin-bottom: 20px;
          }

          .signupOptions-button {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
          }

          .signupOptions-button-coach {
            background-color: #FF9800;
            color: white;
          }

          .signupOptions-button-coach:hover {
            background-color: #e68900;
          }

          .signupOptions-button-player {
            background-color: #4CAF50;
            color: white;
          }

          .signupOptions-button-player:hover {
            background-color: #3d8b40;
          }

          .signupOptions-link {
            display: block;
            margin-top: 15px;
            color: #1976D2;
            text-decoration: none;
            font-weight: 500;
          }

          .signupOptions-link:hover {
            color: #1259a7;
          }
        `}
      </style>

      <div className="signupOptions-container">
        <div className="signupOptions-box">
          <h2 className="signupOptions-title">Register As</h2>

          <button
            className="signupOptions-button signupOptions-button-coach"
            onClick={() => router.push("/RegisterCoachForm")}
          >
            Register as Coach
          </button>

          <button
            className="signupOptions-button signupOptions-button-player"
            onClick={() => router.push("/RegisterCricketerForm")}
          >
            Register as Cricket Player
          </button>

          <a href="/LoginForm" className="signupOptions-link">
            Have an account? Login
          </a>
        </div>
      </div>
    </>
  );
};

export default SignUpOptions;
