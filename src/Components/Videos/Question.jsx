import React, { useRef, useEffect, useState } from 'react';
import styles from './Question.module.css';
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";

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
  // const [second, setSecond] = useState("00");
  // const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   let intervalId;

  //   if (isActive) {
  //     intervalId = setInterval(() => {
  //       const secondCounter = counter % 60;
  //       const minuteCounter = Math.floor(counter / 60);

  //       let computedSecond =
  //         String(secondCounter).length === 1
  //           ? `0${secondCounter}`
  //           : secondCounter;
  //       let computedMinute =
  //         String(minuteCounter).length === 1
  //           ? `0${minuteCounter}`
  //           : minuteCounter;

  //       setSecond(computedSecond);
  //       setMinute(computedMinute);

  //       setCounter((counter) => counter + 1);
  //     }, 650);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [isActive, counter]);

  const {
    status,
    previewStream,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: true,
    audio: true,
    echoCancellation: true
  });

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/audiorecording');
  }

  const handleStartRecording = () => {
    if (!isActive) {
      startRecording();
    } else {
      pauseRecording();
    }

    setIsActive(!isActive);

    document.getElementById("instruction").innerHTML = isActive ? "Paused" : "Started";
  }

  const handleStopRecording = () => {
    pauseRecording();
    stopRecording();
    setIsActive(isActive);
    document.getElementById("instruction").innerHTML = "Stopped";

  }

  return (
    <>
      <div className={`${styles.container} container my-5`}>
        <div className="row">
          <div className="col-md-4 bg-dark">
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <h5 className='card-header bg-white text-center w-100 my-3 p-2' id='instruction'>Idle</h5>
              {status !== "stopped" ? (
                <VideoPreview stream={previewStream} />
              ) : (
                <video className='w-100' src={mediaBlobUrl} height={300} controls />
              )}
              {/* <div className='d-flex justify-content-center fs-1 text-white'>
                <span className="minute">{minute}</span>
                <span>:</span>
                <span className="second">{second}</span>
              </div> */}
              <button className='btn btn-light mt-3' onClick={() => window.location.reload()}>Retake</button>
              <div className='d-flex justify-content-center mx-auto gap-3 my-3'>
                <button onClick={handleStartRecording} className={`${isActive ? "btn-warning" : "btn-success"} btn `}>{isActive ? "Pause Recording" : "Start Recording"}</button>
                <button onClick={handleStopRecording} className="btn btn-danger">Stop Recording</button>
              </div>
            </div>
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
