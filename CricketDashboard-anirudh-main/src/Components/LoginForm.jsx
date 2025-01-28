import React, { useState } from 'react';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'userId') {
      setUserId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Example validation (Replace with your actual validation logic)
    if (userId === 'test' && password === 'password') {
      setError(false);
      alert('Login successful');
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '24px',
        borderRadius: '8px',
        backgroundColor: 'white',
        marginTop: '56px',
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', rowGap: '16px' }}>
          {/* User ID */}
          <div>
            <label htmlFor="userId">User ID</label>
            <input
              id="userId"
              name="userId"
              type="text"
              value={userId}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '4px',
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
              value={password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '4px',
              }}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div
              id="errorMessage"
              style={{ color: 'red', marginBottom: '16px' }}
            >
              Invalid ID or Password
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#1976D2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;