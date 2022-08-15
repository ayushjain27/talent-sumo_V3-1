import React from "react";
import styles from "./Interaction.module.css";
import QuesAns from '../Modal/QuesAns'
import Details from "./Details";

import { Link } from 'react-router-dom'

const Interaction = () => {
  return (
    <>
      <h3 className="text-center mt-5 mb-4">INTERACTION</h3>

      <div className="container">
        <div className="d-grid col-lg-7 mx-auto">
          <div className={`${styles.card} card`}>
            <div className="card-body">
              <form>
                <div className="row">
                  <label htmlFor="search" className="col-sm-2 col-form-label">Search :</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="search" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.container} container my-5`}>
        <div className={`${styles.header} d-flex justify-content-center`}>
          <div className={`${styles.heading} bg-dark text-white p-2`}>Test ID</div>
          <div className={`${styles.heading} bg-dark text-white p-2`}>Job/Course Title</div>
          <div className={`${styles.heading} bg-dark text-white p-2`}>Track</div>
          <div className={`${styles.heading} bg-dark text-white p-2`}>Candidate Form</div>
        </div>
        <div className={`${styles.header} d-flex justify-content-center`}>
          <div className={`${styles.heading} border border-dark p-2`} data-bs-toggle="modal" data-bs-target="#exampleModal4">5678</div>
          <div className={`${styles.heading} border border-dark p-2`}>Abc</div>
          <div className={`${styles.heading} border border-dark p-2`}>Learn HR</div>
          <div className={`${styles.heading} text-primary border border-dark p-2`}>
            <Link to="/form" target="_blank">
              Link
            </Link>
          </div>
        </div>
      </div>
      <QuesAns />
      <Details />
    </>
  );
};

export default Interaction;
