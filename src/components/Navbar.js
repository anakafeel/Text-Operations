import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ mode = "light", toggleMode = () => {} }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.1 , transition: { duration: 0.2 }}}

            transition={{ type: "spring", delay: 0.5, duration: 1.4 }}
          >
            <Link className="navbar-brand" to="/">
              Text Operations
            </Link>
          </motion.div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <motion.li
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.5, duration: 1.4 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}

                className="nav-item"
              >
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.7, duration: 1.4 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="nav-item"
              >
                <Link className="nav-link mx-2" to="/about">
                  About
                </Link>
              </motion.li>
            </ul>
            <div
              className={`form-check form-switch text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              {
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={toggleMode}
                />
              }
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
