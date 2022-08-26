import React from 'react';
import styles from './Responses.module.css';
import VideoModal from '../ModalSection/VideoModal.jsx';
import AudioModal from '../ModalSection/AudioModal.jsx';
import ImageModal from '../ModalSection/ImageModal';
import TextModal from '../ModalSection/TextModal';

const Responses = () => {
    return (
        <>
            <div className='container mt-5 mb-3'>
                <h3>Student Response</h3>
            </div>
            <div className='d-grid col-md-8 mx-auto mt-3'>
                <div className='card border-0'>
                    <div className='card-body'>
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="interactionTitle" className="col-sm-2 col-form-label fw-bold">Interaction Title : </label>
                                <div className="col-sm-10">
                                    {/* <input type="text" className="form-control" id="interactionTitle" /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">job_title</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="candidateName" className="col-sm-2 col-form-label fw-bold">Candidate Name :</label>
                                <div className="col-sm-10">
                                    {/* <input type="text" className="form-control" id="candidateName" /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">candidate_id.name</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="candidateId" className="col-sm-2 col-form-label fw-bold">Candidate ID:</label>
                                <div className="col-sm-10">
                                    {/* <input type="number" className="form-control" id="candidateId " /> */}
                                    <div tabIndex="-1" className="btn btn-light disabled placeholder" aria-hidden="true">candidate id</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response Video</h5>
                        <button data-bs-toggle="modal" data-bs-target="#videoModal" className='btn btn-secondary'>Play</button>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response Audio</h5>
                        <button data-bs-toggle="modal" data-bs-target="#audioModal" className='btn btn-secondary'>Play</button>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response MCQ</h5>
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
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="option3" defaultChecked />
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
                        <div className="alert alert-success" role="alert">
                            <strong>Correct Answer :</strong> Option 1
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response Image</h5>
                        <button data-bs-toggle="modal" data-bs-target="#imageModal" className='btn btn-secondary'>Play</button>
                    </div>
                </div>
            </div>
            <div className={`${styles.container} container p-3 my-5`}>
                <h5>Question-1 :</h5>
                <div className={`${styles.card} card border-0`}>
                    <div className="card-body">
                        <h5 className='card-title'>Response Text</h5>
                        <button data-bs-toggle="modal" data-bs-target="#textModal" className='btn btn-secondary'>Play</button>
                    </div>
                </div>
            </div>
            <VideoModal />
            <AudioModal />
            <ImageModal />
            <TextModal />
        </>
    )
}

export default Responses;