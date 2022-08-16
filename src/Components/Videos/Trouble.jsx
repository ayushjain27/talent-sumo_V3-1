import React from 'react'
import styles from './Trouble.module.css';
import { useNavigate } from "react-router-dom";

import trouble from "../../assets/Images/trouble.svg"

const Trouble = () => {

    const navigate = useNavigate();

    const handleDevice = () => {
        navigate('/recording')
    }

    return (
        <>
            <div className={`${styles.container} container mt-5 mb-5`}>
                <div className="row">
                    <div className={`${styles.left} col-md-4`}>
                        <img className='img-fluid m-auto' src={trouble} alt="trouble" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h3 className='mb-3'>Having trouble with recording ?</h3>
                            <ul>
                                <p>
                                    <li>Check the quality of your Internet connection, if you are using proxy servers - turn them off</li>
                                </p>
                                <p>
                                    <li>Close applications that may affect the quality of data transfer (online video and audio services, etc.)</li>
                                </p>
                                <p>
                                    <li>When using a cell phone or tablet - close all other applications except the browser</li>
                                </p>
                                <p>
                                    <li>If you don't hear the sound of the recorded video, check that the sound on your device is turned on</li>
                                </p>
                                <p>
                                    <li>Try to close all browser tabs (including the current one) and then click on the interview link again</li>
                                </p>
                            </ul>
                            <div onClick={handleDevice} style={{ cursor: "pointer", color: "#97a39b" }} className='fw-bold text-decoration-underline my-5'>&#60; STEP 1: Let's check your device</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trouble;