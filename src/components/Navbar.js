import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">SecPen Labs</a>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cybersecurity">Cybersecurity</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
