import React from 'react';
import styles from './Mcq.module.css';
import { useNavigate } from 'react-router-dom';

import mcq from '../../assets/Images/mcq.png'

const Mcq = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={`${styles.container} container my-5`}>
                <div className="row">
                    <div className='col-md-4 bg-dark'>
                        <img className='d-flex justify-content-center mx-auto img-fluid m-auto p-3' width={300} src={mcq} alt="mcq" />
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="container my-3">
                            <h4>Question ?</h4>
                            <hr />
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="option1" />
                                <label className="form-check-label" htmlFor="option1">
                                    Option 1
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="option2" />
                                <label className="form-check-label" htmlFor="option2">
                                    Option 2
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="option3" />
                                <label className="form-check-label" htmlFor="option3">
                                    Option 3
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="option4" />
                                <label className="form-check-label" htmlFor="option4">
                                    Option 4
                                </label>
                            </div>
                            <hr />
                            <button onClick={() => navigate("/imageUpload")} className="btn btn-dark float-end mb-3">Save and Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mcq;