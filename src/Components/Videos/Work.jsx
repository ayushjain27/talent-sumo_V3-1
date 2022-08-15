import React from 'react';
import styles from './Work.module.css';
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/recording')
  }
  const handleWelcome = () => {
    navigate('/welcome')
  }
  return (
    <>
      <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4" style={{ backgroundColor: 'red' }}></div>
          <div className="col-md-8">
            <div className="container my-3">
              <h3>How it works?</h3>
              <p>It's really easy. Questions have been prepared for you in advance, and you are simply required to record your answers to them using the camera and microphone of your computer, tablet, or phone.</p>
              <p>Don't worry if something goes wrong during the recording, these things happen. The good news is you can always completely start afresh using the original link provided, but please bear in mind, that Cognizant will receive all of the recordings you submit.</p>
              <div className='d-flex justify-content-between my-3'>
                <div onClick={handleWelcome} style={{ cursor: "pointer" }} className='fw-bold text-decoration-underline'>&#60; Welcome</div>
                <button onClick={handleNext} className="btn btn-dark float-end">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
