import React, { useRef, useEffect } from 'react';
import styles from './Recording.module.css';
import { useNavigate } from "react-router-dom";
import { ReactMediaRecorder } from "react-media-recorder";

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} className="w-100" height={300} autoPlay />;
};

const Recording = () => {

  const navigate = useNavigate();

  const handleRecording = () => {
    navigate('/work')
  }

  const handleCompleted = () => {
    navigate('/confirm')
  }

  return (
    <>
      <div className={`${styles.container} container my-5`}>
        <div className="row">
          <div className={`${styles.left} col-md-4`}>
            <ReactMediaRecorder
              video={{
                aspectRatio: 0.75
              }}
              render={({ previewStream, status, startRecording, stopRecording, mediaBlobUrl }) => (
                <div className='d-flex justify-content-center flex-column'>
                  {status !== "stopped" ? (
                    <VideoPreview stream={previewStream} />
                  ) : (
                    <video className='w-100' src={mediaBlobUrl} autoPlay loop height={300} controls />
                  )}
                  <div className='d-flex justify-content-center mx-auto gap-2 my-3'>
                    <button onClick={startRecording} className="btn btn-outline-light">Start Recording</button>
                    <button onClick={stopRecording} className="btn btn-outline-light">Stop Recording</button>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h3 className='text-center mb-3'>STEP 1: Let's check your device</h3>
              <p align="justify">On your device, please grant access to your camera and microphone. <span className='text-dark fw-bold'>Run a test recording</span> to ensure you can see and hear yourself clearly.</p>
              <p align="justify" className='text-danger'>Don't worry, this is just a test recording, and won't be shared with anyone else.</p>
              <div className='d-flex justify-content-between my-3'>
                <div onClick={handleRecording} style={{ cursor: "pointer", color: "#97a39b" }} className='fw-bold text-decoration-underline'>&#60; How it Works?</div>
                <button onClick={handleCompleted} className="btn btn-dark" style={{ backgroundColor: "#97a39b", border: "#97a39b" }}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div>
      </div>
    </>
  )
}

export default Recording