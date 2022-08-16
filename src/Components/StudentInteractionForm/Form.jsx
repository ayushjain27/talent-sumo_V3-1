import React, { useState } from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { BiError } from "react-icons/bi";

const Form = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(1);
  // const [displays, setDisplays] = useState({ display: "none" });
  // const [opacity, setOpacity] = useState({ opacity: '1' })

  // var timer;

  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setSeconds(seconds - 1);

  //     if (seconds === 0) {
  //       setMinutes(minutes - 1);
  //       setSeconds(59);
  //     }

  //     if (seconds === 0 && minutes === 0) {
  //       setMinutes(0);
  //       setSeconds(0);
  //       setDisplays({
  //         display: "block",
  //         position: "absolute",
  //         top: "40%",
  //         left: "30%",
  //         right: '30%',
  //         zIndex: '1',
  //       });
  //       setOpacity({
  //         opacity: '0.3'
  //       })
  //       setInterval(() => {
  //         navigate('/');
  //       }, 2000);
  //     }
  //   }, 1000);
  //   return () => clearInterval(timer);
  // });

  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };

  const handleStartTest = (e) => {
    e.preventDefault();
    navigate('/welcome');
  };

  return (
    <>
      {/* <div style={displays}>
        <div className="d-grid col-md-5 mx-auto">
          <div className="card border-dark bg-dark">
            <div className="card-body">
              <BiError className="bg-white d-flex justify-content-center mx-auto rounded-circle p-2 fs-1 fw-bold" />
              <p className="card-text text-center mt-3">Your time has been expired !!</p>
              <p className="card-text text-center mt-3">You may re-attempt the test.</p>
            </div>
          </div>
        </div>
      </div> */}

      <style jsx="true">
        {`
          .button {
            border-radius: 0;
          }
        `}
      </style>

      <div className="container">
        <div className="d-grid col-md-8 mx-auto my-5">
          <div className="card h-100 border-dark">
            <div
              className="card-header bg-dark text-white"
              style={{ borderBottom: "2px solid #000" }}
            >
              <h3>Interaction Title</h3>
            </div>
            <div className="card-body">
              <label className="form-label fw-bold">Test Description :</label>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                explicabo modi nemo ab inventore minus in quidem nobis illo.
                Quos?
              </p>
              <label className="form-label fw-bold">Test Instruction :</label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores suscipit consequatur dolores molestias voluptas
                quaerat voluptatem sunt esse praesentium corporis.
              </p>
              <hr />
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="What is your name ?"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="What is your email ?"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="contactNumber"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="accessCode"
                    placeholder="Please enter your access code"
                  />
                </div>
                <button
                  onClick={handleDisplay}
                  className="btn btn-dark button mb-2"
                >
                  Validate
                </button>
                <hr style={{ color: "#000", borderTop: "2px solid", opacity: "1" }} />
                <div className={`${display ? "" : "d-none"}`}>
                  <ul className="list-group">
                    <h5 className="list-group-item bg-dark text-white fw-bold" aria-current="true">Instructions :</h5>
                    <li className="list-group-item">Please make sure you are in the center of the camera.</li>
                    <li className="list-group-item">Make sure you have good lighting.</li>
                    <li className="list-group-item">Use Professional dress when recording.</li>
                    <li className="list-group-item">Avoid glaze and light directly to the recording camera.</li>
                    <li className="list-group-item">Not ready for video yet? Toggle video off to record responses as audio.</li>
                    <li className="list-group-item">You will have a preview of the video before you finalize.</li>
                    <li className="list-group-item">Limit your answers to two minutes, timer will guide you. ⏲️</li>
                    <li className="list-group-item">And lastly smile more, smile often. Good luck! 😊</li>
                  </ul>
                  <button onClick={handleStartTest} className="btn btn-dark float-end mt-3">Start Test</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
