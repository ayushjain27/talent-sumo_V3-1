import React, { useState } from 'react';
import styles from './Create.module.css';

import { useNavigate } from 'react-router-dom';

import Quesans from '../Modal/QuesAns';


const Create = () => {

    const navigate = useNavigate();

    const [custom, setCustom] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [certificate, setCertificate] = useState(false);

    const handleCustom = () => {
        setCustom(!custom);
        setDisabled(!disabled);
    }

    const handleCertificate = () => {
        setCertificate(!certificate);
        setDisabled(!disabled);
    }

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/access');
    }

    return (
        <>
            <style jsx="true">
                {`
                    .button {
                        border-radius: 0;
                    }
                `}
            </style>
            <div className='container mt-5'>
                <div className='d-grid col-md-9 mx-auto'>
                    <div className='card border-dark'>
                        <h3 className={`${styles.cardHeader} card-header text-center mb-3 bg-dark text-white`}>
                            Create Interaction
                        </h3>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label htmlFor="detail" className="form-label fw-bold">Company/Institute Name*</label>
                                            <input type="text" className="form-control" placeholder='Enter company/institute name' id="companyName" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label htmlFor="job" className="form-label fw-bold">Job Title / Course Title*</label>
                                            <input type="text" className="form-control" placeholder='Enter Job role' id="job" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label htmlFor="positionCode" className="form-label fw-bold">Test ID</label>
                                            <input type="number" className="form-control" placeholder='Enter 6-digit code' id="positionCode" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="track" className="form-label fw-bold">Track/Domain :</label>
                                            <select className="form-select" id='track' aria-label="Default select example">
                                                <option selected value="Select">Select...</option>
                                                <option value="Custom-A">Custom-A</option>
                                                <option value="Custom-B">Custom-B</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Service">Service</option>
                                                <option value="HR">HR</option>
                                                <option value="New Grad.">New Grad.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="mode" className="form-label fw-bold">Interaction Mode</label>
                                            <select className="form-select" id='mode' aria-label="Default select example">
                                                <option selected value="Select">Select...</option>
                                                <option value="Audio">Audio</option>
                                                <option value="Video">Video</option>
                                                <option value="Mcq">Mcq</option>
                                                <option value="Upload">Upload</option>
                                                <option value="Type">Type</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className='mb-3'>
                                            <label className="form-label fw-bold">Report Type</label>
                                            <div className="form-check">
                                                <input disabled={custom ? false : true} onClick={handleCustom} className="form-check-input" type="radio" name="reportType" id="trackBased" defaultChecked />
                                                <label className="form-check-label" htmlFor="trackBased">
                                                    Track Based
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input disabled={custom ? true : false} onClick={handleCustom} className="form-check-input" type="radio" name="reportType" id="custom" />
                                                <label className="form-check-label" htmlFor="custom">
                                                    Custom
                                                </label>
                                                {
                                                    custom &&
                                                    <input type="text" className="form-control mt-2 mb-3" id="custom" placeholder='Custom' aria-describedby="customHelp" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='mb-3'>
                                            <label className="form-label fw-bold">Generate Certificate</label>
                                            <div className="form-check">
                                                <input disabled={certificate ? false : true} onClick={handleCertificate} className="form-check-input" type="radio" name="generateCertificate" id="no" defaultChecked />
                                                <label className="form-check-label" htmlFor="no">
                                                    No
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input disabled={certificate ? true : false} onClick={handleCertificate} className="form-check-input" type="radio" name="generateCertificate" id="yes" />
                                                <label className="form-check-label" htmlFor="yes">
                                                    Yes
                                                </label>
                                                {
                                                    certificate &&
                                                    <input type="text" className="form-control mt-2 mb-3" id="certificate" placeholder='Certificate Name' />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label fw-bold">Instruction</label>
                                            <input type="text" className="form-control" placeholder='Your instruction' id="instruction" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label fw-bold">Description</label>
                                            <input type="text" className="form-control" placeholder='Your description' id="description" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <label htmlFor="question" className="form-label fw-bold">Skills: <span className='badge badge bg-secondary'>skill name</span></label>
                                    <button type="button" className="btn btn-outline-secondary button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <label htmlFor="question" className="form-label fw-bold">Total Question: <span className='badge badge bg-secondary'>No.</span></label>
                                    <button type="button" className="btn btn-outline-secondary button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                                </div>
                            </form>
                            <hr />
                            <div className="d-grid col-3 ms-auto">
                                <button onClick={handleClick} type="submit" className="btn btn-dark button">Save and Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Quesans />
        </>
    )
}

export default Create;