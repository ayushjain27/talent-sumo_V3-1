import React from 'react';
import styles from './Access.module.css';
import { useNavigate } from 'react-router-dom';

import { FaTelegram, FaWhatsapp, FaSlack, FaWpforms } from 'react-icons/fa';

const Access = () => {

    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create');
    }

    const handleSave = (e) => {
        e.preventDefault();
        navigate('/notification&message');
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
            <div className='container mt-5 mb-4'>
                <div className='d-grid col-md-9 mx-auto'>
                    <div className='card border-dark'>
                        <h3 className={`${styles.cardHeader} text-center text-white mb-4 card-header bg-dark`}>Access Details</h3>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="accessCode" className="form-label fw-bold">Access Code</label>
                                            <input type="number" className="form-control" placeholder='Enter 6-digit access code' id="accessCode" aria-describedby="accessHelp" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="expiryDate" className="form-label fw-bold">Expiry Date</label>
                                            <input type="date" className="form-control" id="expiryDate" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="phoneNo" className="form-label  fw-bold">Phone Number List</label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div>
                                <button className='btn btn-outline-dark button mb-3 me-2'>View List</button>
                                <button className='btn btn-dark button mb-3'>Upload</button>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="whoInitiate" className="form-label fw-bold">Who can Initiate ?</label>
                                            <select className="form-select" id='whoInitiate'>
                                                <option value="Select">Select...</option>
                                                <option value="Bot">Bot</option>
                                                <option value="User">User</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="whoInitiate" className="form-label fw-bold">Timer</label>
                                            <select className="form-select" id='whoInitiate' aria-label="Default select example">
                                                <option value="Select">Select...</option>
                                                <option value="15 minutes">15 minutes</option>
                                                <option value="20 minutes">20 minutes</option>
                                                <option value="30 minutes">30 minutes</option>
                                                <option value="45 minutes">45 minutes</option>
                                                <option value="60 minutes">60 minutes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className='mb-3'>
                                            <label htmlFor="email" className="form-label fw-bold">Collect Email</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="collectEmail" id="yes" />
                                                <label className="form-check-label" htmlFor="yes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="collectEmail" id="no" defaultChecked />
                                                <label className="form-check-label" htmlFor="no">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='mb-3'>
                                            <label htmlFor="collectResume" className="form-label fw-bold">Collect Resume</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="CollectResume" id="yesResume" />
                                                <label className="form-check-label" htmlFor="yesResume">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="CollectResume" id="noResume" defaultChecked />
                                                <label className="form-check-label" htmlFor="noResume">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='mb-3'>
                                            <label htmlFor="feedbackMessage" className="form-label fw-bold">Candidate Feedback Message</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="CandidateFeedback" id="yesFeedbackMessage" />
                                                <label className="form-check-label" htmlFor="yesFeedbackMessage">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="CandidateFeedback" id="noFeedbackMessage" defaultChecked />
                                                <label className="form-check-label" htmlFor="noFeedbackMessage">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label htmlFor="channel" className="form-label fw-bold">Channel</label>
                                            <div className="form-check">
                                                <input disabled className="form-check-input" type="checkbox" id="telegram" />
                                                <label className="form-check-label" htmlFor="telegram">
                                                    <FaTelegram className='me-1' style={{ color: '#0088cc' }} />Telegram
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input disabled className="form-check-input" type="checkbox" id="whatsapp" />
                                                <label className="form-check-label" htmlFor="whatsapp">
                                                    <FaWhatsapp className='me-1' style={{ color: '#25d366' }} />Whatsapp
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input disabled className="form-check-input" type="checkbox" id="slack" />
                                                <label className="form-check-label" htmlFor="slack">
                                                    <FaSlack className='me-1' style={{ color: '#E01E5A' }} />Slack
                                                </label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="checkbox" defaultChecked id="form" />
                                                <label className="form-check-label" htmlFor="form">
                                                    <FaWpforms className='me-1' />Form
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='mb-3'>
                                            <label htmlFor="candidateID" className="form-label fw-bold">Collect Candidate ID</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="CollectID" id="yesId" />
                                                <label className="form-check-label" htmlFor="yesId">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="CollectID" id="noId" defaultChecked />
                                                <label className="form-check-label" htmlFor="noId">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="col-md-4">
                                        <div className='mb-3'>
                                            <label htmlFor="voiceMatch" className="form-label fw-bold">Voice Match</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="VoiceMatch" id="yesMatch" />
                                                <label className="form-check-label" htmlFor="yesMatch">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="VoiceMatch" id="noMatch" defaultChecked />
                                                <label className="form-check-label" htmlFor="noMatch">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div> */}
                                    <hr />
                                    <div className="d-flex justify-content-end me-auto gap-3">
                                        <button onClick={handleBack} type="submit" className="btn btn-outline-secondary button">Back</button>
                                        <button type="submit" onClick={handleSave} className="btn btn-dark button">Save and Continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Access;