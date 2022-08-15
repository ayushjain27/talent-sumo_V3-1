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
    navigate('/start')
  }

  return (
    <>
      <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row">
          <div className="col-md-4 bg-dark">
            <ReactMediaRecorder
              video={{
                aspectRatio: 0.75
              }}
              render={({ previewStream, status, startRecording, stopRecording, mediaBlobUrl }) => (
                <div className='d-flex justify-content-center flex-column'>
                  {status !== "stopped" ? (
                    <VideoPreview stream={previewStream} />
                  ) : (
                    <video className='w-100' src={mediaBlobUrl} autoplay loop height={300} controls />
                  )}
                  {/* <div className='d-grid my-3'>
                    <button onClick={startRecording} className="btn btn-light">Check</button>
                  </div> */}
                  <div className='d-flex justify-content-center mx-auto gap-2 my-3'>
                    <button onClick={startRecording} className="btn btn-outline-success">Start Recording</button>
                    <button onClick={stopRecording} className="btn btn-outline-success">Stop Recording</button>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="col-md-8 my-3 m-auto">
            <div className="container">
              <h3 className='text-center mb-3'>STEP 1: Let's check your device</h3>
              <p className="">On your device, please grant access to your camera and microphone. Run a test recording to ensure you can see and hear yourself clearly.</p>
              <p className=''>Don't worry, this is just a test recording, and won't be shared with anyone else.</p>
              <div onClick={handleRecording} style={{ cursor: "pointer" }} className='mt-3 mb-3 fw-bold text-decoration-underline'>&#60; How it Works</div>
              <button onClick={handleCompleted} className="btn btn-dark float-end">Next</button>
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