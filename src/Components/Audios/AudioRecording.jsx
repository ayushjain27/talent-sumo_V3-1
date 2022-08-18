import React, { useEffect, useState } from 'react';
import styles from './AudioRecording.module.css';
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";

const AudioRecording = () => {
  const navigate = useNavigate();

  const handleClickStart = () => {
    if (!isActive) {
      startRecording();
    } else {
      pauseRecording();
    }

    setIsActive(!isActive);
  }

  const handleClickStop = () => {
    pauseRecording();
    stopRecording();
    setIsActive(!isActive);
  }


  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 650);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }

  const {
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true
  });

  const handleNext = () => {
    navigate('/mcq')
  }

  return (
    <>
      <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4 bg-dark">
            <div className="d-flex flex-column">
              <div className='d-flex justify-content-center'>
                <video src={mediaBlobUrl} controls />
              </div>
              <div className='d-flex justify-content-center fs-1 text-white'>
                <span className="minute">{minute}</span>
                <span>:</span>
                <span className="second">{second}</span>
              </div>
              <h5 className='text-white text-center'>Press the Start to record your audio</h5>
              <div className='d-flex justify-content-between my-3'>
                <button className='btn btn-light' onClick={stopTimer}>Retake</button>
                <div className='d-flex gap-2'>
                  <button className={`${isActive ? "btn-warning" : "btn-success"} btn `} onClick={handleClickStart}>{isActive ? "Pause" : "Start"}</button>
                  <button className='btn btn-danger' onClick={handleClickStop}>Stop</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 m-auto">
            <div className="container my-3">
              <h4>What is axios ?</h4>
              <hr />
              <button onClick={handleNext} className="btn btn-dark float-end mb-3">Save and Next</button>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default AudioRecording
