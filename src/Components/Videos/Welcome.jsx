import React from "react";
import styles from './Welcome.module.css';
import { useNavigate } from "react-router-dom";

import welcome from "../../assets/Images/welcome.svg"

const Welcome = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/work')
  }

  return (
    <>
      <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row">
          <div className={`${styles.left} col-md-4`}>
            <img className="img-fluid m-auto" src={welcome} alt="welcome" />
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h3>Welcome!</h3>
              <p>Cognizant has invited you to submit a video interview for the following job opening:</p>
              <h5>Role</h5>
              <p>This service is designed to record your video interview <span className="text-danger">at a time and place convenient to you.</span></p>
              <button onClick={handleNext} className="btn btn-dark float-end my-3">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
