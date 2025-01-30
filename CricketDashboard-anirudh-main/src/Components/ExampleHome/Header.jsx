import React, { useState } from "react";

const Header = () => {

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#8B0000" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Cricket Dashboard</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Register
              </button>
              <button
                className="btn btn-light text-dark"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
  
      {/* Register Modal */}
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">Register</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Choose an option to register:</p>
              <div className="d-flex flex-column gap-2">
                <button
                  className="btn btn-warning text-dark"
                  onClick={() => (window.location.href = "/register/coach")}
                >
                  Register as Coach
                </button>
                <button
                  className="btn btn-warning text-dark"
                  onClick={() => (window.location.href = "/register/cricketer")}
                >
                  Register as Cricketer
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
  
      {/* Login Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Choose an option to login:</p>
              <div className="d-flex flex-column gap-2">
                <button
                  className="btn btn-warning text-dark"
                  onClick={() => (window.location.href = "/login/coach")}
                >
                  Login as Coach
                </button>
                <button
                  className="btn btn-warning text-dark"
                  onClick={() => (window.location.href = "/login/cricketer")}
                >
                  Login as Cricketer
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Header;
