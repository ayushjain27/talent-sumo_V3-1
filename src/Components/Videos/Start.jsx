import React from 'react';
import styles from './Start.module.css';
import { useNavigate } from "react-router-dom";

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
        <div className="row h-100">
          <div className="col-md-4" style={{ backgroundColor: 'red' }}></div>
          <div className="col-md-8 p-5 h-100">
            <h3 className='ms-3 me-3'>How it works?</h3>
            <div className="fs-5 mb-2 ms-3 me-3">Great, everything is ready for you to record your video interview.</div>
            <div className="fs-5 mb-3 ms-3 me-3">After clicking the "Start Interview" button below, the camera and microphone will turn on & you’ll see questions throughout the interview that you’ll need to answer.</div>
            <div className="fs-5 mb-3 ms-3 me-3">Please note, you may need to grant permission on your device again to use your camera and microphone.</div>
            <h4 className='mb-3 ms-3 me-3'>Best of Luck!</h4>
            <button onClick={handleNext} type="button" className="btn btn-success w-100 mt-3 fw-bold rounded-pill ms-3 me-3">Start Interview</button>
            <div onClick={handleDevice} className={`${styles.device} mt-3 mb-3 fw-bold text-underline`}>&#60;-- How it works ?</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
