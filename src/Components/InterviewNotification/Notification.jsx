import React from 'react';
import styles from './Notification.module.css';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/access');
    }

    const handleSubmit = () => {
        // props.showAlert('Thank you for creating the interaction with test ID XYZ. Here is the interaction link created', 'success', 'LINK');
        navigate('/thankyou');
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
            <div className="container mt-5 mb-4">
                <div className="row">
                    <div className='col-md-5 m-auto'>
                        <div className='card border-dark h-100'>
                            <h3 className={`${styles.headingNotify} card-header bg-dark text-white text-center`}>Interaction Notification</h3>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="emailOne" className="form-label fw-bold">Report sent to Email-1</label>
                                        <input type="email" className="form-control" id="emailOne" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="emailTwo" className="form-label fw-bold">Report sent to Email-2</label>
                                        <input type="email" className="form-control" id="emailTwo" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold" htmlFor="report">Report sent to User</label>
                                        <select className="form-select" id='report' aria-label="Default select example">
                                            <option value="Select">Select...</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-7 m-auto'>
                        <div className={`${styles.right} card h-100`} style={{ borderColor: "#acacac" }}>
                            <h3 className={`${styles.headingMsg} card-header text-center`}>Bot Message</h3>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="welcome" className="form-label fw-bold">Interaction Welcome Message</label>
                                        <textarea className="form-control interaction" id="welcome" rows="1"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="instruction" className="form-label fw-bold">Interaction Instruction message</label>
                                        <textarea className="form-control interaction" id="instruction" rows="1"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="completion" className="form-label fw-bold">Interaction Completion Message</label>
                                        <textarea className="form-control interaction" id="completion" rows="1"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dark" className="form-label fw-bold">Bot dark Message</label>
                                        <textarea className="form-control interaction" id="dark" rows="1"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end me-auto gap-3">
                    <button onClick={handleBack} className='btn btn-outline-secondary button'>Back</button>
                    <button onClick={handleSubmit} type='submit' className='btn btn-dark button'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Notification;