import React from 'react';
import styles from './Confirm.module.css';
import { useNavigate } from "react-router-dom";

import confuse from "../../assets/Images/confuse.png"

const Confirm = () => {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/start')
    }

    const handleDevice = () => {
        navigate('/recording')
    }

    const handleTrouble = () => {
        navigate('/trouble')
    }

    const handleReRecord = () => {
        navigate('/recording')
    }

    return (
        <>
            <div className={`${styles.container} container mt-5 mb-5`}>
                <div className="row">
                    <div className={`${styles.left} col-md-4`}>
                        <img className='img-fluid m-auto' src={confuse} alt="confused" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h3>Was the recording successful?</h3>
                            <p align="justify">
                                Do you see and hear yourself ? When recording for the first time on some devices,
                                there may be problems with video or sound, in which case, repeat the recording.
                            </p>
                            <div className='d-flex justify-content-center mx-auto gap-2 my-3'>
                                <button onClick={handleTrouble} className='btn btn-outline-secondary'>Having Trouble</button>
                                <button onClick={handleReRecord} className='btn btn-dark'>Re-record</button>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <div onClick={handleDevice} style={{ cursor: "pointer", color: "#97a39b" }} className='fw-bold text-decoration-underline'>&#60; STEP 1: Let's check your device</div>
                                <button onClick={handleNext} type="button" className="btn btn-success" style={{ backgroundColor: "#97a39b", border: "#97a39b" }}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Confirm;