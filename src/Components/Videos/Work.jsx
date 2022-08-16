import React from 'react';
import styles from './Work.module.css';
import { useNavigate } from "react-router-dom";

import work from "../../assets/Images/how-it-works.svg"

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
      <div className={`${styles.container} container my-5`}>
        <div className="row h-100">
          <div className={`${styles.left} col-md-4`}>
            <img className='img-fluid m-auto' src={work} alt="work" />
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h3 className='mb-3'>How it works?</h3>
              <p align="justify"><span className='text-dark fw-bold'>It's really easy.</span> Questions have been prepared for you <span className='text-dark fw-bold'>in advance,</span> and you are simply required to record your answers to them <span className='text-dark fw-bold'>using the camera and microphone</span>  of your computer, tablet, or phone.</p>
              <p align="justify">Don't worry if something goes wrong during the recording, <span className='text-dark fw-bold'>these things happen.</span> The good news is you can always completely start afresh using the original link provided, but please bear in mind, that Cognizant will receive all of the recordings you submit.</p>
              <div className='d-flex justify-content-between my-3'>
                <div onClick={handleWelcome} style={{ cursor: "pointer", color: "#97a39b" }} className='fw-bold text-decoration-underline'>&#60; Welcome</div>
                <button onClick={handleNext} className="btn btn-dark" style={{ backgroundColor: "#97a39b", border: "#97a39b" }}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
