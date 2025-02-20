import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import bcrypt from "bcryptjs"; // Import bcryptjs for password hashing
import { LoginForCoach } from "./Redux/Coach/CoachRegistration/CoachRegistrationAction";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Coach");
  const [error, setError] = useState(false);

  const status = useSelector((state) => state.CoachRegister.CoachRegisterDetails.status);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userId") {
      setUserId(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "role") {
      setRole(value);
    }
  };

  useEffect(() => {
    console.log(status, "status for login");
    if (status == 1) {
      router.push("/CoachMainPage");
    }
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Hash the password before sending it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(userId, password);

    const data = {
      userId: userId,
      password: password,
      role: role,
    };

    if(data.role == 'Coach')
    dispatch(LoginForCoach(data));
  };

  return (
    <>
      <style>
        {`
          .loginForm-container {
            display: flex;
            height: 100vh;
            background-image: url('/LoginBackgroundCricketImg.jpg');
            background-size: cover;
            background-position: center;
            align-items: center;
            justify-content: flex-end;
            padding-right: 10%;
          }

          .loginForm-box {
            width: 30%;
            height: 40%;
            min-width: 350px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 24px;
            border-radius: 8px;
            background-color: white;
          }

          .loginForm-title {
            color: black;
            text-align: center;
          }

          .loginForm-grid {
            display: grid;
            row-gap: 16px;
          }

          .loginForm-input {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid grey;
            border-radius: 4px;
            color: black;
            background-color: transparent;
          }

          .loginForm-error {
            color: red;
            margin-bottom: 16px;
            text-align: center;
          }

          .loginForm-links {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
          }

          .loginForm-link {
            color: #1976D2;
            text-decoration: none;
            font-weight: 500;
          }

          .loginForm-link:hover {
            color: #1259a7;
          }

          .loginForm-button {
            width: 100%;
            padding: 12px;
            background-color: #1976D2;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-Top:10%;
          }

          .loginForm-button:hover {
            background-color: #1259a7;
          }
        `}
      </style>

      <div className="loginForm-container">
        <div className="loginForm-box">
          <h2 className="loginForm-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="loginForm-grid">
              <div>
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  placeholder="User ID"
                  value={userId}
                  onChange={handleChange}
                  required
                  className="loginForm-input"
                />
              </div>

              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  required
                  className="loginForm-input"
                />
              </div>

              <div>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleChange}
                  required
                  className="loginForm-input"
                >
                  <option value="Coach">Coach</option>
                  <option value="Cricketer">Cricketer</option>
                </select>
              </div>

              {error && <div className="loginForm-error">Invalid ID or Password</div>}

              <div className="loginForm-links">
                <a href="/SignUpoptions" className="loginForm-link">
                  New User? Sign Up
                </a>
                <a href="/ForgotPassword" className="loginForm-link">
                  Forgot Password?
                </a>
              </div>

              <div>
                <button type="submit " className="loginForm-button">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
