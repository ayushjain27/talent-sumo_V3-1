import React from 'react';
import styles from './Start.module.css';
import { useNavigate } from "react-router-dom";

import start from "../../assets/Images/start.svg"

const Start = () => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/question')
  }

  const handleDevice = () => {
    navigate('/recording')
  }

  return (
    <>
      <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row">
          <div className={`${styles.left} col-md-4`}>
            <img className='img-fluid m-auto' src={start} alt="start" />
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h3>Ready to get started?</h3>
              <p align="justify">Great, everything is ready for you to record your video interview.</p>
              <p align="justify">After clicking the "Start Interview" button below, the camera and microphone will turn on & you’ll see questions throughout the interview that you’ll need to answer.</p>
              <p align="justify" className="text-danger">Please note, you may need to grant permission on your device again to use your camera and microphone.</p>
              <h5>Best of Luck!</h5>
              <div className='d-flex justify-content-between my-3'>
                <div onClick={handleDevice} style={{ cursor: "pointer", color: "#97a39b" }} className='fw-bold text-decoration-underline'>&#60; STEP 1: Let's check your device</div>
                <button onClick={handleNext} type="button" className="btn btn-success" style={{ backgroundColor: "#97a39b", border: "#97a39b" }}>Start Interview</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
