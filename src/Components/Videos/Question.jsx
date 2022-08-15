import React, { useRef, useEffect } from 'react';
import styles from './Question.module.css';
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

const Question = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/audiorecording')
  }
  return (
    <>
      <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4 bg-dark">
            <ReactMediaRecorder
              video={{
                aspectRatio: 0.75
              }}
              render={({ previewStream, status, startRecording, stopRecording, mediaBlobUrl }) => (
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  {status !== "stopped" ? (
                    <VideoPreview stream={previewStream} />
                  ) : (
                    <video className='w-100' src={mediaBlobUrl} autoplay loop height={300} controls />
                  )}
                  <button onClick={() => window.location.reload()}>Retake</button>
                  <div className='d-flex justify-content-around align-items-center mt-3'>
                    <button onClick={startRecording} className="btn btn-outline-success">Start Recording</button>
                    <button onClick={stopRecording} className="btn btn-outline-success ms-2">Stop Recording</button>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="col-md-8">
            <h4 className='m-5'>How you are doing ?</h4>
            <hr className='mb-5 me-5 ms-5' />
            <button onClick={handleNext} className="btn btn-success w-75 m-auto text-center mb-5 d-flex justify-content-center fw-bold rounded-pill">Next Question</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
