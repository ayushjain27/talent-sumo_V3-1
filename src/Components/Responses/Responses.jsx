import React from 'react';
import styles from './Responses.module.css';

const Responses = () => {
    return (
        <>
            <div className='container mt-5 mb-3'>
                <h3>Student Response</h3>
            </div>
            <div className='d-grid col-md-10 mx-auto'>
                <div className='card border-0'>
                    <div className='card-body'>
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="interactionTitle" className="col-sm-2 col-form-label fw-bold">Interaction Title : </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="interactionTitle" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="testId" className="col-sm-2 col-form-label fw-bold">Test ID :</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="testId" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="candidateId" className="col-sm-2 col-form-label fw-bold">Candidate ID:</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="candidateId " />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container`}>
                <h5>Video Response :</h5>
            </div>
            <div className={`${styles.container} container`}></div>
            <div className={`${styles.container} container`}></div>
        </>
    )
}

export default Responses;