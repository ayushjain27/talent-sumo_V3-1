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
    navigate('/audiorecording');
  }

  return (
    <>
      <div className={`${styles.container} container my-5`}>
        <div className="row">
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
                    <video className='w-100' src={mediaBlobUrl} height={300} controls />
                  )}
                  <button className='btn btn-light mt-3' onClick={() => window.location.reload()}>Retake</button>
                  <div className='d-flex justify-content-center mx-auto gap-3 my-3'>
                    <button onClick={startRecording} className="btn btn-success">Start Recording</button>
                    <button onClick={stopRecording} className="btn btn-danger">Stop Recording</button>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h4>How you are doing ?</h4>
              <hr />
              <button onClick={handleNext} className="btn btn-dark float-end mb-3">Save and Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
