import React, { useState } from 'react';
import styles from './Details.module.css';

import { FaTelegram, FaWhatsapp, FaSlack, FaWpforms } from 'react-icons/fa';

const Details = () => {


  const [disableButton, setDisableButton] = useState(true)

  const handleEdit = () => {
    setDisableButton(!disableButton)
  }

  const [custom, setCustom] = useState({ display: 'none' });
  const [certificate, setCertificate] = useState({ display: 'none' });

  const handleCustom = () => {
    setCustom({ display: 'block' });
  }
  const handleCustom1 = () => {
    setCustom({ display: 'none' });
  }
  const handleCertificate = () => {
    setCertificate({ display: 'block' });
  }
  const handleCertificate1 = () => {
    setCertificate({ display: 'none' });
  }

  const handleClone = () => {
    window.location = "/create";
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

      {/* Create Interaction */}
      <div
        className="modal fade modal-xl"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header d-flex justify-content-between'>
              <h1 className="modal-title" id="exampleModalLabel">
                Details
              </h1>
              <div className='d-flex gap-2'>
                <button onClick={handleClone} className='btn btn-outline-secondary button'>Clone</button>
                <button onClick={handleEdit} className='btn btn-dark button'>Edit Details</button>
              </div>
            </div>
            <div className={`${styles.modal} modal-body`}>
              <div className='container'>
                <div className='d-grid col-md-12 mx-auto'>
                  <div className='card border-dark'>
                    <h3 className={`${styles.cardHeader} card-header text-center mb-3 bg-dark text-white`}>
                      Create Interaction
                    </h3>
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="detail" className="form-label fw-bold">Company/Institute Name</label>
                              <input disabled={disableButton} type="text" className="form-control" placeholder='Enter company/institute name' id="companyName" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="job" className="form-label fw-bold">Job Title / Course Title</label>
                              <input disabled={disableButton} type="text" className="form-control" placeholder='Enter Job role' id="job" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="positionCode" className="form-label fw-bold">Test Code</label>
                              <input disabled={disableButton} type="number" className="form-control" placeholder='Enter 6-digit code' id="positionCode" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="track" className="form-label fw-bold">Track/Domain :</label>
                              <select disabled={disableButton} className="form-select" id='track' aria-label="Default select example">
                                <option value="Select">Select...</option>
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
                              <select disabled={disableButton} className="form-select" id='mode' aria-label="Default select example">
                                <option value="Select">Select...</option>
                                <option value="Audio">Audio</option>
                                <option value="Video">Video</option>
                                <option value="Mcq">Mcq</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className='mb-3'>
                              <label htmlFor="email" className="form-label fw-bold">Report Type</label>
                              <div className="form-check">
                                <input disabled={disableButton} onClick={handleCustom1} className="form-check-input" type="radio" name="CollectEmail" id="yes" defaultChecked />
                                <label className="form-check-label" htmlFor="yes">
                                  Track Based
                                </label>
                              </div>
                              <div className="form-check">
                                <input disabled={disableButton} onClick={handleCustom} className="form-check-input" type="radio" name="CollectEmail" id="no" />
                                <label className="form-check-label" htmlFor="no">
                                  Custom
                                </label>
                                <input disabled={disableButton} type="text" className="form-control mb-3" style={custom} id="custom" placeholder='Custom' aria-describedby="customHelp" required />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className='mb-3'>
                              <label htmlFor="generateCertificate" className="form-label fw-bold">Generate Certificate</label>
                              <div className="form-check">
                                <input disabled={disableButton} onClick={handleCertificate1} className="form-check-input" type="radio" name="generateCertificate" id="yes" defaultChecked />
                                <label className="form-check-label" htmlFor="no">
                                  No
                                </label>
                              </div>
                              <div className="form-check">
                                <input disabled={disableButton} onClick={handleCertificate} className="form-check-input" type="radio" name="generateCertificate" id="yes" />
                                <label className="form-check-label" htmlFor="yes">
                                  Yes
                                </label>
                                <input disabled={disableButton} type="text" className="form-control" style={certificate} id="certificate" placeholder='Certificate Name' aria-describedby="certificateHelp" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="description" className="form-label fw-bold">Instruction</label>
                              <input disabled={disableButton} type="text" className="form-control" placeholder='Your instruction' id="instruction" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="description" className="form-label fw-bold">Description</label>
                              <input disabled={disableButton} type="text" className="form-control" placeholder='Your description' id="description" />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <label htmlFor="question" className="form-label fw-bold">Total Question: <span className='badge badge bg-secondary'>No.</span></label>
                          <button disabled={disableButton} type="button" className="btn btn-outline-secondary button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                        </div>
                      </form>
                      <hr />
                      <div className="d-grid col-3 ms-auto">
                        <button disabled={disableButton} type="submit" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" className="btn btn-dark button">Save and Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-dark">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>


      {/* Access Interaction */}

      <div
        className="modal fade modal-xl"
        id="exampleModalToggle2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header d-flex justify-content-between'>
              <h1 className="modal-title" id="exampleModalLabel">
                Details
              </h1>
              <div className='d-flex gap-2'>
                <button onClick={handleClone} className='btn btn-outline-secondary button'>Clone</button>
                <button onClick={handleEdit} className='btn btn-dark button'>Edit Details</button>
              </div>
            </div>
            <div className={`${styles.modal} modal-body`}>
              <div className='container'>
                <div className='d-grid col-md-12 mx-auto'>
                  <div className='card border-dark'>
                    <h3 className={`${styles.cardHeader} text-center mb-4 card-header bg-dark text-white`}>Access Details</h3>
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
                        <button className='btn btn-dark button mb-3'>View List</button>

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
                                <input className="form-check-input" type="radio" name="CollectID" id="noId" defaultChecked />                                     <label className="form-check-label" htmlFor="noId">
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
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
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-end me-auto gap-3">
                          <button type="button" className="btn btn-outline-secondary button" data-bs-target="#exampleModal4" data-bs-toggle="modal">Back</button>
                          <button type="button" className="btn btn-dark button" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Save and Continue</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-dark">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>


      {/* Notification & Messages */}

      <div
        className="modal fade modal-xl"
        id="exampleModalToggle3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header d-flex justify-content-between'>
              <h1 className="modal-title" id="exampleModalLabel">
                Details
              </h1>
            </div>
            <div className={`${styles.modal} modal-body`}>
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
                  <button
                    type="button"
                    className="btn btn-outline-secondary button"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-dark button">Submit</button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-dark">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details;